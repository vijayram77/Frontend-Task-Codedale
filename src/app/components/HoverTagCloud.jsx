"use client";
import React from "react";
import { motion } from "framer-motion";

const directions = {
  left:   { x: -50, y: 30 },
  right:  { x: 50,  y: -30 },
  top:    { x: 0,   y: -50 },
  bottom: { x: 0,   y: 50 },
};

const HoverTagCloud = ({ items = [], bgNumber }) => {
  // limitting to only 12 cards
  const MAX = 12;
  const list = items.slice(0, MAX);

  return (
    <motion.div
      className="relative h-56 w-full overflow-hidden flex justify-center items-center group"
      whileHover="hover"
      initial="initial"
    >
      {/* Background 8 */}
      <div className="absolute group-hover:scale-75 text-[280px] top-0 transition-all ease-in duration-200 font-extrabold text-gray-600 opacity-40 select-none leading-none">
        {bgNumber}
      </div>

      {/* Chips */}
      <div className="absolute inset-0 flex flex-wrap gap-3 justify-center px-3 pointer-events-none">
        {list.map((chip, index) => {
          const slide = directions[chip.direction] || { x: 0, y: 0 };

          return (
            <motion.div
              key={index}
              variants={{
                initial: {
                  opacity: chip.hoverAnimation ? 0 : 1,
                  x: chip.hoverAnimation ? slide.x : 0,
                  y: chip.hoverAnimation ? slide.y : 0,
                },
                hover: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                bg-white shadow-md rounded-full text-[13px] font-medium
                px-4 py-1 whitespace-nowrap pointer-events-auto
              "
            >
              {chip.title}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HoverTagCloud;
