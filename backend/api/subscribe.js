import 'dotenv/config';

export default async function handler(req, res) {

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    const { name, email, company } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: "Email is required" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const headers = {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
    };

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ success: false, error: "Supabase configuration missing" });
    }

    const pendingRes = await fetch(
      `${supabaseUrl}/rest/v1/pending_confirmations?email=eq.${encodeURIComponent(email)}`,
      { headers }
    );
    if (!pendingRes.ok) {
      const errText = await pendingRes.text();
      return res.status(500).json({ success: false, error: "Failed to check pending confirmation", details: errText });
    }
    const pending = await pendingRes.json();
    if (pending.length) {
      return res.status(409).json({ success: false, error: "Confirmation pending for this email" });
    }

    const subscriberRes = await fetch(
      `${supabaseUrl}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`,
      { headers }
    );
    if (!subscriberRes.ok) {
      const errText = await subscriberRes.text();
      return res.status(500).json({ success: false, error: "Failed to check subscriber", details: errText });
    }
    const subscribers = await subscriberRes.json();
    if (subscribers.length && subscribers[0].is_subscribed) {
      return res.status(409).json({ success: false, error: "User already subscribed" });
    }

    if (subscribers.length && !subscribers[0].is_subscribed) {
      const updateRes = await fetch(
        `${supabaseUrl}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`,
        {
          method: "PATCH",
          headers,
          body: JSON.stringify({ is_subscribed: true }),
        }
      );
      if (!updateRes.ok) {
        const errText = await updateRes.text();
        return res.status(500).json({ success: false, error: "Failed to resubscribe", details: errText });
      }
      return res.status(200).json({ success: true, message: "Resubscribed successfully" });
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company }),
    });
    if (!webhookRes.ok) {
      const errText = await webhookRes.text();
      return res.status(500).json({ success: false, error: "Failed to trigger confirmation email", details: errText });
    }

    return res.status(200).json({ success: true, message: "Confirmation email sent" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Unexpected error" });
  }
}
