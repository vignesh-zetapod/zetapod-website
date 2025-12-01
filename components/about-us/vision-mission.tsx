"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const VisionAndMission = () => {
  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-space-around px-[5%] w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-space-around m-auto text-start">

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white  w-auto h-auto"
          >
            <span>
              Our Vision
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5"
          >
            Our vision is to first establish ZetaPod as a recognized and trusted brand in modern software development. As we continue to grow, our long-term goal is to expand our influence and become a leading force in the fields of Artificial Intelligence and Virtual Reality — shaping technologies that enhance how people build, interact, and experience the digital world.
          </motion.p>
        </div>

        <div className="hidden lg:block pl-20" style={{ perspective: 1000 }}>
          <motion.img
            src="/vision-mission/vision.png"
            width={400}
            height={400}
            alt="vision"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </div>

      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row  w-full items-center justify-space-around px-[5%] mt-20 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-space-around m-auto text-start">

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white w-auto h-auto"
          >
            <span>
              Our Mission
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5"
          >
            Our mission is to deliver high-quality, reliable, and user-centric software solutions that help individuals and businesses operate more efficiently. As we evolve, we are committed to pushing forward into AI-driven systems and immersive VR experiences, combining innovation, technical excellence, and forward-thinking design to create tools that empower users and drive future-ready digital transformation.
          </motion.p>
        </div>

      <div className="hidden lg:block pl-20" style={{ perspective: 1000 }}>
          <motion.img
            src="/vision-mission/mission.png"
            width={400}
            height={400}
            alt="mission"
            animate={{ rotate: [0, 12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </div>

      </motion.div>
    </div>
  );
};
