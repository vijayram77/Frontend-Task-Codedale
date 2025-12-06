"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CustomAvatar from "./CustomAvatar";
import { useMediaQuery } from "../utils/useMediaQuery";

export default function HoverAnimationButton({ title, img1, img2,fb1,fb2, className }) {
  const [hovered, setHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const expanded = isDesktop ? hovered : true;

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "inline-flex items-center rounded-full bg-[#111] text-white px-4 py-3 shadow-md overflow-hidden",
        "transition-all duration-300 ease-out gap-2",
        className
      )}
    >
      <motion.div
        className="relative flex justify-center items-center"
        animate={{
          width: expanded  ? 90 : 34,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ height: 32 }}
      >
        <motion.div
          className="absolute"
          animate={{ x: expanded  ? -22 : 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          <CustomAvatar
            src={img1}
            size={32}
            className="h-8 w-8 border-2 border-white bg-white"
            fallback={fb1}
          />
        </motion.div>
        <motion.span
          className="absolute font-bold text-lg"
          animate={{
            scale: expanded ? 1 : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
        <motion.div
          className="absolute"
          animate={{
            x: expanded ? 22 : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          <CustomAvatar
            src={img2}
            size={32}
            className="h-8 w-8 border-2 border-blue-500 text-blue-500"
            fallback={fb2}
          />
        </motion.div>
      </motion.div>
      <span className="whitespace-nowrap font-medium">{title}</span>
    </button>
  );
}
