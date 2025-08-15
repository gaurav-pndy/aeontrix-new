import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookAuditButton from "../BookAuditButton";
import ResubscribePopup from "../ResubscribePopup";

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [attemptedSubmitCompany, setAttemptedSubmitCompany] = useState(false);
  const [attemptedSubmitDetails, setAttemptedSubmitDetails] = useState(false);

  const handleSubmitCompany = () => {
    setAttemptedSubmitCompany(true);
    if (company.length >= 5 && company.length <= 300) {
      setShowContactForm(true);
    }
  };

  const checkSubscriptionStatus = async () => {
    if (!email.includes("@")) {
      return false;
    }
    try {
      const response = await fetch(
        "https://api.aeontrix.com/api/check-subscription",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || "Failed to check subscription status.");
        return false;
      }
      if (data.isUnsubscribed) {
        setIsUnsubscribed(true);
        setShowPopup(true);
        return true;
      }
      return false;
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      return false;
    }
  };

  useEffect(() => {
    document
      .querySelectorAll(".content-box border-glow-wrapper")
      .forEach((box) => {
        const border = box.querySelector(".border-glow");

        const handleMouseMove = (e) => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          border.style.setProperty("--x", `${x}px`);
          border.style.setProperty("--y", `${y}px`);
        };

        const handleMouseLeave = () => {
          border.style.setProperty("--x", `-200px`);
          border.style.setProperty("--y", `-200px`);
        };

        box.addEventListener("mousemove", handleMouseMove);
        box.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
          box.removeEventListener("mousemove", handleMouseMove);
          box.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
  }, [isSubmitted]);

  const handleSubmit = async () => {
    setAttemptedSubmitDetails(true);

    if (name.trim() === "" || !email.includes("@") || !isChecked || isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      // Check subscription status first
      const isUnsubscribedUser = await checkSubscriptionStatus();
      if (isUnsubscribedUser) {
        return; // Block submission if unsubscribed and show popup
      }

      // Proceed with subscription for new or subscribed users
      const response = await fetch("https://api.aeontrix.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          setErrorMessage(
            "You have already filled this form. If you believe this is an error, please contact: contact@aeontrix.com."
          );
        } else {
          setErrorMessage(
            data.error || "Failed to subscribe. Please try again."
          );
        }
        return;
      }
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setIsUnsubscribed(false);
    setCompany("");
    setName("");
    setEmail("");
    setIsChecked(false);
    setAttemptedSubmitCompany(false);
    setAttemptedSubmitDetails(false);
    setShowContactForm(false);
    setErrorMessage("");
    window.location.assign("/"); // Refresh and redirect to main page
  };

  const handleResubscribe = () => {
    setIsUnsubscribed(false);
    // Popup remains open to show success message and Book a Call button
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 pt-6 ">
      <div className="flex justify-center mb-8">
        <div className="green-glass-badge backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
          <span className="text-[#00FF93] font-medium">
            Your AI Transformation Partner
          </span>
        </div>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F8F9FB] mb-6">
          <span className="text-[#00FF93]">Upgrade</span> Your Business
          Operations with <span className="text-[#00FF93]">AI Solutions</span>
        </h1>
        <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed">
          We build Secure, ROI-focused AI Automations <br />
          that helps you Cut Costs, Save Time, and Scale Faster.
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <BookAuditButton showIcon={true} className="text-lg space-x-2" />
      </div>
      <div id="generate-plan" className="max-w-4xl mx-auto">
        {!isSubmitted ? (
          <div className="content-box border-glow-wrapper highlighted-box  backdrop-blur-lg  rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500">
            <div className="border-glow"></div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-seasalt mb-4">
                Begin Your AI Workforce Transformation
              </h2>
              <p className="text-[#F8F9FB]/70 text-lg">
                Take the first step toward a more efficient, cost-effective
                workforce.
              </p>
            </div>
            {!showContactForm ? (
              <div>
                <label className="block text-seasalt font-semibold mb-3 text-lg">
                  Describe your business or Industry{" "}
                  <span className="text-[#00FF93]">*</span>
                </label>
                <textarea
                  className="w-full h-52 md:h-40 bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300 resize-none"
                  placeholder='Prompt examples:
"I have a Dental Clinic in NYC"
"I run a real estate agency in Austin, Tx"
"I have an E-Commerce brand based in the US"
"My business is a Digital Marketing Agency"'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  minLength={5}
                  maxLength={300}
                />
                {attemptedSubmitCompany && company.length < 5 && (
                  <p className="text-[#00ff93] text-sm mt-2">
                    Minimum 5 characters, maximum 300 characters
                  </p>
                )}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleSubmitCompany}
                    className={`glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden `}
                  >
                    <span className="relative z-10">
                      Generate AI Workforce Plan
                    </span>
                    <span className="cursor-glow"></span>
                  </button>
                </div>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: "90%", filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: "100%", filter: "blur(0px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-seasalt font-semibold mb-3 text-lg">
                      Your Name <span className="text-[#00FF93]">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {name.trim() === "" && attemptedSubmitDetails && (
                      <p className="text-[#00ff93] text-sm mt-2">
                        Name is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-seasalt font-semibold mb-3 text-lg">
                      Your E-mail <span className="text-[#00FF93]">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email &&
                      !email.includes("@") &&
                      attemptedSubmitDetails && (
                        <p className="text-[#00ff93] text-sm mt-2">
                          Please enter a valid email address.
                        </p>
                      )}
                    {errorMessage && (
                      <p className="text-[#00FF93] mt-4">
                        {errorMessage.includes("contact@aeontrix.com") ? (
                          <>
                            You're already subscribed! If you're interested in
                            more automations,{" "}
                            <a
                              href="https://cal.com/aeontrix-ai/aeontrix-discovery"
                              className="underline"
                              target="_blank"
                            >
                              Book a Call
                            </a>{" "}
                            or contact us at:{" "}
                            <a
                              href="mailto:contact@aeontrix.com"
                              className="underline"
                              target="_blank"
                            >
                              contact@aeontrix.com
                            </a>
                            .
                          </>
                        ) : (
                          errorMessage
                        )}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <input
                      value={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                      type="checkbox"
                      id="terms"
                      className="accent-[#00FF93] w-4 h-4"
                    />
                    <label
                      htmlFor="terms"
                      className="text-seasalt leading-snug cursor-pointer"
                    >
                      I have read, understood, and agree to the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="underline text-[#00FF93]"
                      >
                        Privacy Policy
                      </a>
                      ,{" "}
                      <a
                        href="/refund-policy"
                        target="_blank"
                        className="underline text-[#00FF93]"
                      >
                        Refund & Cancellation Policy
                      </a>
                      , and{" "}
                      <a
                        href="/terms-of-service"
                        target="_blank"
                        className="underline text-[#00FF93]"
                      >
                        Terms of Service
                      </a>
                      . <span className="text-[#00FF93]">*</span>
                    </label>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button
                      disabled={
                        name === "" || email === "" || !isChecked || isLoading
                      }
                      onClick={handleSubmit}
                      className={`glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                        name === "" || email === "" || !isChecked || isLoading
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <span className="relative z-10">
                        {isLoading ? "Submitting..." : "Submit"}
                      </span>
                      <span className="cursor-glow"></span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: "90%", filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: "100%", filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="content-box border-glow-wrapper highlighted-box text-center rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500"
          >
            <div className="border-glow"></div>
            <h2 className="text-3xl mb-2 md:text-4xl font-bold text-[#00FF93]">
              Thank You!
            </h2>
            <p className="text-[#F8F9FB]/80 text-2xl">
              Your free guide is on its way to your inbox.
              <br />
              <span className="text-lg">
                (Check your spam folder just in case!)
              </span>
            </p>
            <br />
            <h3 className="text-2xl mt-4 font-semibold text-seasalt">
              Want to skip the queue?
            </h3>
            <p className="text-[#F8F9FB]/70 text-lg mt-2">
              Book a free, no-obligation call with us — we'll walk you through
              quick-win automation opportunities tailored to your business.
            </p>
            <div className="flex justify-center mt-8">
              <BookAuditButton className="px-8 !py-3" />
            </div>
          </motion.div>
        )}
      </div>

      {showPopup && (
        <ResubscribePopup
          onClose={handleClose}
          onResubscribe={handleResubscribe}
          email={email}
        />
      )}
    </section>
  );
};

export default HeroSection;
