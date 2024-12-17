import BackArrowSVG from "@/assets/Settings/backArrow";
import BurgerMenu from "@/components/Settings/burgerMenu";
import Navbar from "@/components/Settings/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Toaster } from "sonner";
import styles from "./style.module.css";

const SettingsLayout = ({ children }) => {
  return (
    <>
      <Toaster richColors position="bottom-center" />
      <div className="pt-16 text-white font-inter flex items-center justify-center relative px-5">
        <BurgerMenu />
        <Sidebar />
        <div className={`max-w-[1280px] w-full`}>
          <Link
            href={"/home"}
            className={`text-sm flex items-center ${styles.goBack}`}
          >
            <BackArrowSVG className="w-5 h-4" />
            <span>&nbsp;Go Back to Chat</span>
          </Link>
          <div className="w-full flex gap-8 mt-4">
            <Navbar />
            <div className="flex-1 pb-14">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
