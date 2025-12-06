"use client";
import Link from "next/link";

export default function NavigationBar({ items, hideNavLinkIndexesInSmallerScreens=[] }) {
  return (
    <div className="w-full flex justify-center">
      <nav className="bg-white p-2 rounded-full shadow-lg flex gap-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`text-gray-950  hover:bg-accent px-4 py-2 rounded-full transition-all ${hideNavLinkIndexesInSmallerScreens?.includes(index) && "lg:block hidden"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
