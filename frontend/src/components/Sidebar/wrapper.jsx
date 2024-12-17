"use client";
import { closeSidebar } from "@/store/sidebar";
import { useDispatch, useSelector } from "react-redux";

const SidebarWrapper = ({ children, className }) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div
      className={`${
        isSidebarOpen
          ? `left-0 pointer-events-auto`
          : `-left-[315px] pointer-events-none`
      } h-svh max-h-svh overflow-x-hidden flex 
      duration-500 ease-custom-ease transition-all
      fixed top-0 right-0 bottom-0 z-10 ${className}`}
    >
      {children}
      <div
        onClick={() => dispatch(closeSidebar())}
        className={`${
          isSidebarOpen ? "bg-[#0000001a]" : "bg-transparent"
        } flex-1 duration-500 ease-custom-ease transition-all`}
      />
    </div>
  );
};
export default SidebarWrapper;
