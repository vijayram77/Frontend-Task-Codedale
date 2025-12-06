"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ShowcaseTestimonialCard from './ShowcaseTestimonialCard'
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ShowCase = () => {
    return (
        <div className='py-20'>
            {/* Slick using swiper js */}
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }} className='flex gap-6 overflow-x-auto'>
            <SwiperSlide>
                {/* reusable showcase testimonial card */}
                <ShowcaseTestimonialCard
                    imageUrl="/TFS.avif"
                    author="Sujith Reddy Gopu"
                    authorDesc="Founder of Fluent Pro"
                    authorImage="https://i.pravatar.cc/150?img=1"
                    chatsArray={[
                        {
                            chat:
                                "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
                            author: "Sujith Reddy Gopu",
                            direction: "left",
                        },
                        {
                            chat: "Honored to drive lasting impact.",
                            author: "CodeDale",
                            direction: "right",
                        },
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ShowcaseTestimonialCard
                    imageUrl="/solution.avif"
                    author="Sujith Reddy Gopu"
                    authorDesc="Founder of Fluent Pro"
                    authorImage="https://i.pravatar.cc/150?img=1"
                    chatsArray={[
                        {
                            chat:
                                "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
                            author: "Sujith Reddy Gopu",
                            direction: "left",
                        },
                        {
                            chat: "Honored to drive lasting impact.",
                            author: "CodeDale",
                            direction: "right",
                        },
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ShowcaseTestimonialCard
                    imageUrl="/ATH.avif"
                    author="Sujith Reddy Gopu"
                    authorDesc="Founder of Fluent Pro"
                    authorImage="https://i.pravatar.cc/150?img=1"
                    chatsArray={[
                        {
                            chat:
                                "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
                            author: "Sujith Reddy Gopu",
                            direction: "left",
                        },
                        {
                            chat: "Honored to drive lasting impact.",
                            author: "CodeDale",
                            direction: "right",
                        },
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ShowcaseTestimonialCard
                    imageUrl="/fluent3.avif"
                    author="Sujith Reddy Gopu"
                    authorDesc="Founder of Fluent Pro"
                    authorImage="https://i.pravatar.cc/150?img=1"
                    chatsArray={[
                        {
                            chat:
                                "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
                            author: "Sujith Reddy Gopu",
                            direction: "left",
                        },
                        {
                            chat: "Honored to drive lasting impact.",
                            author: "CodeDale",
                            direction: "right",
                        },
                    ]}
                />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default ShowCase