import express from "express";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Supabase client setup
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Subscribe to newsletter function
const subscribeToNewsletter = async (name, email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  // Check if user is already subscribed
  const { data: existingSubscriber, error: fetchError } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (fetchError) {
    throw new Error("Error checking subscription: " + fetchError.message);
  }

  if (existingSubscriber && existingSubscriber.is_subscribed) {
    // Generate JWT token for existing subscriber
    const token = jwt.sign(
      {
        id: existingSubscriber.id,
        email: existingSubscriber.email,
        is_subscribed: true,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    return {
      token,
      message: "Already subscribed. Token generated.",
    };
  }

  // Trigger webhook for new subscription
  const webhookUrl = "https://hook.eu2.make.com/p3avlh88vxrm456iqxdqr907rs3ei3kf";
  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  const webhookText = await webhookResponse.text();
  if (!webhookResponse.ok || webhookText !== "Accepted") {
    try {
      const webhookData = JSON.parse(webhookText);
      throw new Error(webhookData.error || "Failed to trigger subscription webhook.");
    } catch {
      throw new Error("Unexpected response from webhook.");
    }
  }

  return {
    token: null, // No token for unconfirmed users
    message: "Subscription request sent. Please check your email for confirmation.",
  };
};

// Route: POST /api/blogs-subscription/subscribe-newsletter
router.post("/subscribe-newsletter", async (req, res) => {
  try {
    const { name, email } = req.body;

    const result = await subscribeToNewsletter(name, email);

    return res.status(200).json({
      success: true,
      token: result.token,
      message: result.message,
    });
  } catch (err) {
    console.error("Subscription error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Subscription failed",
    });
  }
});

export default router;