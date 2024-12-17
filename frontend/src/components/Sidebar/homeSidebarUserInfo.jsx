import { getSession } from "@/actions/actions";
import CloseHomeSidebar from "./closeHomeSidebar";

const HomeSidebarUserInfo = async () => {
  const session = await getSession();

  const letter = session.user_name.charAt(0);

  return (
    <div className="flex items-center justify-between mb-[30px]">
      <div className="flex items-center gap-3">
        <div className="w-[68px] h-[68px] rounded-full border-4 border-[#191B31]">
          <div className="text-2xl capitalize w-full h-full border-2 border-[#ffc49a] rounded-full flex items-center justify-center text-white font-bold">
            {letter}
          </div>
        </div>
        <div className="text-white ml-3">
          <div className="font-semibold text-sm">
            {session.user_name || "No Username"}
          </div>
          <div className="text-xs">{session.user_email || "No Email"}</div>
        </div>
      </div>
      <CloseHomeSidebar />
    </div>
  );
};

export default HomeSidebarUserInfo;
