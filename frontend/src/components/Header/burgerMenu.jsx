"use client";
import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const BurgerMenu = ({ isLegal }) => {
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

  const [isDropDownOpen, setDropDownStatus] = useState(false);

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDropDownOpen]);

  return (
    <div className={`header:hidden block w-[30px] h-[30px] relative`}>
      <div
        ref={triggerRef}
        onClick={() => setDropDownStatus(isDropDownOpen ? false : true)}
        className={`${
          isDropDownOpen && "bg-[#25262D]"
        } flex items-center justify-center rounded-[4px] w-full h-full cursor-pointer active:scale-90 duration-150`}
      >
        <BurgerMenuSVG />
      </div>

      <div
        ref={dropdownRef}
        className={`${
          isDropDownOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        } absolute right-0 top-[calc(100%+16px)] pt-[36.5px] pb-[18px] rounded-2xl w-[288px] bg-[#25262D] shadow-lg
        ease-custom-ease transition-all duration-300`}
      >
        <Dropdown
          dropdownRef={dropdownRef}
          isLegal={isLegal}
          setDropDownStatus={setDropDownStatus}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
