import Image from "next/image";
import AboutImage from "./image";
import AboutDetails from "./details";

const AboutUs = () => {
  return (
    <>
      <div className="sm:py-[140px]" id="about">
        <div className="text-[#EBE9DE]  text-base py-2 px-6 bg-[#25262D] rounded-full max-w-max mb-5">
          About Us
        </div>
        <div className="font-polySans  text-3xl sm:text-[40px] sm:leading-[48px] text-[#DADBDE] mb-[80px]">
          What AI Katia Offers
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          <AboutImage />
          <AboutDetails />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
