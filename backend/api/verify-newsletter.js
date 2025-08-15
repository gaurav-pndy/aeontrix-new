import 'dotenv/config';
import jwt from "jsonwebtoken";

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

    // Fetch pending confirmation
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

    const { name, email } = pending[0];

    // Insert into newsletter_subscribers
    const insertNewsletterRes = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ 
        name, 
        email, 
        is_subscribed: true,
        subscribed_at: new Date().toISOString()
      }),
    });
    if (!insertNewsletterRes.ok) {
      const errText = await insertNewsletterRes.text();
      return res.status(500).json({ success: false, error: "Failed to insert into newsletter_subscribers", details: errText });
    }

    // Insert into users table
    const insertUsersRes = await fetch(`${supabaseUrl}/rest/v1/users`, {
      method: "POST",
      headers,
      body: JSON.stringify({ 
        name, 
        email, 
        is_subscribed: true,
        subscribed_at: new Date().toISOString()
      }),
    });
    if (!insertUsersRes.ok) {
      const errText = await insertUsersRes.text();
      console.error("Failed to insert into users table:", errText);
    }

    // Delete the pending confirmation
    const deleteRes = await fetch(
      `${supabaseUrl}/rest/v1/pending_confirmations?confirmation_token=eq.${encodeURIComponent(token)}`,
      { method: "DELETE", headers }
    );
    if (!deleteRes.ok) {
      const errText = await deleteRes.text();
      return res.status(500).json({ success: false, error: "Failed to clean up token", details: errText });
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      {
        email,
        is_subscribed: true,
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    return res.status(200).json({ 
      success: true,
      token: jwtToken
    });
  } catch (err) {
    console.error("Verification error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Unexpected error",
      stack: err.stack,
    });
  }
}