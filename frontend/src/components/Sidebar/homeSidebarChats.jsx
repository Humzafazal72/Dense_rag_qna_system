"use client";
import NoChatsSVG from "@/assets/HomeSidebar/noChats";
import { closeSidebar } from "@/store/sidebar";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const HomeSidebarChats = ({ chats }) => {
  const dispatch = useDispatch();
  return (
    <>
      {chats.length > 0 ? (
        <div className="flex-1 flex flex-col">
          {chats.map((item, index) => (
            <Link
              href={`/home/${item}`}
              onClick={() => dispatch(closeSidebar())}
              key={index}
              className="pl-3 py-[10px] text-start text-sm hover:bg-[#28282f] active:bg-[#393943] rounded-lg truncate"
            >
              {item}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center">
          <NoChatsSVG />
          <div className="mt-5 font-medium leading-[21px]">
            No chat history.
          </div>
          <div className="text-center text-xs leading-[20px] mt-[6px]">
            Your chat history will appear here,
          </div>
          <div className="text-center text-xs leading-[20px]">
            let&apos;s create your chat now!
          </div>
        </div>
      )}
    </>
  );
};

export default HomeSidebarChats;
