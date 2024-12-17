const FreeTrialCard = () => {
  return (
    <div className="flex-1 bg-[#25262D] rounded-xl px-6 flex flex-col items-center py-24">
      <div className="max-w-[399px]">
        <div className="text-[#5F5F5F] uppercase mb-8 font-semibold text-lg leading-[17.64px] tracking-[0.15em]">
          7 Days Free Trial
        </div>
        <div className="text-white mb-3 font-polySans text-2xl sm:text-[32px] sm:leading-[44.8px]">
          $5-$10/month
        </div>
        <div className="text-[#94938D] text-sm leading-[21px] mb-[32px]">
          AI Katia offers full access to her personal companion features at a
          price tailored to your location.
        </div>
        <div className="active:scale-95 transition duration-100 w-full rounded-2xl bg-[#F5F3C2] font-medium text-sm leading-[21px] text-center py-3 cursor-pointer">
          Sign Up for Free Trial
        </div>
      </div>
    </div>
  );
};

export default FreeTrialCard;
