"use client";

import { closeSidebar } from "@/store/sidebar";
import Link from "next/link";
import { useDispatch } from "react-redux";

const NewChatButton = () => {
  const dispatch = useDispatch();
  return (
    <Link
      href={"/home"}
      onClick={() => dispatch(closeSidebar())}
      className={`mb-5 font-medium bg-orange active:scale-95 flex items-center justify-center transition duration-100 py-3 px-8 rounded-lg text-black w-full`}
    >
      New Chat
    </Link>
  );
};

export default NewChatButton;
