import React, { useState } from "react";
import { X } from "lucide-react";
import BookAuditButton from "./BookAuditButton";

const ResubscribePopup = ({ onClose, onResubscribe, email }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResubscribed, setIsResubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleResubscribe = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("https://api.aeontrix.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(
          data.error || "Failed to resubscribe. Please try again."
        );
        return;
      }
      setIsResubscribed(true);
      onResubscribe();
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isLoading) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-70 bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="content-box border-glow-wrapper highlighted-box  backdrop-blur-lg  rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 text-center max-w-xl">
        <div className="border-glow"></div>

        <button
          onClick={onClose}
          disabled={isLoading}
          className={`absolute top-4 right-4 text-[#00FF93] hover:text-[#00FF93]/80 transition ${
            isLoading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {isResubscribed ? (
          <>
            <h2 className="text-3xl font-bold text-seasalt mb-4">
              We're glad to have you back!
            </h2>
            <p className="text-[#F8F9FB]/70 text-lg mb-6">
              You've successfully resubscribed to our updates and content.
            </p>
            <div className="flex justify-center">
              <BookAuditButton label="Book a Call" className="px-8 !py-3" />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-seasalt mb-4">
              You recently unsubscribed
            </h2>
            <p className="text-[#F8F9FB]/70 text-lg mb-6">
              Do you want to resubscribe to our updates and content?
            </p>
            {errorMessage && (
              <p className="text-[#00FF93] mb-4">{errorMessage}</p>
            )}
            <div className="flex justify-center">
              <button
                onClick={handleResubscribe}
                disabled={isLoading}
                className={`glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                  isLoading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <span className="relative z-10">
                  {isLoading ? "Resubscribing..." : "Resubscribe"}
                </span>
                <span className="cursor-glow"></span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResubscribePopup;
