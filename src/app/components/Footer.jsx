"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#f8f9fc] pt-24 pb-12 px-[10vw] text-gray-800 overflow-hidden">

            {/* Watermark Background */}
            <div className="absolute inset-0 -top-2/4 flex justify-center items-center opacity-10 select-none pointer-events-none">
                <Image
                    src="/logo.avif"
                    alt="Watermark Logo"
                    fill
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    className="max-w-full object-contain px-[10vw] "
                    priority
                />
            </div>

            {/* Main Container */}
            <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 z-10">

                {/* About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Logo />
                    </div>
                    <p className="text-gray-600 max-w-xs text-[15px] leading-relaxed">
                        Strategic web design, and campaigns tailored to drive result and conversions.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-600">
                        {["Services", "Our Work", "Achievements", "FAQs", "Brand", "Contact"].map((item, i) => (
                            <li key={i} className="hover:text-black transition cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Socials</h3>
                    <ul className="space-y-2 text-gray-600">
                        {["Email", "Instagram", "LinkedIn"].map((item, i) => (
                            <li key={i} className="hover:text-black transition cursor-pointer flex items-center gap-1">
                                {item} <span className="text-[16px]">↗</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-600 text-[15px] mb-4">
                        Stay ahead with design & marketing tips and strategies that drive results.
                    </p>
                    <form className="flex items-center gap-2 bg-white rounded-full border border-gray-200 p-3 w-full max-w-md relative">
                        <span className="text-[#b0b0b0] text-base">@</span>

                        {/* Input */}
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="flex-1 outline-none bg-transparent text-base font-normal text-[#50576b] placeholder:text-gray-400"
                            required
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            aria-label="Subscribe to newsletter"
                            className="bg-[#0067F4] hover:bg-[#0047A8] cursor-pointer transition-colors text-white rounded-full min-w-16 h-10 flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2"
                        >
                           <ArrowRight />
                        </button>
                    </form>

                </div>
            </div>

            {/* Subfooter */}
            <div className="relative container mx-auto px-6 pt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 z-10 text-[15px]">
                <p>©2025 CodeDale All rights reserved</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-black transition">Privacy Policy</Link>
                    <Link href="#" className="hover:text-black transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
