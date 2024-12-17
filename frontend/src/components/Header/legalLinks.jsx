import { legalLinks } from "@/utils/legalLinks";
import Link from "next/link";

const LegalLinks = () => {
  return (
    <>
      <div className="flex-1 gap-8 hidden md:flex items-center justify-center">
        {legalLinks.map((item, index) => (
          <Link href={item.href} key={index} className="text-sm cursor-pointer">
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LegalLinks;
