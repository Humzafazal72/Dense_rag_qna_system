"use client";
import { openDeleteConvoModal } from "@/store/modal/deleteConversation";
import SettingsSidebar from "./settings";
import SidebarWrapper from "./wrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper className={"md:hidden"}>
      <div className="w-[315px] px-5 bg-lightDark border-r border-[#353741] h-svh max-h-svh flex flex-col">
        <SettingsSidebar />
        {/* <div
          onClick={() => dispatch(openDeleteConvoModal())}
          className="text-[#EC6853] hover:text-[#fa6e59] duration-300 transition mt-4 cursor-pointer"
        >
          Clear Chat History
        </div> */}
      </div>
    </SidebarWrapper>
  );
};
export default Sidebar;
