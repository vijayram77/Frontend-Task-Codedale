"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";


const PulseCircle = ({ color, size = 40, className }) => {
  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{ backgroundColor: color, width: size, height: size }}
        animate={{
          scale: [1, 2.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <div
        className="rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default PulseCircle;
