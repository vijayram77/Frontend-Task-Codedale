"use client"
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const StepsAnimation = ({StepsArray}) => {
    const [currentStep, setcurrentStep] = useState(0);
    const tlRef = useRef(null);
    useGSAP(() => {
        console.log(currentStep)
        if (tlRef.current) tlRef.current.kill();
        const tl = gsap.timeline();
        tlRef.current = tl;
        tl.to(".stepImage", {
            y: StepsArray?.length * 200,
            x: -200,
            rotate: 90,
            duration : 0.3,
        })
            .to(`.stepImage${currentStep}`, {
                y: 0,
                x: 0,
                duration : 0.3,
                rotate: 0,
            })
    }, [currentStep])
    return (
        <div className='flex gap-4 items-stretch justify-center px-2 py-12 '>
            {/* left images animation */}
            <div className='hidden w-160 justify-center items-center relative md:flex   overflow-hidden'>
                {
                    StepsArray.map((item, i) => {
                        return <motion.div key={i} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-transparent stepImage stepImage${i}`}>
                            <Image src={item.imageUrl} width={650} height={650} alt='step1' className='w-[25vw]' />
                        </motion.div>
                    })
                }
            </div>
            {/* right steps indication */}
            <div className='flex flex-col gap-4 px-2'>
                {
                    StepsArray.map((item, i) => {
                        return <div onMouseEnter={() => setcurrentStep(i)} key={i} className={`flex flex-col gap-2 lg:max-w-[480px] max-w-[320px] p-4 rounded-2xl transition-all ease duration-200 ${i == currentStep ? "bg-white lg:scale-110 " : ""}`}>
                            <h1 className='lg:text-2xl text-xl font-medium '>{item.title}</h1>
                            <Image src={item.imageUrl} width={650} height={650} alt='step1' className='w-full md:hidden block' />
                            <h1 className='lg:text-xl text-base'>{item.subtitle}</h1>
                            <h1 className='text-zinc-500 text-sm'>{item.desc}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default StepsAnimation