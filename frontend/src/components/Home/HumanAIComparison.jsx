import React, { useState } from "react";
import { aiComparisonData, headerData } from "../../data/comparisonData";

const HumanAIComparison = () => {
  const [selectedOption, setSelectedOption] = useState("AI SDR");

  const options = [
    "AI SDR",
    "AI Marketing Suite",
    "AI Project Manager",
    "Your 24/7 AI Secretary",
    "AI Customer Support",
    "AI Business Partner",
  ];

  const selectedData = aiComparisonData[selectedOption];

  const selectedHeader = headerData[selectedOption];

  return (
    <section id="services" className="py-20 z-10 relative text-seasalt">
      <div className="lg:max-w-[90vw] mx-auto px-4">
        <h2 className="gradient-title font-bold text-center ">
          Your AI Upgrade, Quantified{" "}
        </h2>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="content-box border-glow-wrapper highlighted-box-small   backdrop-blur-lg  rounded-3xl p-4 md:p-8 shadow-2xl relative ">
            <div className="border-glow"></div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Select Department
            </h3>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`p-3 rounded-lg cursor-pointer border transition-all duration-300 ${
                    selectedOption === option
                      ? "bg-[#00FF93] text-black border-[#00FF93]"
                      : "bg-[#121212] text-white border-[#2a2a2a] hover:border-[#00FF93]/40"
                  }`}
                >
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="ai-role"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                      className="appearance-none form-radio text-[#00FF93] focus:ring-[#00FF93]"
                    />
                    <span>{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="content-box  border-glow-wrapper highlighted-box-small lg:col-span-2  backdrop-blur-lg  rounded-3xl p-2 md:p-8 shadow-2xl relative ">
            <div className="border-glow"></div>
            <h3 className="text-xl p-4 pb-0 md:p-0 font-semibold mb-4 text-white">
              {selectedOption} Comparison
            </h3>
            <div className="overflow-x-auto">
              {selectedData ? (
                <div className="relative overflow-x-auto">
                  {/* Border box for last two columns */}
                  <div
                    className={`absolute top-0 bottom-0 right-0 ${
                      selectedOption === "AI SDR" ||
                      selectedOption ===
                        "AI Business Partner (Full-Stack Engagement)"
                        ? "w-[46%] md:w-[45%]"
                        : selectedOption === "AI Marketing Suite"
                        ? "w-[54%] lg:w-[56%]"
                        : selectedOption === "Your 24/7 AI Secretary"
                        ? "w-[50%] md:w-[54%]"
                        : "w-[49%] md:w-[50%]"
                    }  border border-[#00FF93]/30 rounded-xl pointer-events-none z-0`}
                  />

                  <table className="w-full text-center text-xs md:text-base text-white relative z-10">
                    <thead className="text-[#00FF93] border-b border-[#00FF93]/30">
                      {selectedHeader.map(([human, ai], i) => (
                        <tr key={i}>
                          <th className="py-4 text-left px-2 md:px-4">
                            Feature
                          </th>
                          <th className="py-4 px-2 md:px-4">{human}</th>
                          <th className="py-4 px-2 md:px-4">{ai}</th>
                          <th className="py-4 px-2 md:px-4">Improvement</th>
                        </tr>
                      ))}
                    </thead>
                    <tbody className="divide-y divide-[#2a2a2a]">
                      {selectedData.map(
                        ([metric, human, ai, improvement], i) => (
                          <tr key={i} className="hover:bg-[#00FF93]/5">
                            <td className="py-4 px-2 md:px-4 text-left font-semibold text-white">
                              {metric}
                            </td>
                            <td className="py-4 px-2 md:px-4">{human}</td>
                            <td className="py-4 font-semibold px-2 md:px-4">
                              {ai}
                            </td>
                            <td className="py-4 px-2 md:px-4">{improvement}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-gray-400 text-center py-16">
                  Comparison data for{" "}
                  <span className="text-white font-semibold">
                    {selectedOption}
                  </span>{" "}
                  is not yet available.
                  <br />
                  Please check back soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanAIComparison;
