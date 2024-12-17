import { checkPassword } from "@/actions/actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../inputfield";
import SubmitButton from "./submitButton";
import AuthLogoSVG from "@/assets/Auth/logo";
import { useState } from "react";
import SignUpGoogle from "../signUpGoogle";

const PasswordSequence = ({ setPasswordSequenceStatus }) => {
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [state, formAction, pending] = useFormState(
    async (prevData, formData) => {
      const result = await checkPassword(prevData, formData);
      if (result.success) {
        setPasswordSequenceStatus(true);
      }
      return result;
    },
    undefined
  );

  const handleRecaptchaChange = (value) => {
    setRecaptchaCompleted(!!value);
  };

  return (
    <>
      <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Welcome to Katia. Sign in to continue.
      </div>
      <form action={formAction}>
        <InputField
          type={"text"}
          placeholder={"Enter your password"}
          label={"Password*"}
          name={"password"}
          hasError={state?.error}
        />
        {state?.error && (
          <p className="text-[#EC6853] text-xs mt-5">{state.error}</p>
        )}
        <div className="text-[#F5F3C2] text-sm font-medium font-inter my-6 w-full flex items-center justify-center">
          <Link href="/forgot-password">Forgot your password?</Link>
        </div>
        <div className="my-6 w-full flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
            theme="dark"
            onChange={handleRecaptchaChange}
          />
        </div>
        <SubmitButton
          text={"Sign in"}
          pending={pending}
          disabled={!recaptchaCompleted}
        />
        <SignUpGoogle />
      </form>
    </>
  );
};

export default PasswordSequence;
