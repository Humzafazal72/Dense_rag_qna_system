"use client";

import { openDeleteConvoModal } from "@/store/modal/deleteConversation";
import { useDispatch } from "react-redux";

const DeleteConversation = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(openDeleteConvoModal())}
        className="text-[#EC6853] hover:text-[#fa6e59] duration-300 transition mt-4 cursor-pointer"
      >
        Clear Chat History
      </div>
    </>
  );
};

export default DeleteConversation;
