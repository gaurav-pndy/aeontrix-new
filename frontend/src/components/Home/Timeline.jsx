import React, { useEffect, useRef, useState } from "react";
import LogoGrid from "./TimelineAnim/LogoGrid";
import BuildAnim from "./TimelineAnim/BuildAnim";
import OptimizeAnim from "./TimelineAnim/OptimizeAnim";

const eventsData = [
  {
    phase: "Discovery & AI Audit (Exploration & Planning)",
    pricing:
      "Start with a Refundable AI Audit Fee, Credited toward your AI Solutions if you Proceed.",
    duration: "1 week",
    process: [
      "Discovery Call to see <b>if we'll be a good fit</b>",
      "You pay a <b>refundable AI Audit fee</b>",
      "We'll have Stakeholder Interviews to understand your business inside-out",
      "We analyse your processes for 2-3 days",
      `AI Audit Presentation:
      <ul class='list-disc ml-8 -space-y-6 -mt-6  -mb-6'>
        <li>Opportunity Matrix</li>
        <li>AI Transformation Plan</li>
        <li>AI Implementation Roadmap</li>
        <li>Actionable Steps</li>
      </ul>`,
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A List of High-Impact AI Opportunities",
        "Clear AI Implementation Plan",
        "Estimate of Costs",
      ],
    },
  },
  {
    phase: "Building, Testing & Launching",
    duration: "More than a week (scope-dependent)",
    process: [
      "<b>Audit fee refunded</b> once you commit to the transformation journey",
      "Development: We build and Integrate AI into Your Business",
      "Testing & Security: Ensure Reliability, Security and Data Privacy",
      "Training (if needed): We Upskill Your Team on Usage & Maintenance",
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A live, working AI solution in your environment",
        "Test reports and security checklist",
        "User guide/Documentation",
        "Loom video walkthrough, with requests for feedback on edge cases",
      ],
    },
  },
  {
    phase: "Optimizing & Scaling (AI Partner Program)",
    duration: "Ongoing",
    process: [
      "<b>Performance checks:</b> Continuous Monitoring and Accuracy Tweaks",
      "<b>New features:</b> Additional Automations or AI models as needed",
      "<b>Quarterly Reviews:</b> ROI Analysis and Forward Planning",
      "<b>Priority Support:</b> Fast Responses and Unlimited Tweaks",
    ],
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const phaseRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const container = timelineRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const containerHeight = containerRect.height;

      // Calculate scroll progress based on container visibility
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - containerTop) / (containerHeight + viewportHeight)
        )
      );
      setScrollPercent(scrollProgress * 100);

      // Determine active phase based on which phase is most visible
      let newActivePhase = 0;
      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const phaseCenter = rect.top;
          const viewportCenter = viewportHeight / 2;

          if (phaseCenter <= viewportCenter) {
            newActivePhase = index;
          }
        }
      });
      setActivePhase(newActivePhase);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="pricing"
      className="relative z-10 max-w-6xl mx-auto px-4 text-white mt-10"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto w-full md:p-4 md:py-8 relative md:pb-0">
        <h2 className="gradient-title font-bold text-center !my-4">
          Your AI Timeline and Pricing{" "}
        </h2>
        <p className="text-xl text-[#F8F9FB]/70 max-w-3xl mx-auto text-center">
          Every business is different. So are our prices. You only pay for what
          you need — based on your goals, workflow, and team size.{" "}
        </p>

        <div
          ref={timelineRef}
          className="relative w-full max-w-6xl pt-4 rounded-3xl "
        >
          <div className="relative w-full h-fit flex">
            {/* Timeline Line Section */}
            <div className="hidden md:block absolute left-5 overflow-y-hidden top-12 w-px h-[76%]">
              <div
                className="absolute left-0 w-full bg-gray-600/30"
                style={{
                  top: "11px",
                  bottom: "0px",
                }}
              ></div>

              <div
                className="absolute left-0 w-full bg-gradient-to-b from-[#00FF93] to-[#94f2cb] transition-all duration-300 ease-out"
                style={{
                  top: "11px",
                  height: `calc((100% + 250px) * ${
                    activePhase < 1 ? scrollPercent / 110 : scrollPercent / 80
                  })`,
                }}
              ></div>
            </div>

            {/* Content Section */}
            <div className="flex-1 md:pl-16 max-w-6xl">
              <div className="h-5" />

              {eventsData.map((section, sectionIndex) => {
                return (
                  <div
                    key={sectionIndex}
                    ref={(el) => (phaseRefs.current[sectionIndex] = el)}
                    className={`${
                      sectionIndex === 0 ? "mt-0" : "mt-20"
                    } relative transition-all duration-700 ease-out `}
                  >
                    {/* Timeline dot positioned relative to the phase heading */}
                    <div className="hidden md:block absolute -left-14 top-9">
                      <div
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-500 relative z-10 ${
                          sectionIndex <= activePhase
                            ? "bg-[#00FF93] border-[#00FF93] shadow-lg shadow-cyan-400/50"
                            : "bg-gray-800 border-gray-600"
                        }`}
                      >
                        {/* Pulse animation for active dot */}
                        {sectionIndex === activePhase && (
                          <div className="absolute inset-0 rounded-full bg-[#00FF93] animate-ping opacity-75"></div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`content-box border-glow-wrapper rounded-2xl p-4 md:p-8 ${
                        sectionIndex === 2 ? "mb-0" : "mb-10"
                      } max-w-6xl transition-all duration-700 ease-out `}
                    >
                      <div className="border-glow"></div>
                      {/* Section Title */}
                      <h2
                        className={`text-2xl font-bold tracking-wide mb-3 pb-3 transition-all duration-500 
                       
                            text-seasalt border-b-2 border-white
                    `}
                      >
                        <span className="gradient-title !text-2xl !font-bold">
                          Phase {sectionIndex + 1}:
                        </span>{" "}
                        {section.phase}
                      </h2>
                      <div className="flex flex-col lg:flex-row mt-4 gap-10">
                        {sectionIndex === 0 ? (
                          <LogoGrid />
                        ) : sectionIndex === 1 ? (
                          <BuildAnim />
                        ) : (
                          <OptimizeAnim />
                        )}

                        <div className="lg:w-[60%]">
                          {section.pricing && (
                            <h4 className="text-lg  tracking-wide mb-3 leading-tight  text-[#00FF93]">
                              <span className="font-semibold">Pricing: </span>
                              {section.pricing}
                            </h4>
                          )}

                          <h4 className="text-lg  tracking-wide mb-3 leading-tight  text-[#00FF93]">
                            <span className="font-semibold">Duration: </span>{" "}
                            {section.duration}
                          </h4>

                          <ul className="list-inside list-disc space-y-1">
                            {section.process.map((step, idx) => (
                              <li
                                className={`leading-relaxed whitespace-pre-line text-sm transition-colors duration-500 text-[#F8F9FB]/70`}
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: step }}
                              ></li>
                            ))}
                          </ul>

                          {section.whatYouGet && (
                            <div className="mt-4">
                              <h6 className=" font-semibold mb-2">
                                {section.whatYouGet.heading}
                              </h6>
                              <ul className="list-inside list-disc space-y-1">
                                {section.whatYouGet.content.map((step, idx) => (
                                  <li
                                    className={`leading-relaxed whitespace-pre-line text-sm transition-colors duration-500 text-[#F8F9FB]/70`}
                                    key={idx}
                                    dangerouslySetInnerHTML={{ __html: step }}
                                  ></li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
