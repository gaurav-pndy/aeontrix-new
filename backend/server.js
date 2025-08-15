import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import verifyHandler from "./api/verify.js";
import subscribeHandler from "./api/subscribe.js";
import resubscribeHandler from "./api/resubscribe.js";
import getConfirmationTokenHandler from "./api/get-confirmation-token.js";
import unsubscribeHandler from "./api/unsubscribe.js";
import checkSubscriptionHandler from "./api/check-subscription.js";
import verifyNewsletterHandler from "./api/verify-newsletter.js";
import checkSubscriptionNewsletterHandler from "./api/check-subscription-newsletter.js";
import blogsSubscription from "./api/blogsSubscription.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

// Routes
app.post("/api/verify", verifyHandler);
app.post("/api/subscribe", subscribeHandler);
app.post("/api/resubscribe", resubscribeHandler);
app.post("/api/get-confirmation-token", getConfirmationTokenHandler);
app.post("/api/unsubscribe", unsubscribeHandler);
app.post("/api/check-subscription", checkSubscriptionHandler);
app.post("/api/verify-newsletter", verifyNewsletterHandler);
app.post(
  "/api/check-subscription-newsletter",
  checkSubscriptionNewsletterHandler
);
app.use("/api/blogs-subscription", blogsSubscription);

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "frontend/build")));

// Catch-all handler to send index.html for non-API routes
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  } else {
    res.status(404).json({ error: "API route not found" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
    details: err.message,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
