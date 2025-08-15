import React, { useState } from "react";
import { motion } from "framer-motion";

const BuildAnim = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  const codeContent = {
    HTML: `<<span class='group-hover:border transition-all duration-1000 group-hover:text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>html lang="en"</span>>
<head>
   <meta <span class='border group-hover:border-none transition-all duration-1000 group-hover:text-neutral-600 text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>charset="UTF-8"></span>
   <meta name="viewport" 
    content="width=device
    width, initial-
    scale=1.0">`,
    React: `<span class='group-hover:border transition-all duration-1000 group-hover:text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>import React,</span> 
{ useState } from 'react';
    <span class='border group-hover:border-none transition-all duration-1000 group-hover:text-neutral-600 text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>import HaloItem</span>
    from './HaloItem';
    import './App.css';

     const HaloApp = () => {`,
    CSS: `body {
<span class='group-hover:border transition-all duration-1000 group-hover:text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>margin: 0;</span>
   <span class='border group-hover:border-none transition-all duration-1000 group-hover:text-neutral-600 text-[#00ff93]/80 border-[#00ff93]/40 px-1 rounded font-jetbrains'>font-family: 'Arial',</span>
    sans-serif;
    background: #eef2f7;
    color: #333;
}`,
  };

  const tabs = ["HTML", "React", "CSS"];

  const getTabColor = (tab) => {
    switch (tab) {
      case "HTML":
        return "text-orange-400";
      case "React":
        return "text-blue-400";
      case "CSS":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  // Function to escape HTML but leave the special span intact
  const renderLine = (line) => {
    // Replace the special span temporarily with a marker
    const marker = "###MARKER###";
    const spanRegex = /<span.*?<\/span>/;
    const match = line.match(spanRegex);
    let preservedSpan = null;

    if (match) {
      preservedSpan = match[0];
      line = line.replace(spanRegex, marker);
    }

    // Escape the rest of the line
    const escapedLine = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Re-insert the span
    const finalLine = preservedSpan
      ? escapedLine.replace(marker, preservedSpan)
      : escapedLine;

    return finalLine;
  };

  return (
    <div className="flex items-center  lg:w-[40%]">
      <div className="w-full mx-auto h-60 group relative border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="pointer-events-none absolute bottom-0 w-full h-20 bg-gradient-to-t z-10 rounded-2xl from-[rgba(13,13,13,0.8)] to-[rgba(0,0,0,0)]" />
        {/* Window controls */}
        <div className="flex w-full bg-neutral-900 items-center justify-between border-b border-neutral-800 px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {/* Tabs */}
          <div className="flex border border-neutral-800 space-x-1 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-0.5 rounded text-sm font-medium transition-all duration-200 relative ${
                  activeTab === tab
                    ? `text-[#00FF93]/60 border bg-neutral-900 border-[#00ff93]/30`
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0  rounded -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Code content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-neutral-600 relative px-4 pl-10 pt-3 font-mono  overflow-x-auto"
        >
          <div className=" ">
            {codeContent[activeTab].split("\n").map((line, index) => (
              <div key={index} className="flex ">
                <span className=" select-none w-6 font-jetbrains text-right pr-8 mt-px ">
                  {index + 1}
                </span>
                <span
                  className="whitespace-break-spaces font-jetbrains leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderLine(line) }}
                ></span>
              </div>
            ))}
          </div>

          {/* Cursor */}
        </motion.div>
      </div>
    </div>
  );
};

export default BuildAnim;
