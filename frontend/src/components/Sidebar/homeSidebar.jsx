import { getSession } from "@/actions/actions";
import HomeSidebarChats from "./homeSidebarChats";
import HomeSidebarUserInfo from "./homeSidebarUserInfo";
import SidebarWrapper from "./wrapper";
import { Logout } from "../Logout";
import Link from "next/link";
import NewChatButton from "./createNewChat";

const HomeSidebar = async () => {
  const session = await getSession();
  return (
    <SidebarWrapper className={"text-white"}>
      <div className="w-[315px] pt-10 px-5 bg-lightDark border-r border-[#353741] h-svh max-h-svh flex flex-col">
        <HomeSidebarUserInfo />
        <HomeSidebarChats chats={session.docs} />
        <NewChatButton />
      </div>
    </SidebarWrapper>
  );
};

export default HomeSidebar;
