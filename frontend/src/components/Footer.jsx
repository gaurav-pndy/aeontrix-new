import { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [attemptedSubmitDetails, setAttemptedSubmitDetails] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setAttemptedSubmitDetails(true);

    if (name.trim() === "" || !email.includes("@") || !isChecked || isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      // Check if user is already subscribed
      const checkResponse = await fetch(
        "https://api.aeontrix.com/api/check-subscription-newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const checkData = await checkResponse.json();
      if (!checkResponse.ok) {
        setErrorMessage(
          checkData.error || "Failed to check subscription status."
        );
        setIsLoading(false);
        return;
      }
      if (checkData.isSubscribed) {
        setErrorMessage(
          "You're already subscribed! If you're interested in more automations, " +
            "<a href='https://cal.com/aeontrix-ai/aeontrix-discovery' class='underline' target='_blank'>Book a Call</a> " +
            "or contact us at: <a href='mailto:contact@aeontrix.com' class='underline' target='_blank'>contact@aeontrix.com</a>."
        );
        setIsLoading(false);
        return;
      }

      // Proceed with subscription
      const response = await fetch(
        "https://hook.eu2.make.com/p3avlh88vxrm456iqxdqr907rs3ei3kf",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );

      const text = await response.text();
      if (response.ok && text === "Accepted") {
        setIsSubmitted(true); // Show "Thank You" message
      } else {
        try {
          const data = JSON.parse(text); // Try parsing as JSON for error details
          setErrorMessage(
            data.error || "Failed to subscribe. Please try again."
          );
        } catch {
          setErrorMessage("Unexpected response from server. Please try again.");
        }
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClick = (targetId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) scrollWithOffset(el, 100);
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <footer className="bg-black relative text-[#F8F9FB]/70 text-sm pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-8 border-b border-[#F8F9FB]/20 pb-6">
        <div>
          <img
            src="/logo-light.png"
            alt="logo"
            width="320"
            height="80"
            className="w-52"
          />

          <div className="w-84">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="my-2.5">
                    <h2 className="text-base font-semibold text-seasalt mb-1">
                      Sign up to our Weekly Newsletter
                    </h2>
                    <p className="text-[#F8F9FB]/70 text-xs">
                      Get Weekly Latest AI Tools, News, High Value Automation
                      Ideas, delivered to your inbox
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        className="w-[90%] bg-[#042222]/80 border border-[#03624C]/30 rounded-lg px-4 py-1.5 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300 text-xs"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {name.trim() === "" && attemptedSubmitDetails && (
                        <p className="text-[#00ff93] text-xs mt-1">
                          Name is required.
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        className="w-[90%] text-xs bg-[#042222]/80 border border-[#03624C]/30 rounded-lg px-4 py-1.5 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {email &&
                        !email.includes("@") &&
                        attemptedSubmitDetails && (
                          <p className="text-[#00ff93] text-[0.7rem] mt-1">
                            Please enter a valid email address.
                          </p>
                        )}
                    </div>
                    <div className="flex items-start gap-2 mt-2">
                      <input
                        value={isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                        type="checkbox"
                        id="terms"
                        className="accent-[#00FF93] mt-0.5 w-3 h-3"
                      />
                      <label
                        htmlFor="terms"
                        className="text-seasalt text-xs leading-snug cursor-pointer"
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
                    <div className="flex justify-center pt-2">
                      <button
                        disabled={
                          name === "" || email === "" || !isChecked || isLoading
                        }
                        onClick={handleSubmit}
                        className={`glow-button text-xs bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-5 py-1 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden ${
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
                    {errorMessage && (
                      <p
                        className="text-[#00FF93] mt-2 text-[0.7rem]"
                        dangerouslySetInnerHTML={{ __html: errorMessage }}
                      />
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-sm mt-5 text-[#F8F9FB]"
                >
                  <h3 className="text-[#00FF93] font-bold text-2xl">
                    Thank You
                  </h3>
                  <p className="mt-2">
                    We have sent you a{" "}
                    <span className="font-medium">Confirmation Email</span>.
                    <br />
                    Check your spam folder if you can’t find it.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base text-white mb-5">
            Solutions with Use Cases
          </h3>
          <ul className="space-y-3">
            {[
              { label: "AI SDR", id: "ai-sdr" },
              { label: "AI Project Manager", id: "ai-project-manager" },
              { label: "AI Marketing Suite", id: "ai-marketing-suite" },
              { label: "AI Secretary", id: "ai-secretary" },
              { label: "AI Customer Support", id: "ai-customer-support" },
              { label: "AI Business Partner", id: "ai-business-partner" },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  to={`/solutions/${item.id}`}
                  className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-base mb-5">Resources</h3>
          <ul className="space-y-3">
            <li
              onClick={() => handleClick("generate-plan")}
              className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
            >
              Free AI Plan Generator
            </li>
            {["Blogs"].map((item) => (
              <li key={item}>
                <Link
                  to={"/blogs"}
                  className="hover:text-[#00FF93] transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-base mb-5">Connect</h3>
          <ul className="space-y-3 mb-4">
            <li>
              <p
                onClick={() => handleClick("Contact")}
                className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </p>
            </li>
            <li>
              <a
                href="https://cal.com/aeontrix-ai/aeontrix-discovery"
                target="_blank"
                className="hover:text-[#00FF93] transition-colors duration-200"
              >
                Book a Call
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://x.com/AeontrixAI"
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/aeontrix"
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/aeontrix.ai?igsh=MXQxenh3YWY0N292MQ=="
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between items-center text-[#F8F9FB]/40 pt-6 text-xs gap-2">
        <span>© 2025 Aeontrix AI. All rights reserved.</span>
        <div className="flex gap-4">
          <a
            href="/privacy-policy"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Terms of Service
          </a>
          <a
            href="/refund-policy"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
