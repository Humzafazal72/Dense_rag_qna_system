"use client";
import { handleSidebar } from "@/store/sidebar";
import { useDispatch } from "react-redux";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleSidebar())}
      className="border-none absolute top-4 left-4 md:hidden z-[100]"
    >
      <BurgerMenuSVG />
    </button>
  );
};

export default BurgerMenu;

const BurgerMenuSVG = (props) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={6} fill="#18181c" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.95 23.8C23.8613 23.8 24.6 24.5163 24.6 25.4C24.6 26.2837 23.8613 27 22.95 27H13.05C12.1387 27 11.4 26.2837 11.4 25.4C11.4 24.5163 12.1387 23.8 13.05 23.8H22.95ZM27.35 16.4C28.2613 16.4 29 17.1163 29 18C29 18.8837 28.2613 19.6 27.35 19.6H8.65C7.73873 19.6 7 18.8837 7 18C7 17.1163 7.73873 16.4 8.65 16.4H27.35ZM25.15 9C26.0613 9 26.8 9.71634 26.8 10.6C26.8 11.4837 26.0613 12.2 25.15 12.2H10.85C9.93873 12.2 9.2 11.4837 9.2 10.6C9.2 9.71634 9.93873 9 10.85 9H25.15Z"
      fill="white"
    />
  </svg>
);
