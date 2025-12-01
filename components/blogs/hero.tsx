"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const BlogsHero = () => {
  const heroImage = <div style={{ perspective: 1000 }}>
        <motion.img
          src="/blogs/hero.png"
          width={500}
          height={500}
          alt="logo"
        />
      </div>;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-[5%] mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-space-around m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl lg:text-5xl text-bold text-white w-auto h-auto"
        >
          <span>
            Blogs
          </span>
        </motion.div>

        <div className="lg:hidden pt-10 mb-5">
          { heroImage }
        </div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[628px]"
        >
          Discover the ideas, research, and stories that inspire the work we do at ZetaPod. Our blog shares insights from software development, AI, and emerging technologies, offering thoughtful perspectives and practical lessons that shape our vision for tomorrow and guide the innovative solutions we build.
        </motion.p>
        
      </div>

      <div className="hidden lg:block">
        {heroImage}
      </div>

    </motion.div>
  );
};
