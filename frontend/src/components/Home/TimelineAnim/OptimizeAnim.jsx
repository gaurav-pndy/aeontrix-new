import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const OptimizeAnim = () => {
  const [isHovered, setIsHovered] = useState(false);

  const metrics = [
    {
      title: "Software speed",
      value: "+38%",
      color: "text-green-400",
    },
    {
      title: "Workflow efficiency",
      value: "+25%",
      color: "text-green-400",
    },
    {
      title: "Operational cost",
      value: "-11%",
      color: "text-green-400",
    },
    {
      title: "Security",
      value: "+8%",
      color: "text-green-400",
    },
  ];

  return (
    <div className="flex items-center lg:w-[40%]">
      <div className=" w-full ">
        <div
          className=" relative rounded-lg  overflow-hidden h-60"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="pointer-events-none absolute top-0 w-full h-28 bg-gradient-to-b z-10 rounded-2xl from-[rgba(13,13,13,1)] to-[rgba(0,0,0,0)]" />
          {/* Scrollable container */}
          <motion.div
            animate={{
              y: isHovered ? -65 : 0,
            }}
            transition={{
              duration: 0.1,
            }}
            className="space-y-3.5"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                className="flex items-center justify-between py-3 px-4 bg-neutral-900/50 rounded-lg border border-neutral-800/50 hover:bg-neutral-900/70 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-neutral-300 font-medium">
                  {metric.title}
                </span>
                <span className={`font-semibold ${metric.color}`}>
                  {metric.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Update section */}
          <motion.div
            className="bg-neutral-900 rounded-lg absolute bottom-0 w-full py-3 px-4 border-t border-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">Update available</span>
              <button className="flex items-center gap-2 bg-neutral-900 border border-[#00FF93]/20 text-[#00FF93]/80 px-3 py-1 text-sm rounded-lg font-medium transition-colors">
                Update
                <FaArrowUp size={12} />
              </button>
            </div>
          </motion.div>

          {/* Gradient overlay for smooth transition */}
        </div>
      </div>
    </div>
  );
};

export default OptimizeAnim;
