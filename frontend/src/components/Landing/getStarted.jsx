import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="flex flex-col landing:max-w-[636px] flex-1">
      <div className=" flex flex-col gap-5 text-base text-[#898A96] mb-8">
        <p>
          AI Katia isn&apos;t just a chatbot; she&apos;s your personal companion
          designed to help you with life&apos;s everyday challenges. Whether you
          need someone to talk to, ask for advice, or simply a companion to keep
          you company—AI Katia is always here to support you.
        </p>
        <p>
          She has a dynamic memory and learns from each conversation, becoming
          more attuned to your unique needs and offering insights, guidance, and
          emotional support whenever you need it. In addition, AI Katia can surf
          the web, providing you with the latest information and helping you
          stay informed by searching the web.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap text-sm sm:text-base items-center gap-2">
        <Link
          className={`active:scale-95 transition duration-100 w-full sm:w-auto text-center py-3 px-5 sm:px-8 rounded-2xl cursor-pointer bg-[#F5F3C2] text-black`}
          href={"/login"}
        >
          Get started with AI Katia
        </Link>
        <ButtonWrapper
          text={"Watch demo"}
          className={"border border-solid border-[#5F5F5F] text-[#EBE9DE]"}
        />
      </div>
    </div>
  );
};

export default GetStarted;

function ButtonWrapper({ text, className }) {
  return (
    <div
      className={`active:scale-95 transition duration-100 w-full sm:w-auto text-center py-3 px-5 sm:px-8 rounded-2xl cursor-pointer ${className}`}
    >
      {text}
    </div>
  );
}
