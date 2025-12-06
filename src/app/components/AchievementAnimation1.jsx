"use client";
import React from "react";
import Image from "next/image";

const AchievementAnimation1 = ({ images = [] }) => {
    if (images.length < 3) return null;

    const positions = ["group-hover:left-[20%]", "", "group-hover:right-[20%]"];

    return (
        <div className="relative h-56 pt-12 group w-full">
            {/* Left */}
            <Image
                src={images[0]}
                alt="Achievement image 1"
                width={400}
                height={260}
                className={`w-24 h-40 object-cover absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${positions[0]}`}
            />

            {/* Right */}
            <Image
                src={images[1]}
                alt="Achievement image 3"
                width={400}
                height={260}
                className={`w-24 h-40 object-cover absolute bottom-0 right-1/2 translate-x-1/2 transition-all duration-300 ease-in-out ${positions[2]}`}
            />
            {/* Center */}
            <Image
                src={images[2]}
                alt="Achievement image 2"
                width={400}
                height={260}
                className="w-48 h-48 object-cover rounded-t-2xl absolute top-full left-1/2 -translate-x-1/2 -translate-y-3/4 scale-125 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:top-[80%]"
            />
        </div>
    );
};

export default AchievementAnimation1;
