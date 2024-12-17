"use client";
import { useState } from "react";

const FAQCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`${
        isOpen ? "bg-[#25262D] pb-[39px]" : "bg-[#101010] pb-[22px]"
      } cursor-pointer pt-[22px] px-6 rounded-xl ease-custom-ease duration-300 transition-all relative pr-12`}
    >
      <div
        className={`${
          isOpen ? "rotate-180" : "rotate-0"
        } ease-custom-ease duration-300 transition-all absolute top-[22px] right-[24px]`}
      >
        <DropDownSVG />
      </div>
      <div className="text-white select-none">{item.title}</div>
      <div
        className={`${
          isOpen ? "max-h-[500px]" : "max-h-0"
        } text-[#898A96] overflow-hidden mt-5 ease-custom-ease duration-300 transition-all select-none`}
      >
        {item.desc}
      </div>
    </div>
  );
};

export default FAQCard;

const DropDownSVG = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 14.9504C11.8667 14.9504 11.7417 14.9296 11.625 14.8879C11.5084 14.8462 11.4 14.7754 11.3 14.6754L6.70005 10.0754C6.51672 9.89206 6.42505 9.65872 6.42505 9.37539C6.42505 9.09206 6.51672 8.85872 6.70005 8.67539C6.88338 8.49206 7.11672 8.40039 7.40005 8.40039C7.68338 8.40039 7.91672 8.49206 8.10005 8.67539L12 12.5754L15.9 8.67539C16.0834 8.49206 16.3167 8.40039 16.6 8.40039C16.8834 8.40039 17.1167 8.49206 17.3 8.67539C17.4834 8.85872 17.575 9.09206 17.575 9.37539C17.575 9.65872 17.4834 9.89206 17.3 10.0754L12.7 14.6754C12.6 14.7754 12.4917 14.8462 12.375 14.8879C12.2584 14.9296 12.1334 14.9504 12 14.9504Z"
      fill="#EBE9DE"
    />
  </svg>
);