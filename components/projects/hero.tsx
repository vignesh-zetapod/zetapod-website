"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import { GITHUB_LINK } from "@/constants";
import Link from "next/link";

export const ProjectsHero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-15 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-space-around m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[500px] w-auto h-auto"
        >
          <span>
            Portfolio projects
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[628px]"
        >
          Explore a showcase of our most impactful software projects — crafted with precision, innovation, and a commitment to delivering outstanding user experiences. Each build reflects our passion for solving real-world problems through modern technology.
        </motion.p>

        <Link
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-row items-center my-[10px]"
        >
          <motion.span
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg min-w-[150px] max-w-[200px]"
        >
          Check our github
        </motion.span>
        </Link>
        
      </div>

      <div style={{ perspective: 1000 }}>
        <motion.img
          src="/projects/hero-image.svg"
          width={500}
          height={500}
          alt="logo"
        />
      </div>

    </motion.div>
  );
};
