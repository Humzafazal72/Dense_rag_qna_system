import { contentFeatures } from "@/utils/contentFeatures";
import styles from "./style.module.css";
import Image from "next/image";
const ContentFeatures = () => {
  return (
    <div className="max-w-full w-full h-full flex flex-col items-center justify-end mb-12 pb-12">
      <div className="w-20 h-20 sm:w-32 sm:h-32 relative">
        <Image src={"/RAG2.png"} fill alt="katia logo" />
      </div>
      {/* <ContentLogoSVG className="w-20 h-20 sm:w-32 sm:h-32" /> */}
      <div className="mt-[30px] font-inter font-semibold text-2xl leading-[29.05px] sm:text-4xl">
        Dense RAG
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[10px] sm:gap-y-4 mt-5 sm:mt-12 w-full ${styles.contentFeatures}`}
      >
        {contentFeatures.map((item, index) => (
          <div
            className={`bg-lightDark rounded-xl w-full text-[#DADBDE] 
            text-xs leading-[18px] font-inter py-[14px] 
            flex flex-col items-center justify-center sm:text-sm`}
            key={index}
          >
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFeatures;

const ContentLogoSVG = (props) => (
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_619_13851)">
      <rect width={80} height={80} rx={16} fill="#191B31" />
      <path
        opacity={0.65}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 66C54.2839 66 66 54.462 66 40.079C66 25.696 54.2839 14 40 14C25.7161 14 14 25.696 14 40.079C14 54.462 25.7161 66 40 66ZM49.1481 24.7477C51.2346 23.9574 53.642 23.0091 55.4074 24.7477C57.1728 26.4863 56.3704 28.8571 55.5679 31.0699C55.5679 31.228 55.4074 31.228 55.4074 31.386C55.2469 32.0182 54.7654 32.8085 54.4444 33.7568C53.642 35.8116 52.679 38.3404 52.679 39.4468C52.679 41.1854 54.6049 46.7173 55.4074 48.772C56.2099 50.6687 57.1728 53.5137 55.2469 55.4103C53.4815 57.1489 50.5926 56.2006 48.6667 55.4103C46.7407 54.6201 41.2839 52.7234 39.5185 52.7234C38.2346 52.7234 35.8272 53.6717 33.7407 54.462C32.9383 54.9362 31.9753 55.2523 31.3333 55.4103C31.3333 55.5684 31.1728 55.5684 31.0123 55.5684C28.9259 56.3587 26.5185 57.1489 24.7531 55.4103C22.9877 53.6717 23.9506 51.3009 24.5926 49.0881C24.7531 49.0881 24.7531 48.9301 24.7531 48.772C25.0741 48.1398 25.3951 47.3495 25.716 46.4012C26.5185 44.3465 27.642 41.9757 27.642 40.7112C27.642 38.9726 25.716 33.4407 24.9136 31.5441C24.1111 29.6474 22.9877 26.6444 24.9136 24.9058C26.679 23.0091 29.5679 24.1155 31.4938 24.9058C33.4198 25.696 39.037 27.5927 40.642 27.5927C41.9259 27.5927 44.3333 26.6444 46.4198 25.696C47.3827 25.3799 48.1852 25.0638 48.8272 24.7477C48.9877 24.7477 48.9877 24.7477 49.1481 24.7477Z"
        fill="url(#paint0_linear_619_13851)"
      />
      <path
        opacity={0.65}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.2963 21.5866C48.1852 11.4711 31.8148 11.4711 21.7037 21.5866C11.4321 31.8602 11.4321 48.2979 21.7037 58.4134C31.8148 68.5289 48.1852 68.5289 58.2963 58.4134C68.5679 48.2979 68.5679 31.8602 58.2963 21.5866ZM22.6667 44.5046C20.5802 43.3982 18.3333 42.2918 18.3333 39.921C18.3333 37.3921 20.5802 36.2857 22.6667 35.3374C22.8272 35.3374 22.9877 35.3374 22.9877 35.1793C23.6296 34.8632 24.4321 34.5471 25.3951 34.231C27.4815 33.2827 29.8889 32.3343 30.6914 31.5441C31.9753 30.2796 34.5432 24.9058 35.3457 23.0091C36.1481 21.1125 37.4321 18.4255 40 18.4255C42.5679 18.4255 43.8519 21.1125 44.6543 23.0091C45.6173 24.9058 48.0247 30.2796 49.3086 31.5441C50.1111 32.3343 52.5185 33.2827 54.6049 34.231C55.5679 34.5471 56.3704 34.8632 57.0123 35.1793C57.1728 35.3374 57.1728 35.3374 57.3333 35.3374C59.4198 36.2857 61.6667 37.3921 61.6667 39.921C61.6667 42.2918 59.4198 43.3982 57.3333 44.5046C57.1728 44.5046 57.1728 44.5046 57.0123 44.5046C56.3704 44.8207 55.5679 45.2948 54.6049 45.6109C52.5185 46.4012 50.1111 47.5076 49.3086 48.2979C48.0247 49.5623 45.6173 54.7781 44.6543 56.8328C43.8519 58.7295 42.5679 61.4164 40 61.4164C37.4321 61.4164 36.1481 58.7295 35.3457 56.8328C34.5432 54.7781 31.9753 49.5623 30.6914 48.2979C29.8889 47.5076 27.4815 46.4012 25.3951 45.6109C24.4321 45.2948 23.6296 44.8207 22.9877 44.5046C22.9877 44.5046 22.8272 44.5046 22.6667 44.5046Z"
        fill="url(#paint1_linear_619_13851)"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_619_13851"
        x={-40}
        y={-40}
        width={160}
        height={160}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={20} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_619_13851"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_619_13851"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_619_13851"
        x1={67.3701}
        y1={14.0321}
        x2={13.4122}
        y2={65.3854}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A3FF" />
        <stop offset={1} stopColor="#FF00C7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_619_13851"
        x1={70.5553}
        y1={14.0321}
        x2={9.42668}
        y2={17.1799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#13DEF2" />
        <stop offset={0.9} stopColor="#E26CFF" />
      </linearGradient>
    </defs>
  </svg>
);
