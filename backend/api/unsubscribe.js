import 'dotenv/config';

export default async function handler(req, res) {

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: "No email provided" });
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

    const subscriberRes = await fetch(
      `${supabaseUrl}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`,
      { headers }
    );
    if (!subscriberRes.ok) {
      const errText = await subscriberRes.text();
      return res.status(500).json({ success: false, error: "Failed to check subscriber", details: errText });
    }
    const subscribers = await subscriberRes.json();
    if (!subscribers.length) {
      return res.status(404).json({ success: false, error: "Subscriber not found" });
    }

    const updateRes = await fetch(
      `${supabaseUrl}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({ is_subscribed: false }),
      }
    );
    if (!updateRes.ok) {
      const errText = await updateRes.text();
      return res.status(500).json({ success: false, error: "Failed to unsubscribe", details: errText });
    }

    return res.status(200).json({ success: true, message: "Successfully unsubscribed" });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message || "Unexpected error",
    });
  }
}