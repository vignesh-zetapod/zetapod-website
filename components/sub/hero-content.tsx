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

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Your Pod for Next-Gen Innovation
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Welcome to the<br />Future of{' '}
            <DynamicText />
            <br />Softwares.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          At Zetapod, we fuse engineering brilliance with creative imagination to build solutions that redefine innovation. Whether you&apos;re an investor or innovator, we craft digital experiences that unlock new frontiers of opportunity
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Initiate Liftoff
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};

const DynamicText = () => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          'Digital', // initially rendered starting point
          1000,
          'Innovative',
          1000,
          'Intelligent',
          1000,
          'Immersive',
          1000,
          'Advanced',
          1000,
        ]}
        cursor={true}
        speed={50}
        repeat={Infinity}
      />
    </span>
  );
}