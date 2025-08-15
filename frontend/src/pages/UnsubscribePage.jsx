import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const UnsubscribePage = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [resubscribed, setResubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [location]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setError("No email provided in the URL");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.aeontrix.com/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to unsubscribe");
      }
      setConfirmed(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResubscribe = async () => {
    if (!email) {
      setError("No email provided in the URL");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.aeontrix.com/api/resubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to resubscribe");
      }
      setResubscribed(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Unsubscribe | Aeontrix</title>
      </Helmet>
      <div className="content-box border-glow-wrapper highlighted-box  backdrop-blur-lg  rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 text-center max-w-xl">
        <div className="border-glow"></div>

        {!confirmed && !resubscribed && (
          <>
            <h1 className="text-3xl font-bold text-seasalt mb-4">
              Wait! Are You Sure You Want to Unsubscribe?
            </h1>
            <p className="text-[#F8F9FB]/70 text-lg text-left mb-2">
              We’ll be sorry to see you go. By unsubscribing, you’ll miss out
              on:
            </p>
            <ul className="text-left text-lg text-seasalt mb-6 list-disc list-inside space-y-1">
              <li>Weekly emails packed with high-value automation ideas</li>
              <li>Free tools</li>
              <li>AI workflows and industry-specific tips</li>
            </ul>
            <p className="text-[#F8F9FB]/70 mb-4">
              If you're sure, please confirm below.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
              disabled={isLoading}
            >
              <span className="relative z-10">
                {isLoading ? "Processing..." : "Confirm Unsubscribe"}
              </span>
              <span className="cursor-glow"></span>
            </button>
            {error && (
              <p className="text-red-500 mt-4">
                {error}. Please contact:{" "}
                <a
                  href="mailto:contact@aeontrix.com"
                  className="underline text-[#00FF93]"
                >
                  contact@aeontrix.com
                </a>
                .
              </p>
            )}
          </>
        )}

        {confirmed && !resubscribed && (
          <>
            <h1 className="text-3xl font-bold text-seasalt mb-4">
              We're sorry to see you go
            </h1>
            <p className="text-[#F8F9FB]/70 text-lg mb-6">
              If you did it by accident, or if you have changed your mind, you
              can still re-subscribe below!
            </p>
            <button
              onClick={handleResubscribe}
              className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
              disabled={isLoading}
            >
              <span className="relative z-10">
                {isLoading ? "Processing..." : "Keep me subscribed"}
              </span>
              <span className="cursor-glow"></span>
            </button>
            {error && (
              <p className="text-red-500 mt-4">
                {error}. Please contact:{" "}
                <a
                  href="mailto:contact@aeontrix.com"
                  className="underline text-[#00FF93]"
                >
                  contact@aeontrix.com
                </a>
                .
              </p>
            )}
            <p className="text-seasalt my-6">
              Need help or want fewer emails instead?{" "}
              <a
                href="mailto:contact@aeontrix.com"
                target="_blank"
                className="underline text-[#00FF93]"
              >
                Contact us.
              </a>
            </p>
          </>
        )}

        {resubscribed && (
          <div className="min-h-60 flex items-center">
            <h1 className="text-3xl font-bold text-seasalt">
              We're glad to have you back!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
