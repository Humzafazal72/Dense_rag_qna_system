const TestimonialCard = ({ item }) => {
  return (
    <div className="p-8 bg-[#101010]">
      <TestimonialCardSVG />
      <div className="mt-5 text-[#C8C8C8] text-base ">
        &quot;{item.desc}&quot;
      </div>
      <div className="mt-5">
        <div className=" text-[#EBE9DE] text-2xl leading-[36px] font-semibold">
          {item.name}
        </div>
        {item.designation && (
          <div className=" text-[#8B8B8B] text-sm leading-[21px]">
            {item.designation}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;

const TestimonialCardSVG = (props) => (
  <svg
    width={21}
    height={19}
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_884_376)">
      <path
        d="M21 18.3199V9.16193H14.894C14.897 5.79093 17.629 3.05893 21 3.05593V0.00292969C15.95 0.00292969 11.841 4.11193 11.841 9.16193V18.3199H21ZM9.158 18.3199V9.16193H3.052C3.055 5.79093 5.787 3.05893 9.158 3.05593V0.00292969C4.108 0.00292969 0 4.11193 0 9.16193V18.3199H9.158Z"
        fill="#F5F3C2"
      />
    </g>
    <defs>
      <clipPath id="clip0_884_376">
        <rect width={21} height={19} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
