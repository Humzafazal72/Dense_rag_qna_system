"use client";

import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import { openSidebar } from "@/store/sidebar";
import { useDispatch } from "react-redux";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openSidebar());
  };
  return (
    <button
      onClick={handleClick}
      className="absolute top-4 left-4 w-9 h-9 pfp:w-12 pfp:h-12 z-[1]"
    >
      <BurgerMenuSVG />
    </button>
  );
};

export default BurgerMenu;
