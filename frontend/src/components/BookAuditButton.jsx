import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const BookAuditButton = ({
  label = "Book a Free Discovery Call",
  showIcon = false,
  className = "",
}) => {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const initCal = async () => {
      try {
        // Small delay to ensure CRA dev environment scripts are ready
        await new Promise((resolve) => setTimeout(resolve, 50));

        const cal = await getCalApi();

        if (cancelled) return; // skip if component unmounted

        cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#00ff95" },
            dark: { "cal-brand": "#00ff95" },
          },
          layout: "month_view",
          hideEventTypeDetails: false,
        });

        setCalLoaded(true);
        console.log("Cal.com API initialized successfully");
      } catch (error) {
        console.warn(
          "Cal.com API failed to initialize. Fallback link will be used.",
          error
        );
      }
    };

    initCal();

    // Cleanup on unmount
    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = () => {
    if (!calLoaded) {
      // Fallback link if API isn't ready yet
      window.open("https://cal.com/aeontrix-ai/aeontrix-discovery", "_blank");
    }
  };

  return (
    <button
      data-cal-link="aeontrix-ai/aeontrix-discovery"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      onClick={handleClick}
      className={`glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center ${className}`}
    >
      <span className="relative z-10">{label}</span>
      {showIcon && (
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
      <span className="cursor-glow"></span>
    </button>
  );
};

export default BookAuditButton;
