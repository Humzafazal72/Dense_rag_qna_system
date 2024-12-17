"use client";

import { closeSidebar } from "@/store/sidebar";
import { useDispatch } from "react-redux";

const CloseHomeSidebar = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(closeSidebar())}>
      <ArrowSVG />
    </button>
  );
};

export default CloseHomeSidebar;

const ArrowSVG = (props) => (
  <svg
    width={10}
    height={18}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L9 9L0.999999 17"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
