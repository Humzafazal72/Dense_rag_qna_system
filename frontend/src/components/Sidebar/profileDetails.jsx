const ProfileDetails = ({ className }) => {
  return (
    <div
      className={`${className} flex items-center justify-between font-inter`}
    >
      <div className="flex items-center gap-3">
        <div className="w-[68px] h-[68px] rounded-full bg-[#191B31] flex items-center justify-center">
          <div
            className="w-[58.29px] h-[58.29px] rounded-full 
            border-2 border-[#F5F3C2] flex items-center 
            justify-center font-bold text-2xl leading-[29.05px]
            text-[#84C4D8]"
          >
            MF
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm leading-[16.94px] font-semibold">
            Marvin Frankie&apos;s
          </div>
          <div className="text-xs leading-[14.52px]">marvinmm235@gmail.com</div>
        </div>
      </div>
      <div className="cursor-pointer">
        <ProfileArrowSVG />
      </div>
    </div>
  );
};

export default ProfileDetails;

const ProfileArrowSVG = (props) => (
  <svg
    width={10}
    height={18}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L9 9L0.999999 17"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
