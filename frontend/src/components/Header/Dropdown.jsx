import { activeLinks, scrollToSection } from "@/utils/activeLinks";
import LegalDropdown from "./LegalDropdown";
import Link from "next/link";

const Dropdown = ({ dropdownRef, isLegal, setDropDownStatus }) => {
  const handleOptionClick = (id) => {
    setDropDownStatus(false);
    scrollToSection(id);
  };
  const closeDropdown = () => {
    setDropDownStatus(false);
  };
  return (
    <>
      {isLegal ? (
        <LegalDropdown
          dropdownRef={dropdownRef}
          closeDropdown={closeDropdown}
        />
      ) : (
        <>
          <div className="pb-6">
            {activeLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(item.id)}
                className={`pl-[30px] cursor-pointer py-[10px] hover:bg-[rgba(255,255,255,0.1)] rounded-md`}
              >
                {item.title}
              </div>
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
      )}
    </>
  );
};

export default Dropdown;
