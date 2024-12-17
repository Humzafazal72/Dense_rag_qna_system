"use client";
import ModalWrapper from ".";
import { ButtonWrapper } from "../UploadProfilePicture/modal";
import { deleteConversation } from "@/actions/authenticatedActions";
import { useFormState } from "react-dom";
import { useDispatch } from "react-redux";
import { closeDeleteConvoModal } from "@/store/modal/deleteConversation";
import { useEffect, useState } from "react";
import { clearMessages } from "@/store/chatMessages";
import { toast } from "sonner";

const DeleteConvoForm = () => {
  const dispatch = useDispatch();
  const [state, formAction] = useFormState(deleteConversation, undefined);

  useEffect(() => {
    if (state?.success) {
      dispatch(closeDeleteConvoModal());
      dispatch(clearMessages());
      toast.success(state.success);
    }
  }, [state, dispatch]);

  const handleClose = () => {
    dispatch(closeDeleteConvoModal());
    setLocalState(null);
  };

  return (
    <ModalWrapper title={"Are you sure you want to Clear Chat History?"}>
      <div className="flex items-center justify-center md:justify-end">
        {state?.error && (
          <p className="text-[#F04438] font-inter text-xs my-4">
            {state.error}
          </p>
        )}
        <div className="flex items-center mt-6 md:mt-10">
          <ButtonWrapper
            onClick={handleClose}
            text={"Cancel"}
            className={"text-[#F5F3C2]"}
          />
          <form action={formAction}>
            <ButtonWrapper
              type="submit"
              text={"Clear Chat History"}
              className={`bg-red-500 text-black`}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteConvoForm;
