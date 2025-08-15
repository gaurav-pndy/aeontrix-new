import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  useEffect(() => {
    // Set document metadata
    document.title = "404 Not Found | Aeontrix";
    
    // Set canonical URL
    const canonical = document.querySelector("link[rel='canonical']") || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href); // Use current URL
    if (!canonical.parentNode) document.head.appendChild(canonical);

    // Log 404 errors (optional - for analytics)
    console.error(`404 - Page not found: ${window.location.pathname}`);
  }, []);

  return (
    <>
      <SEO
        title="404 Not Found | Aeontrix"
        description="The page you're looking for doesn't exist."
        keywords="404, page not found, Aeontrix"
        url={window.location.href}
        canonical={window.location.href}
        noindex={true}
        ogTitle="404 Not Found | Aeontrix"
        ogDescription="The page you're looking for doesn't exist."
        image="https://aeontrix.com/aeontrix-emblem.png"
      />
      
      <main>
        <div className="px-4 relative z-10 pb-12 max-w-7xl mx-auto text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="text-center content-box border-glow-wrapper highlighted-box-small relative p-10 rounded-2xl">
            <div className="border-glow"></div>
            
            <div className="flex justify-center text-[#00FF93] mb-4">
              <FaExclamationTriangle size={60} />
            </div>
            
            <h1 className="gradient-title font-bold !mb-4 text-4xl">404</h1>
            <h2 className="text-2xl font-bold text-seasalt mb-4">
              Page Not Found
            </h2>
            
            <p className="text-[#F8F9FB]/70 mb-6 max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00FF93] text-black font-semibold hover:bg-[#00ff40] transition-all duration-200"
              >
                Return to Homepage
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#1c1c1c]">
              <p className="text-sm text-[#F8F9FB]/50">
                Need help? <Link to="/contact" className="text-[#00FF93] hover:underline">Contact our support</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;