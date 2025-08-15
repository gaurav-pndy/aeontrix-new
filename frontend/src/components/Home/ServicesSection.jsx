import React from "react";
import BookAuditButton from "../BookAuditButton";
import { solutionsData } from "../../data/solutionsData";
import { Link } from "react-router";

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-10 text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="gradient-title  text-center font-bold  text-white">
          AI Transformation Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionsData.map((plan, index) => (
            <div
              key={index}
              id={plan.id}
              className={`border-glow-wrapper   backdrop-blur-lg  flex flex-col justify-between border-[#00FF93]/50 rounded-3xl p-4 md:p-6 shadow-2xl transition-transform duration-500 
                  content-box `}
            >
              <div className="border-glow"></div>
              <div>
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 p-1 shrink-0 flex items-center justify-center  rounded-lg">
                    <plan.icon className="w-8 h-8 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3
                    dangerouslySetInnerHTML={{ __html: plan.title }}
                    className="text-2xl font-semibold  "
                  ></h3>
                </div>

                <p className=" text-[#F8F9FB]/70 text-lg mb-4 ">
                  {plan.heading.replace(/<br\s*\/?>/gi, " ")}
                </p>
              </div>

              <div className="w-full flex justify-center mt-4">
                <Link to={`/solutions/${plan.id}`}>
                  <button
                    className={`glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center`}
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
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
                  </button>
                </Link>
              </div>
              {/* {plan.highlighted && (
                <span className="absolute top-4 right-4 text-xs bg-[#00FF93] text-black px-2 py-1 rounded-full font-medium">
                  Popular
                </span>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
