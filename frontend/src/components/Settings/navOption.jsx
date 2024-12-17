"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavOption = ({ href, title, onClick, isBlank = false }) => {
  const pathName = usePathname();
  const activeClass =
    pathName === href
      ? "border-[#ffc49a] text-[#ffc49a]"
      : "border-[#898A96] text-[#898A96]";

  return isBlank ? (
    <a
      onClick={onClick}
      target="_blank"
      href={href}
      className={`block text-base leading-[16px] pl-3 py-3 border-l-2 ${activeClass} transition-colors duration-300`}
    >
      {title}
    </a>
  ) : (
    <Link
      onClick={onClick}
      href={href}
      className={`block text-base leading-[16px] pl-3 py-3 border-l-2 ${activeClass} transition-colors duration-300`}
    >
      {title}
    </Link>
  );
};

export default NavOption;
