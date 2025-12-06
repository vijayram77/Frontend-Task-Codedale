"use client";

import Image from "next/image";

export default function ShowcaseTestimonialCard({
    imageUrl,
    author,
    authorDesc,
    authorImage,
    chatsArray = [],
}) {
    return (
        <div className="transition-all ease-in duration-200 group hover:-translate-y-3 w-full sm:max-w-108 sm:min-w-108 max-w-80 min-w-80 mx-auto flex flex-col gap-6 bg-[#fafafa] rounded-4xl p-3 shadow-sm border border-gray-200">
            {/* Top Image */}
            {imageUrl && (
                <div className="w-full h-48 sm:h-72 relative">
                    <Image
                        src={imageUrl}
                        alt="showcase"
                        fill
                        className="rounded-2xl object-contain"
                        sizes="(max-width: 640px) 100vw, 640px"
                        priority
                    />
                </div>
            )}

            {/* Chats */}
            <div className="flex flex-col gap-4">
                {chatsArray.map((c, i) => (
                    <div
                        key={i}
                        className={`flex w-full ${c.direction === "right" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {/*   */}
                        <div
                            className={`max-w-[80%] transition-all ease-in duration-200 px-5 py-3 rounded-2xl desc2 leading-relaxed shadow-sm ${c.direction === "right"
                                    ? " rounded-br-none group-hover:bg-black group-hover:text-white bg-white text-gray-700"
                                    : " rounded-bl-none bg-white text-gray-700"
                                }`}
                        >
                            {c.chat}
                            {c.author && (
                                <div
                                    className={`text-xs mt-1 opacity-70 ${c.direction === "right" ? "text-white" : "text-gray-600"
                                        }`}
                                >
                                    {c.author}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Author Section */}
            <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 relative ">
                    <img
                        src={authorImage}
                        alt={author}
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-gray-800 desc2">{author}</span>
                    <span className="text-gray-500 text-sm desc2">{authorDesc}</span>
                </div>
            </div>
        </div>
    );
}
