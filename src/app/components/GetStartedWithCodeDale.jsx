"use client"
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import StepsAnimation from './StepsAnimation';

const GetStartedWithCodeDale = ({
    StepsArray
}) => {

    return (
        <div className=''>
            <div className='max-w-2xl text-center mx-auto flex flex-col gap-3 ' >
                <div className="subheading">How to Get Started with CodeDale</div>
                <div className="desc1">Just step away from those traditional old methods of hiring plus managing and see for yourself</div>
            </div>
            {/* reusable steps animation component with complete customization . you can pass an array in this format
            export const stepsForGettingStarted =  [
  {
      title: "Step 1",
      subtitle: "Share Your Vision",
      desc: "Tell us about your goals and project requirements—just reach out for a free consultation.",
      imageUrl: "/Step1.avif"
  },
  {
      title: "Step 2",
      subtitle: "Collaborate on a Solution",
      desc: "We work together to define the scope and strategy. You review and approve the plan before we begin.",
      imageUrl: "/Step2.avif"
  },
]
         

note : dont pass larger titles and descs . the component will automatically adjust its size according to number of steps
            */}
            <StepsAnimation StepsArray={StepsArray} />
        </div>
    )
}

export default GetStartedWithCodeDale