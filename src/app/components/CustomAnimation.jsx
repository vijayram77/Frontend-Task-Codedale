"use client"
import React from 'react'
import { motion } from 'framer-motion'

const CustomAnimation = ({
  x = 0,
  y = 0,
  blur = 0,
  rotate = 0,
  scale = 1,
  opacity = 1,
  duration = 1,
  delay = 0,
  children,
  style = {},
  ...rest
}) => {

  const transition = { type: "spring", duration, delay }

  return (
    <motion.div
      animate={{
        x: 0,
        y: 0,
        filter: 'blur(0px)',
        rotate: 0,
        scale: 1,
        opacity: 1,
      }}
      initial={{
        x: x,
        y: y,
        filter: `blur(${blur}px)`,
        rotate: rotate,
        scale: scale,
        opacity: opacity,
      }}
      transition={transition}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default CustomAnimation