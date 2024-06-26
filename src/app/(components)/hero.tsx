"use client";

import tw from "tailwind-styled-components";
import { Raynor } from "@@ui/kerrigan/raynor";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 3.4,
        easings: ["easeInOut"],
      }}
      className="h-[calc(100vh-72px)] w-full"
    >
      <HeroContent>
        <div className="flex w-full justify-center md:w-[800px] lg:w-[1080px]">
          <Raynor
            href={`/products`}
            title="Fast-track your"
            description="Tech-focused insurance platform for businesses and individuals."
            actionLabel="Browse All Products"
          />
        </div>
      </HeroContent>
    </motion.div>
  );
};

const HeroContent = tw.section`
  h-[calc(100vh-72px)] flex justify-center w-full bg-gradient-to-br from-zap from-40% via-blue-400/30 to-zap to-100%
  `;
