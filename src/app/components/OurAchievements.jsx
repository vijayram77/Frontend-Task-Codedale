"use client"
import React from 'react'
import AchievementCard from './AchievementCard'
import AchievementAnimation1 from './AchievementAnimation1'
import HoverTagCloud from './HoverTagCloud'
import ScalingGraph from './ScalingGraph'

const OurAchievements = () => {
    return (
        <div id='achievements' className='text-center w-full   mx-auto flex flex-col gap-3 md:py-12 py-6'>
            <div className="subheading">Our Achievement</div>
            <div className="desc1">Curious about what we've accomplished? Let our track record speak for itself.</div>

            <div className='flex lg:flex-nowrap flex-wrap justify-center  gap-3 md:py-12 py-6'>
                {/* single achievement card */}
                <AchievementCard
                    title="30+ Brands Served"
                    desc="Helping businesses across various industries achieve their goals"
                    content={
                        <div>
                            {/* custom made reusable 3 images animation component . i made this for reusability . left, right , center (images order) */}
                            <AchievementAnimation1 images={["/fluent1.avif", "/fluent2.avif", "/fluent3.avif",]} />
                        </div>
                    }
                />
                <AchievementCard
                    title="8 Years of Experience"
                    desc="Bringing seasoned expertise to every project"
                    content={
                        <div>
                            {/* Tags animation component  ( reusable ) */}
                            <HoverTagCloud
                                bgNumber={8}
                                items={[
                                    { title: "AI Applications", hoverAnimation: false },
                                    { title: "Cloud & DevOps", hoverAnimation: false },
                                    { title: "Logo Designing", hoverAnimation: true, direction: "left" },
                                    { title: "Digital Marketing & SEO", hoverAnimation: false, direction: "bottom" },
                                    { title: "Data Driven Products", hoverAnimation: false, direction: "left" },
                                    { title: "Visual Identity", hoverAnimation: true, direction: "right" },
                                    { title: "Web Development", hoverAnimation: true, direction: "left" },
                                    { title: "UI/UX", hoverAnimation: false, direction: "top" },
                                    { title: "App Development", hoverAnimation: false },
                                    { title: "API & System Integrations", hoverAnimation: false },
                                    { title: "Brand Strategy", hoverAnimation: true, direction: "right" },
                                ]}
                            />
                        </div>
                    }
                />
                <AchievementCard
                    title="Empowering Brands to Scale"
                    desc="We help brands redirect resources to fuel innovation and expansion"
                    content={
                        <div>
                            {/* scaling graph . this one i made is static since i got no idea of how to make it reusable . and i dont think there is any need too ! */}
                            <ScalingGraph />
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default OurAchievements