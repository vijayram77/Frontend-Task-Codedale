"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";


export default function CustomAvatar({
  src,
  fallback = "?",
  size = 40,
  className,
}) {
  return (
    <Avatar
      className={cn(
        "overflow-hidden",
        className
      )}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <AvatarImage src={src} />
      <AvatarFallback className="text-sm font-semibold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
