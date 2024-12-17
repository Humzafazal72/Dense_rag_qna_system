"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./dropdownMenu";
import { useSelector } from "react-redux";

const Pfp = ({ username }) => {
  const letter = username.charAt(0);
  const [isDropDownOpen, setDropDownStatus] = useState(false);
  const pfp = useSelector((state) => state.pfp.profile_picture);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setDropDownStatus(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="absolute top-4 right-4 w-9 h-9 pfp:w-12 pfp:h-12 z-[1]">
      <div className="w-full h-full relative">
        <DropdownMenu
          containerRef={dropdownRef}
          isDropDownOpen={isDropDownOpen}
        />
      </div>
      <div
        ref={triggerRef}
        onClick={() => setDropDownStatus(!isDropDownOpen)}
        className="absolute inset-0 cursor-pointer text-2xl capitalize w-full h-full border-2 border-[#ffc49a] rounded-full flex items-center justify-center text-white font-bold active:scale-95 duration-150 ease-custom-ease"
      >
        {letter}
      </div>
      {/* <Image
        ref={triggerRef}
        onClick={() => setDropDownStatus(!isDropDownOpen)}
        src={pfp}
        alt="pfp image"
        // width={48}
        // height={48}
        fill
        className="rounded-full cursor-pointer active:scale-95 duration-150 ease-custom-ease object-cover"
      /> */}
    </div>
  );
};

export default Pfp;
