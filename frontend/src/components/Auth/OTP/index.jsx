"use client";
import { checkOTP, resendOTP, saveCheckOTPSession } from "@/actions/actions";
import AuthLogoSVG from "@/assets/Auth/logo";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import InputField from "../inputfield";
import SubmitButton from "../Login/submitButton";
import { useRouter } from "next/navigation";

const OTP = ({ email, flow = "login" }) => {
  const [stateOTP, formActionOTP] = useFormState(checkOTP, undefined);
  const [countdown, setCountdown] = useState(5);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (stateOTP?.forgotPasswordSuccess) {
      toast.success(stateOTP.message);
      router.push("/reset-password");
    }
    if (stateOTP?.success) {
      toast.success(stateOTP.message);
      localStorage.setItem("profile_picture", stateOTP.profile_picture);
      const {
        user_id,
        user_name,
        user_email,
        auth_type,
        csrfToken,
        sessionId,
      } = stateOTP;
      saveCheckOTPSession(
        user_id,
        user_name,
        user_email,
        auth_type,
        csrfToken,
        sessionId
      );
    }
    if (stateOTP?.error) {
      toast.error(stateOTP.error);
    }
  }, [stateOTP, router]);

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const result = await resendOTP(email);
      if (result.success) {
        toast.success(result.success);
        setIsResendDisabled(true);
        setCountdown(60);
      } else if (result.error) {
        toast.error(result.error);
        setIsResendDisabled(false);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      setIsResendDisabled(false);
    }
  };

  return (
    <>
      <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
        <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
        <div className="text-[24px] leading-[33.6px] font-semibold mt-10 3xl:text-3xl">
          One-Time Password
        </div>
        <div className="mt-[18px] text-[#898A96] mb-10 text-sm 3xl:text-base">
          A unique code has been sent to your email address. Please check your
          inbox and enter the code below to complete the {flow} process.
        </div>
        <form action={formActionOTP}>
          <input type="hidden" name="flow" value={flow} />
          <InputField
            type={"number"}
            placeholder={"Authentication Code"}
            label={"OTP*"}
            name={"otp"}
            hasError={stateOTP?.error}
          />
          <SubmitButton text={"Verify"} className={"mt-6"} />
        </form>
        <form onSubmit={handleResend}>
          <input type="hidden" name="email" value={email} />
          <button
            disabled={isResendDisabled}
            className={`active:scale-90 mt-5 w-full py-3 px-4 rounded-lg text-sm transition-all duration-200
              ${
                isResendDisabled
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isResendDisabled ? `Resend OTP (${countdown}s)` : "Resend OTP"}
          </button>
        </form>
      </div>
    </>
  );
};

export default OTP;
