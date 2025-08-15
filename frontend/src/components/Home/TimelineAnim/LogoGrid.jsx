import React from "react";
import { motion } from "framer-motion";
import {
  FaAsterisk,
  FaGoogle,
  FaSlack,
  FaSailboat,
  FaGithub,
  FaEnvelope,
  FaDatabase,
  FaRegCircle,
} from "react-icons/fa6";
import { SiAirtable, SiClaude, SiGmail, SiNotion } from "react-icons/si";

const LogoGrid = () => {
  return (
    <div className="  flex items-center  ">
      <div className="relative grid grid-cols-5 h-60 items-center group gap-0 p-4 w-full rounded-2xl border border-neutral-800 overflow-hidden">
        {/* Vignette overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,.6)_100%)]" />

        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500 
              `}
        >
          <SiAirtable size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500 
              `}
        >
          <FaGithub size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500
              `}
        >
          <SiGmail size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border-[3px] bg-neutral-900 border-[#00FF93]/10 text-[#00FF93]/80 
              `}
        >
          <FaAsterisk size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500
              `}
        >
          <FaSlack size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500
              `}
        >
          <SiClaude size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-lg border border-neutral-800 group-hover:border-[#00FF93]/40 text-neutral-800 group-hover:text-[#00FF93]/40   transition-all !duration-500 
              `}
        >
          <SiNotion size={24} />
        </motion.div>
        <motion.div
          className={`w-16 h-16 
              `}
        ></motion.div>
      </div>
    </div>
  );
};

export default LogoGrid;
