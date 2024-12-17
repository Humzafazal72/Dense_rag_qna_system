import Image from "next/image";

const AuthRight = () => {
  return (
    <div className="flex-1 relative hidden lg:flex items-center justify-center">
      <div className=" 3xl:max-w-[550px] max-w-[390px] w-full relative z-10">
        <div className="aspect-[412/496] w-full relative overflow-hidden rounded-3xl">
          <Image
            alt="auth center image"
            src="/KatiaLive.webp"
            fill
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="text-white font-semibold font-inter mt-9 3xl:text-4xl text-2xl leading-[29.05px] text-center">
          Welcome to <span className="text-[#F5F3C2]">AI Katia</span> your
          Personal Assistant
        </div>
        <div className="font-inter mt-5 text-white 3xl:text-lg text-sm leading-[19.6px] text-center">
          Improve bot support by integrating apps, docs, and wikis. Connect
          seamlessly to help desks and knowledge bases, streamlining SaaS
          operations with advanced AI.
        </div>
      </div>
      <Image
        alt="auth bg image"
        src="/authbg.jpg"
        fill
        priority="eager"
        className="z-0"
      />
    </div>
  );
};

export default AuthRight;
