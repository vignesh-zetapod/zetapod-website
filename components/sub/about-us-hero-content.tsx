"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const AboutUsHeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Who are we? What is our goal?
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Our story
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Zetapod was born from a passion for exploring the unknown — transforming complex ideas into powerful digital realities. We believe the future belongs to those who innovate fearlessly, and our work reflects that philosophy. Every experience we design is shaped by cosmic imagination, advanced technology, and a deep commitment to elevating the possibilities of the modern digital universe.
        </motion.p>
      </div>

      <div style={{ perspective: 1000 }}>
      <motion.img
        src="/logo.svg"
        width={500}
        height={500}
        alt="logo"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          type: "tween"
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      />
    </div>

    </motion.div>
  );
};