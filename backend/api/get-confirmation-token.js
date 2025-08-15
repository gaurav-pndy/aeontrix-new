import 'dotenv/config';
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    const response = await fetch(
      `${supabaseUrl}/rest/v1/pending_confirmations?email=eq.${encodeURIComponent(email)}`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    if (!response.ok || !data.length) {
      return res.status(404).json({ success: false, error: 'No pending confirmation found' });
    }

    return res.status(200).json({ success: true, token: data[0].confirmation_token });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}