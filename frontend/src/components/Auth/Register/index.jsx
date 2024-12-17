"use client";
import { signup } from "@/actions/actions";
import { useFormState } from "react-dom";
import InputField from "../inputfield";
import SubmitButton from "../Login/submitButton";
import PasswordField from "../passwordfield";
import AlreadyHaveAccount from "./alreadyAccount";

const Register = () => {
  const [state, formAction] = useFormState(signup, undefined);
  return (
    <form
      action={formAction}
      className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20"
    >
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign Up
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your details to continue.
      </div>
      <div className="flex flex-col gap-5 w-full">
        <InputField
          type={"text"}
          placeholder={"Enter your name"}
          label={"Username*"}
          name="username"
          hasError={state?.error}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email*"}
          name="email"
          hasError={state?.error}
        />
        <PasswordField
          placeholder={"Enter your password"}
          label={"Password*"}
          name="password"
          hasError={state?.error}
        />
      </div>
      {state?.error && (
        <p className="text-[#F04438] font-inter text-xs my-4">{state.error}</p>
      )}
      <SubmitButton text={"Continue"} className={"mt-6"} />
      <AlreadyHaveAccount />
    </form>
  );
};

export default Register;
