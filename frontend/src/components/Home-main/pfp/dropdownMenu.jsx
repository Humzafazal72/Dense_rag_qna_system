import { openDeleteConvoModal } from "@/store/modal/deleteConversation";
import { dropdownMenuOptions1 } from "@/utils/dropdownMenu";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Logout } from "../../Logout";

const DropdownMenu = ({ containerRef, isDropDownOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      ref={containerRef}
      className={`${
        isDropDownOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "scale-75 opacity-0 pointer-events-none"
      } rounded-xl absolute top-[calc(100%+16px)] right-0
        w-[250px] bg-lightDark overflow-hidden
        ease-custom-ease transition-all duration-300 font-inter z-50`}
    >
      {dropdownMenuOptions1.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`block w-full pl-6 py-[15px] text-sm leading-[18.4px] hover:bg-[#28282f] active:bg-[#393943] cursor-pointer`}
        >
          {item.title}
        </Link>
      ))}
      {/* <div
        onClick={() => dispatch(openDeleteConvoModal())}
        className={`block w-full pl-6 py-[15px] text-sm leading-[18.4px] text-[#EC6853] hover:bg-[#28282f] active:bg-[#393943] cursor-pointer`}
      >
        Clear Chat History
      </div> */}

      <div className="p-2">
        <Logout className={"w-full text-sm leading-[18px]"} />
      </div>
    </div>
  );
};

export default DropdownMenu;
