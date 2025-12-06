import React from 'react'
import CustomButton from './CustomButton'
import { ArrowRight } from 'lucide-react'
import PulseCircle from './PulseCircle'
import IconImage from './IconImage'
import HoverAnimationButton from './HoverAnimationButton'
import ReviewSection from './ReviewSection'
import TestimonialCard from './TestimonialCard'
import CustomAnimation from './CustomAnimation'

// i made a custom animation component using framer motion fro simplisity and code quality

const Hero = () => {
    return (
        <div className='relative'>
            {/* This is the background dots */}
            <div
                className="absolute inset-0 w-full h-1/2 opacity-20 [mask-image:radial-gradient(circle,black_30%,transparent_100%)]  [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]"
                style={{
                    background: "url('/dots.png')",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "32px auto"
                }}
            ></div>

            {/* Main Hero Section */}
            <div className='md:py-40 py-32 flex flex-col items-center justify-center gap-5 md:gap-10 relative'>

                {/* Left side testimmonial cards */}
                <div className='absolute left-20 mt-20 -rotate-15 xl:block hidden'>
                    <CustomAnimation rotate={10} scale={0.8} opacity={0} delay={0.15} duration={1}>
                        <div className='absolute z-0 top-0 left-0 rotate-6'>
                            <TestimonialCard
                                desc="CodeDale turned the impossible into possible and redefined our expectations of technology partners."
                                author="Narasimha Reddy"
                            />
                        </div>
                        <TestimonialCard
                            desc="CodeDale turned the impossible into possible and redefined our expectations of technology partners."
                            author="Narasimha Reddy, CEO, TFS"
                        />
                    </CustomAnimation>
                </div>
                {/* Right side testimmonial cards */}
                <div className='absolute right-20 mt-20 rotate-15 xl:block hidden'>
                    <CustomAnimation rotate={-10} scale={0.8} opacity={0} delay={0.15} duration={1}>
                        <div className='absolute z-0 top-0 left-0 -rotate-6'>
                            <TestimonialCard
                                desc="CodeDale turned the impossible into possible and redefined our expectations of technology partners."
                                author="Narasimha Reddy"
                            />
                        </div>
                        <TestimonialCard
                            desc="CodeDale didn't just help us build our vision — they helped us build our future."
                            author="Sujith Reddy Gopu, CEO, Fluent Pro"
                        />
                    </CustomAnimation>
                </div>

                {/* slots button made with reusable custom button ( also used in header) */}
                <CustomButton
                    label={
                        <div className='flex gap-4 items-center text-sm font-medium text-zinc-700'>
                            {/* custom made reusable pulse with color , size customization */}
                            <PulseCircle color={"#22C55E"} size={14} />
                            <span>Only 2 open slots available!</span>
                        </div>
                    }
                    textBold={false}
                    textColor='#000000'
                    color='#ffffff'
                    icon={<ArrowRight className='w-3 h-3 text-black' />}
                />
                {/* Hero for larger screens */}
                <CustomAnimation y={20} opacity={0} duration={1} delay={0}>
                    <h1 className='mainheading md:flex hidden items-center justify-center flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            World-class Tech Partner
                            <div className='hidden items-center md:flex'>
                                <IconImage src={"/cursor.svg"} width={20} height={20} rotate={15} />
                                <IconImage src={"/figma-logo.svg"} width={16} height={20} rotate={-15} />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <span>Engineering Your Digital</span>
                            <div className=' hidden md:flex'><IconImage src={"/thunder.svg"} width={20} height={20} rotate={18} /></div>
                            <span>Success</span>
                        </div>
                    </h1>
                </CustomAnimation>
                {/* Hero for smaller screens */}
                <div className=' md:hidden block'>
                    <CustomAnimation y={20} opacity={0} duration={1} delay={0}>
                        <h1 className='mainheading text-center'>World-class Tech Partner <br /> Engineering Your Digital Success</h1>
                    </CustomAnimation>
                </div>

                {/* description */}
                <CustomAnimation y={20} opacity={0} duration={1} delay={0.15}>
                    <span className='desc1 text-center max-w-[600px] inline-block'>Trusted by startups and enterprises to design, build, and scale products that perform globally.</span>

                </CustomAnimation>
                <CustomAnimation y={20} opacity={0} duration={1} delay={0.35}>

                    {/* Book a 30 min call button with reusability */}
                    <HoverAnimationButton
                        title="Book a 30-Min call"
                        img1="/CodeDale-01.avif"
                        fb2="You"
                    />
                </CustomAnimation>

                <CustomAnimation y={20} opacity={0} duration={1} delay={0.45}>
                    <ReviewSection
                        avatars={[
                            "https://i.pravatar.cc/150?img=1",
                            "https://i.pravatar.cc/150?img=2",
                            "https://i.pravatar.cc/150?img=3",
                        ]}
                        extraCount={30}
                        reviewsText="From 30+ reviews"
                    />
                </CustomAnimation>
            </div>

        </div>
    )
}

export default Hero