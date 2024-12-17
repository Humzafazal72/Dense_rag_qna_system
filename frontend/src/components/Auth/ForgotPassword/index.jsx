"use client";
import { forgotPassword } from "@/actions/actions";
import BackToArrowSVG from "@/assets/Auth/backArrow";
import Link from "next/link";
import { useFormState } from "react-dom";
import SendEmail from "./sendEmail";
const ForgotPassword = () => {
  const [state, formAction, pending] = useFormState(forgotPassword, undefined);
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <SendEmail state={state} formAction={formAction} pending={pending} />
      <Link
        href="/login"
        className="mt-10 w-full flex gap-2 items-center justify-center"
      >
        <BackToArrowSVG />
        <span className="text-sm leading-[19.6px]">Back to Sign in</span>
      </Link>
    </div>
  );
};

export default ForgotPassword;
