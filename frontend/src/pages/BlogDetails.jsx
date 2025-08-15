import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import NotFoundPage from "./NotFoundPage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // or any other highlight.js theme
import "./markdown.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscriptionMsg, setSubscriptionMsg] = useState("");
  const [subscriber, setSubscriber] = useState({ name: "", email: "" });

  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp && decoded.exp > currentTime;
    } catch {
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubscriber((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    setSubscriptionMsg("");

    if (!isChecked) {
      setSubscriptionMsg("Please agree to the terms and policies.");
      return;
    }

    try {
      // First, check if the email is already subscribed
      const checkResponse = await fetch(
        "https://api.aeontrix.com/api/check-subscription-newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: subscriber.email }),
        }
      );

      if (!checkResponse.ok) {
        throw new Error("Failed to check subscription status");
      }

      const checkData = await checkResponse.json();

      // Always generate a new token whether subscribed or not
      const subscribeResponse = await fetch(
        "https://api.aeontrix.com/api/blogs-subscription/subscribe-newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscriber),
        }
      );

      if (!subscribeResponse.ok) {
        const errorData = await subscribeResponse.json();
        throw new Error(errorData.error || "Subscription failed");
      }

      const subscribeData = await subscribeResponse.json();

      if (subscribeData.token) {
        localStorage.setItem("blog_subscription_token", subscribeData.token);
        setBlog((prev) => ({ ...prev, subscribed: true }));
      }

      if (!checkData.isSubscribed) {
        setSubscriptionMsg(
          "A newsletter confirmation email has been sent. Please confirm and refresh the page."
        );
        setIsSubmitted(true);
      } else {
        // Already subscribed, just refresh to show content
        window.location.reload();
      }

      setSubscriber({ name: "", email: "" });
      setIsChecked(false);
    } catch (err) {
      setSubscriptionMsg(err.message || "Subscription failed");
    }
  };

  useEffect(() => {
    const fetchBlogAndCheckSubscription = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check subscription status
        let isSubscribed = false;
        const token = localStorage.getItem("blog_subscription_token");
        if (token && isTokenValid(token)) {
          const decoded = jwtDecode(token);
          const storedEmail = decoded.email;
          if (storedEmail) {
            const checkResponse = await fetch(
              "https://api.aeontrix.com/api/check-subscription-newsletter",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: storedEmail }),
              }
            );

            if (!checkResponse.ok) {
              throw new Error("Failed to verify subscription status");
            }

            const checkData = await checkResponse.json();
            isSubscribed = checkData.isSubscribed;
          }
        }

        // Fetch blog
        const blogId = location.state?.id;
        const url = blogId
          ? `${baseUrl}/api/blogs/${blogId}`
          : `${baseUrl}/api/blogs/slug/${slug}`;

        const response = await fetch(url, {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          if (response.status === 404) {
            navigate("/404", { replace: true });
            return;
          }
          throw new Error(`Failed to load blog: ${response.status}`);
        }

        const data = await response.json();
        if (!data.blog) {
          throw new Error("Blog data not found");
        }

        // 🔹 Normalize content
        let content = data.blog.content;
        if (typeof content === "string") {
          content = content.replace(/\\n/g, "\n").replace(/\r/g, "");
        } else if (content && typeof content === "object" && content.markdown) {
          content = content.markdown.replace(/\\n/g, "\n");
        } else {
          content = String(content ?? "");
        }

        setBlog({
          ...data.blog,
          content,
          subscribed: isSubscribed,
        });
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogAndCheckSubscription();
  }, [location.state, slug, navigate]);

  useEffect(() => {
    if (!blog) return;

    const effectiveSlug = slug || blog.slug || "";
    if (!effectiveSlug) return;

    const canonicalHref = `https://aeontrix.com/blogs/${effectiveSlug}`;
    let canonicalTag = document.querySelector("link[rel='canonical']");

    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonicalHref);
    } else {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      canonicalTag.setAttribute("href", canonicalHref);
      document.head.appendChild(canonicalTag);
    }

    return () => {
      if (canonicalTag && canonicalTag.parentNode) {
        canonicalTag.parentNode.removeChild(canonicalTag);
      }
    };
  }, [slug, blog]);

  if (loading) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Loading blog...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white py-20 text-xl">Error: {error}</div>
    );
  }

  return (
    <div className="max-w-5xl relative z-10 mx-auto px-4 pt-4 pb-12 text-[#F8F9FB]">
      <SEO
        title={`${blog.title} | Aeontrix Blog`}
        description={
          blog.content
            ? `${blog.content
                .split(" ")
                .slice(0, 30)
                .join(" ")
                .substring(0, 150)}...`
            : "Read the latest AI insights from Aeontrix."
        }
        keywords={`${
          blog.category
        }, AI blog, AI automation, Aeontrix, ${blog.title
          .toLowerCase()
          .replace(/\s/g, ",")}`}
        url={`https://aeontrix.com/blogs/${slug}`}
        canonical={`https://aeontrix.com/blogs/${slug}`}
        ogTitle={`${blog.title} | Aeontrix Blog`}
        ogDescription={
          blog.content
            ? `${blog.content
                .split(" ")
                .slice(0, 30)
                .join(" ")
                .substring(0, 150)}...`
            : "Read the latest AI insights from Aeontrix."
        }
        image={blog.image_url || "https://aeontrix.com/aeontrix-emblem.png"}
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          image: blog.image_url || "https://aeontrix.com/aeontrix-emblem.png",
          datePublished: blog.date,
          author: {
            "@type": "Organization",
            name: "Aeontrix",
          },
          publisher: {
            "@type": "Organization",
            name: "Aeontrix",
            logo: {
              "@type": "ImageObject",
              url: "https://aeontrix.com/aeontrix-emblem.png",
            },
          },
        }}
      />

      <Link
        to="/blogs"
        className="text-[#00FF93] hover:underline mb-4 inline-block"
      >
        ← All Blogs
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        {blog.title}
      </h1>
      <div className="flex items-center gap-4 text-sm opacity-70 mb-6">
        <span className="px-2.5 py-1 rounded-full bg-[#00FF93]/10 text-[#00FF93] font-medium">
          {blog.category}
        </span>
        <span>{blog.date}</span>
      </div>

      <div
        className={`content-div content-box border-glow-wrapper highlighted-box-small rounded-2xl p-4 md:p-6 shadow-2xl relative ${
          !blog.subscribed ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <div className="border-glow"></div>

        <img
          loading="lazy"
          src={blog.image_url}
          alt={blog.title}
          className="rounded-xl max-h-[33rem] w-full object-fit mb-4"
          onError={(e) => {
            e.target.src = "https://aeontrix.com/aeontrix-emblem.png";
          }}
        />

        <div className="markdown-body max-w-screen-md mx-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {blog.content ?? ""}
          </ReactMarkdown>
        </div>

        {blog.resources?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blog.resources.map((resource, index) => {
                const isFile = resource.type === "file";

                const handleDownload = async (e) => {
                  e.preventDefault();
                  try {
                    const response = await fetch(resource.url);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = resource.name || "download";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  } catch (err) {
                    alert("Download failed. Please try again.");
                  }
                };

                return isFile ? (
                  <button
                    key={index}
                    onClick={handleDownload}
                    className="flex items-center gap-3 px-4 py-3 border border-[#00FF93] text-[#00FF93] rounded-lg hover:bg-[#00FF93]/10 transition-colors duration-200 group w-full text-left"
                  >
                    <FiDownload className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="truncate">
                      {resource.name || "Download"}
                    </span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-[#00FF93] text-[#00FF93] rounded-lg hover:bg-[#00FF93]/10 transition-colors duration-200 group"
                  >
                    <FiExternalLink className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="truncate">
                      {resource.name || "Open Link"}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {!blog.subscribed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="text-center bg-[#111] p-6 rounded-xl border border-white/20 max-w-md w-full mx-4">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[#00FF93] font-bold text-2xl mb-2">
                    Unlock This Content
                  </h3>
                  <p className="text-white text-lg mb-4">
                    Subscribe to our newsletter to access premium content.
                  </p>
                  <form
                    onSubmit={handleSubscription}
                    className="space-y-4 mt-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={subscriber.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-[#00FF93]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={subscriber.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-[#00FF93]"
                    />
                    <div className="flex items-start text-left text-sm gap-2 mt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                        className="accent-[#00FF93] w-5 h-5 mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="text-seasalt leading-snug cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-[#00FF93]"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/terms-of-service"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-[#00FF93]"
                        >
                          Terms of Service
                        </a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#00FF93] text-black font-semibold py-2 rounded hover:bg-[#00E685] transition"
                    >
                      Subscribe & Unlock
                    </button>
                    {subscriptionMsg && (
                      <p className="text-sm text-[#00FF93] mt-2">
                        {subscriptionMsg}
                      </p>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mt-5 text-[#F8F9FB]"
                >
                  <h3 className="text-[#00FF93] font-bold text-2xl mb-2">
                    Almost There!
                  </h3>
                  <p className="mb-4">
                    We've sent a confirmation email to{" "}
                    <span className="text-[#00FF93]">{subscriber.email}</span>
                  </p>
                  <p className="text-sm opacity-80">
                    Please check your inbox and click the confirmation link to
                    access this content.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
