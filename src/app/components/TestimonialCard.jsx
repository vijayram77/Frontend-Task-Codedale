"use client";

import Image from "next/image";

export default function TestimonialCard({ desc, author }) {
    return (
        <div className="relative w-[240px] bg-white rounded-2xl border text-sm p-4 transition-transform duration-300">
            <div className="flex gap-2 flex-row-reverse items-start">
                <Image src="/quotes.svg" width={16} height={16} alt='"' />
                <p className="text-gray-500 font-medium mb-4">
                    "{desc}"
                </p>
            </div>

            <h3 className="font-semibold text-gray-900">
                - {author}
            </h3>
        </div>
    );
}
