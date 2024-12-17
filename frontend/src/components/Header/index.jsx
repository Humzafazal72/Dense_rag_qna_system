import HeaderLogoSVG from "@/assets/Header/logo";
import ActiveLinks from "./activeLinks";
import BurgerMenu from "./burgerMenu";
import LegalLinks from "./legalLinks";
import Link from "next/link";

const Header = ({ isLegal }) => {
  return (
    <header
      className="flex items-center justify-center 
      fixed z-50 top-0 header:top-[11px] right-0 left-0  header:px-6"
    >
      <div
        className="max-w-[1216px] w-full flex items-center header:justify-normal justify-between
        bg-[#101016] header:bg-[#25262D] header:rounded-2xl text-[#EBE9DE] pl-[22px] pr-4 header:px-6 h-[77px]"
      >
        <div className="h-full py-6 flex items-center">
          <Link href={"/"}>
            <HeaderLogoSVG />
          </Link>
        </div>
        {isLegal ? <LegalLinks /> : <ActiveLinks />}
        <div className="py-5 h-full header:flex items-center hidden">
          <Link
            href="/login"
            className="hover:bg-[#41424e] active:scale-95 text-sm px-6 py-2 cursor-pointer rounded-2xl border border-solid border-[#5F5F5F] transition duration-100"
          >
            Log in
          </Link>
        </div>
        <BurgerMenu isLegal={isLegal} />
      </div>
    </header>
  );
};

export default Header;
