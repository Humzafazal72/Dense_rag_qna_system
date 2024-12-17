"use client";
import { checkEmail } from "@/actions/actions";
import Checkbox from "../checkbox";
import InputField from "../inputfield";
import SubmitButton from "./submitButton";
import { useFormState } from "react-dom";
import AuthLogoSVG from "@/assets/Auth/logo";
import SignUpGoogle from "../signUpGoogle";

const EmailSequence = ({ setIsChecked, isChecked, setEmailSequenceStatus }) => {
  const [state, formAction, pending] = useFormState(
    async (prevData, formData) => {
      const result = await checkEmail(prevData, formData);
      if (result.success) {
        setEmailSequenceStatus(true);
      }
      return result;
    },
    undefined
  );

  return (
    <>
      <form action={formAction}>
        <InputField
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email*"}
          name="email"
          hasError={state?.error}
        />
        {state?.error && (
          <p className="text-[#F04438] font-inter text-xs my-4">
            We don&apos;t have an account with that email address.
          </p>
        )}
        <div
          className={`flex items-center gap-2 3xl:gap-3 ${
            state?.error ? "mt-0" : "mt-5"
          }`}
        >
          <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
          <div className="text-sm 3xl:text-base">Keep me signed in</div>
        </div>
        <SubmitButton text={"Continue"} pending={pending} className={"mt-6"} />
        <SignUpGoogle />
      </form>
    </>
  );
};

export default EmailSequence;
