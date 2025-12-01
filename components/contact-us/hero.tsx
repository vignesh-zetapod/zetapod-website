"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const ContactUsHero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-[5%] mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-space-around m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[500px] w-auto h-auto"
        >
          <span>
            Contact Us
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[628px]"
        >
          Drop us a message to begin a meaningful journey toward bringing your vision to life. This first step opens the gateway to exploring your ideas with clarity, purpose, and creativity. Once we understand your goals, we work closely with you to refine, shape, and elevate your concepts into something truly impactful. Every successful project begins with a simple moment of action, and reaching out is the spark that sets everything in motion. Together, we can transform your ideas into polished, powerful realities that shine with potential and inspire future growth. We look forward to collaborating with you on every step of this creative path.
        </motion.p>
      </div>

      <div className="hidden lg:block" style={{ perspective: 1000 }}>
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
