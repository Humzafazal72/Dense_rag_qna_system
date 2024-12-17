import { footerSocialLinks } from "@/utils/footerSocialLinks";

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-5">
      {footerSocialLinks.map((item, index) => (
        <a key={index} href={item.href} target="_blank">
          {item.svgComp}
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
