import 'dotenv/config';

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    const { email } = req.body;
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

    const subscriberRes = await fetch(
      `${supabaseUrl}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`,
      { headers }
    );
    if (!subscriberRes.ok) {
      const errText = await subscriberRes.text();
      return res.status(500).json({ success: false, error: "Failed to check subscriber", details: errText });
    }

    const subscribers = await subscriberRes.json();
    if (subscribers.length && !subscribers[0].is_subscribed) {
      return res.status(200).json({ success: true, isUnsubscribed: true });
    }

    return res.status(200).json({ success: true, isUnsubscribed: false });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Unexpected error" });
  }
}