import FooterLogoSVG from "@/assets/Footer/logo";
import { footerLinks } from "@/utils/footerLinks";
import { footerSocialLinks } from "@/utils/footerSocialLinks";
import Link from "next/link";
import FooterSocials from "./socials";
import FooterLinks from "./links";

const Footer = () => {
  return (
    <>
      <footer
        className="flex flex-col footer:flex-row gap-8 footer:gap-10 footer:items-center footer:justify-center
       bg-[#25262D] rounded-[20px] py-[34px] px-[34px] footer:px-0 mb-5"
      >
        <FooterLogoSVG />
        <div className="w-[1px] h-[27px] bg-[#EDEEF4] hidden footer:block" />
        <FooterLinks />
        <div className="w-[1px] h-[27px] bg-[#EDEEF4] hidden footer:block" />
        <FooterSocials />
      </footer>
    </>
  );
};

export default Footer;
