import { cn } from "@/lib/utils"; // Ensure this import is correct
import { motion } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export default function GoogleGeminiEffect ({
  pathLengths = [1, 1, 1, 1, 1], // Default to an array of 1s if not provided
  title,
  description,
  className,
}) {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || "Build with Aceternity UI"}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description || "Scroll this component and see the bottom SVG come to life wow this works!"}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute">
        <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto">
          ui.aceternity.com
        </button>
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {pathLengths.map((length, index) => (
          <motion.path
            key={index}
            d={`M0 ${663 - index * 50} C ...`} // Use appropriate path data
            stroke={`#FFB7C5`} // Use appropriate color
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: length }}
            transition={transition}
          />
        ))}
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
