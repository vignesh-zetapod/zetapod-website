"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-[5%]">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Skills and Technologies
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Actively growing Technologies Behind Our Pod&apos;s Ecosystem
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[16px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        <span style={{ fontFamily: "var(--font-serif)" }}>
          Frameworks from different worlds calibrated to orbit your ideas according to their momentum.
        </span>
      </motion.div>
    </div>
  );
};
