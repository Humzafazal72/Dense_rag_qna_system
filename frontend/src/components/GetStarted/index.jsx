const GetStarted = () => {
  return (
    <>
      <div className="mt-10 mb-3 bg-[#25262D] py-16 rounded-[20px] flex flex-col items-center px-6">
        <div className="font-polySans text-2xl sm:text-[40px] sm:leading-[56px] text-white text-center">
          Get started with AI Katia today
        </div>
        <div className="mt-4 mb-8 text-[#94938D] text-base sm:text-sm">
          Ready to explore AI Katia? Request a demo today!
        </div>
        <div className="active:scale-95 transition duration-100 bg-[#F5F3C2] cursor-pointer flex px-8 py-3 rounded-2xl gap-2 text-sm leading-[21px]">
          <div>Get Started for free</div>
          <ArrowSVG />
        </div>
      </div>
    </>
  );
};

export default GetStarted;

const ArrowSVG = (props) => (
  <svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0586 10.2715H4.55859"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0178 5.25116L17.0595 10.2712L12.0178 15.292"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
