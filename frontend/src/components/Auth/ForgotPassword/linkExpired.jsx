import LinkExpiredSVG from "@/assets/Auth/linkExpired";

const LinkExpired = () => {
  return (
    <>
      <LinkExpiredSVG className="w-16 h-16 lg:w-24 lg:h-24 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Link expired
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 text-sm 3xl:text-lg">
        It appears that your verification link has expired. You’ll need to send
        a new one to continue.
      </div>
    </>
  );
};

export default LinkExpired;
