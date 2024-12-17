"use client";
import { activeLinks, scrollToSection } from "@/utils/activeLinks";

const ActiveLinks = () => {
  return (
    <>
      <div className="flex-1 gap-8 hidden header:flex items-center justify-center">
        {activeLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="text-sm cursor-pointer"
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveLinks;
