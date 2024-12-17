import Link from "next/link";
import FeatureGrid from "./grid";

const Features = () => {
  return (
    <>
      <div className="py-12 sm:py-[120px]" id="features">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-[621px] font-polySans text-[28px] leading-[42px] sm:text-[40px] sm:leading-[56px] text-white">
            Ground-breaking Features for Unrivalled Outcomes
          </div>
          <div className="h-full flex flex-col items-end">
            <Link
              href={"/login"}
              className="active:scale-95 transition duration-100 py-3 px-8 rounded-2xl text-[#EBE9DE] border-[#5F5F5F] border border-solid cursor-pointer"
            >
              Start Your Journey with AI Katia
            </Link>
          </div>
        </div>
        <FeatureGrid />
      </div>
    </>
  );
};

export default Features;
