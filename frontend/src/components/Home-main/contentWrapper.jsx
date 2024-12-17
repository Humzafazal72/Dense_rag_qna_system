import Image from "next/image";
import styles from "./style.module.css";
import { contentFeatures } from "@/utils/contentFeatures";

const ContentWrapper = ({ children, className }) => {
  return (
    <div className="h-[calc(100%-110px)] sm:h-[calc(100%-83px)] flex items-end justify-center">
      <div className="max-w-full w-full flex flex-col items-center mb-12">
        <div className="w-20 h-20 sm:w-32 sm:h-32 relative">
          <Image src={"/katia_logo.png"} fill alt="katia logo" />
        </div>
        <div className="mt-[30px] font-inter font-semibold text-2xl leading-[29.05px] sm:text-4xl">
          {children}
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[10px] sm:gap-y-4 mt-5 sm:mt-12 w-full ${styles.contentFeatures}`}
        >
          {contentFeatures.map((item, index) => (
            <div
              className={`bg-lightDark rounded-xl w-full text-[#DADBDE] 
            text-xs leading-[18px] font-inter py-[14px] 
            flex flex-col items-center justify-center sm:text-sm ${className}`}
              key={index}
            >
              <div>{item?.title}</div>
              <div>{item?.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
