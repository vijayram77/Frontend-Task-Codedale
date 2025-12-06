"use client";

import CustomAvatar from "./CustomAvatar";
import { Star } from "lucide-react";

export default function ReviewSection({
  avatars,
  extraCount,
  reviewsText = "From 30+ reviews",
}) {
  const avatarSize = 40;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        {avatars.slice(0, 3).map((src, index) => (
          <div
            key={index}
            className="-ml-2 first:ml-0 rounded-full border-2 border-white"
          >
            <CustomAvatar src={src} size={avatarSize} fallback="?" />
          </div>
        ))}
        <div className="-ml-2 rounded-full border-2 border-white bg-white flex items-center justify-center w-10 h-10 text-[13px] font-semibold">
          +{extraCount}
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <div className="flex text-[#080d20]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="#080d20" stroke="#080d20" />
          ))}
        </div>
        <span className="text-sm text-[#666]">{reviewsText}</span>
      </div>
    </div>
  );
}
