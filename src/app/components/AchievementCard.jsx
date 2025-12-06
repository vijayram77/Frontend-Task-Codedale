"use client";
import React from "react";

const AchievementCard = ({ title, desc, content }) => {
  return (
    <div className="w-full max-w-[320px] bg-white hover:-translate-y-3 transition-all ease duration-200 rounded-4xl shadow-sm border p-2 flex flex-col gap-6">
      {/* Top content (image or custom JSX) */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#f7f7f7] to-[#ebeaea]">
        {content}
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-2 text-start px-3 pb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
