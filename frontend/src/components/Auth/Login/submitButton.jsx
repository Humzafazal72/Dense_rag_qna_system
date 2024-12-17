"use client";
import ContinueArrowSVG from "@/assets/Auth/continue";
import LoadingRing from "@/components/LoadingRing";
import { useFormStatus } from "react-dom";
export default function SubmitButton({
  text,
  className,
  onClick,
  disabled = false,
}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${
        disabled && "brightness-50"
      } active:scale-95 transition duration-100 cursor-pointer w-full bg-orange text-white rounded-lg flex items-center justify-center gap-2 py-[14px] 3xl:py-[18px]`}
    >
      {pending ? (
        <LoadingRing width={"19.6px"} height={"19.6px"} colors={["#000000"]} />
      ) : (
        <>
          <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
            {text}
          </span>
          <ContinueArrowSVG className="mt-[2px]" />
        </>
      )}
    </button>
  );
}
