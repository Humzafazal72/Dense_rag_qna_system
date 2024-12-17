import ArrowSVG from "@/assets/Landing/arrow";
import React from "react";

const Introducing = () => {
  return (
    <div
      className="py-2 px-4 bg-[#25262D] max-w-max rounded-full 
      flex gap-1 items-center text-[#EBE9DE]"
    >
      <span className="text-sm leading-[21px] sm:text-base sm:leading-6">
        An AI that Understands You
      </span>
      <ArrowSVG />
    </div>
  );
};

export default Introducing;
