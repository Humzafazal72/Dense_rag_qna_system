import CrossSVG from "@/assets/closeSvg";
import { closeDeleteConvoModal } from "@/store/modal/deleteConversation";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalWrapper = ({ title, children }) => {
  const { isDeleteModalOpen } = useSelector((state) => state.deleteConvoModal);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeDeleteConvoModal());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);
  return (
    <div
      className={`${
        isDeleteModalOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } fixed inset-0 z-[200] p-14 flex items-center justify-center bg-[rgba(0,0,0,0.7)] transition-all duration-150 ease-custom-ease`}
    >
      <div
        ref={modalRef}
        className={`${
          isDeleteModalOpen ? "mt-0" : "mt-10"
        } p-5 md:p-8 max-w-[733px] w-full bg-[#191B31] rounded-2xl transition-all duration-500 ease-custom-ease`}
      >
        <div className="flex justify-between">
          <div className="text-lg md:text-2xl text-white">{title}</div>
          <button onClick={() => dispatch(closeDeleteConvoModal())}>
            <CrossSVG />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
