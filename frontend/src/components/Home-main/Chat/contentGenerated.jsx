import ChatLogoSVG from "@/assets/Content/logo";
import Image from "next/image";
import { useSelector } from "react-redux";
import CopyTick from "./copy";

const ContentGenerated = ({
  conversationMessages,
  isLoading,
  isError,
  error,
}) => {
  const pfp = useSelector((state) => state.pfp.profile_picture);
  return (
    <div
      className={`w-full flex flex-col gap-6 text-sm sevenHundo:text-base pb-8 pt-4 sevenHundo:pt-9`}
    >
      {conversationMessages.map((item, index) => (
        <div
          key={index}
          className={`w-full flex gap-[10px] ${
            item.role === "user" && "justify-end"
          }`}
        >
          {item.role === "assistant" && (
            <div>
              <Image width={24} height={24} src={"/RAG2.png"} />
              {/* <ChatLogoSVG /> */}
            </div>
          )}

          <div
            className={`${
              item.role === "user"
                ? "rounded-tl-lg rounded-bl-lg border-r-2 border-lightWhite max-w-[calc(100vw-112px)] sevenHundo:max-w-[500px]"
                : "rounded-tr-lg rounded-br-lg border-l-2 border-orange max-w-[calc(100vw-112px)] sevenHundo:max-w-[550px]"
            }   bg-lightDark p-6`}
          >
            {item.content}
          </div>

          {/* Copy UI */}
          {item.role === "assistant" && <CopyTick content={item.content} />}

          {item.role === "user" && (
            <div className="">
              <div className={`w-6 h-6 rounded-full overflow-hidden relative`}>
                <Image src={pfp} fill alt="user pfp" />
              </div>
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className={`w-full flex gap-[10px]`}>
          <div>
            <Image width={24} height={24} src={"/RAG2.png"} />
            {/* <ChatLogoSVG /> */}
          </div>

          <div
            className={`flex flex-col px-4 gap-4 rounded-tr-lg rounded-br-lg border-l-2 border-orange max-w-full py-4 bg-lightDark sevenHundo:max-w-[550px] w-full`}
          >
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
          </div>
        </div>
      )}

      {isError && (
        <div className={`w-full flex gap-[10px]`}>
          <div>
            {/* <ChatLogoSVG /> */}
            <Image width={24} height={24} src={"/RAG2.png"} />
          </div>
          <div
            className={`flex flex-col px-4 gap-4 rounded-tr-lg rounded-br-lg border-l-2 border-orange max-w-full py-4 bg-lightDark sevenHundo:max-w-[550px] w-full`}
          >
            Error in Get Response API:&nbsp;
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
            <div className="mt-2">
              <button
                onClick={() => window.location.reload()}
                className="text-blue-500 underline hover:text-blue-600"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerated;
