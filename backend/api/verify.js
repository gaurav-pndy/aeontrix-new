import 'dotenv/config';
export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ success: false, error: "No token provided" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const headers = {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
    };

    const pendingRes = await fetch(
      `${supabaseUrl}/rest/v1/pending_confirmations?confirmation_token=eq.${encodeURIComponent(token)}`,
      { headers }
    );
    if (!pendingRes.ok) {
      const errText = await pendingRes.text();
      return res.status(500).json({ success: false, error: "Failed to fetch pending confirmation", details: errText });
    }

    const pending = await pendingRes.json();
    if (!pending.length) {
      return res.status(404).json({ success: false, error: "Invalid or expired token" });
    }

    const { name, email, company } = pending[0];

    const insertRes = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name, email, company, is_subscribed: true }),
    });
    if (!insertRes.ok) {
      const errText = await insertRes.text();
      return res.status(500).json({ success: false, error: "Failed to insert subscriber", details: errText });
    }

    const deleteRes = await fetch(
      `${supabaseUrl}/rest/v1/pending_confirmations?confirmation_token=eq.${encodeURIComponent(token)}`,
      { method: "DELETE", headers }
    );
    if (!deleteRes.ok) {
      const errText = await deleteRes.text();
      return res.status(500).json({ success: false, error: "Failed to clean up token", details: errText });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message || "Unexpected error",
      stack: err.stack,
    });
  }
}