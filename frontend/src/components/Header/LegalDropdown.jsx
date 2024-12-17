import { legalLinks } from "@/utils/legalLinks";
import Link from "next/link";

const LegalDropdown = ({ dropdownRef, closeDropdown }) => {
  return (
    <>
      <div className="pb-6 flex flex-col">
        {legalLinks.map((item, index) => (
          <Link
            onClick={() => closeDropdown()}
            href={item.href}
            key={index}
            className={`pl-[30px] cursor-pointer py-[10px] hover:bg-[rgba(255,255,255,0.1)] rounded-md`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center px-[10px]">
        <Link
          href="/login"
          className="active:scale-95 transition duration-100 w-full py-3 px-5 sm:px-8 rounded-2xl text-center text-black bg-[#F5F3C2]"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default LegalDropdown;
