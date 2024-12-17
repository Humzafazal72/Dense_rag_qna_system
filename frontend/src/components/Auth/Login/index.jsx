"use client";
import { login } from "@/actions/actions";
import AuthLogoSVG from "@/assets/Auth/logo";
import { useFormState } from "react-dom";
import InputField from "../inputfield";
import PasswordField from "../passwordfield";
import DontHaveAccount from "./dontHaveAccount";
import SubmitButton from "./submitButton";

const Login = () => {
  const [state, formAction, pending] = useFormState(login, undefined);
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Welcome to Dense RAG. Sign in to continue.
      </div>

      <form action={formAction}>
        <InputField
          type={"text"}
          placeholder={"Enter your username"}
          label={"Username*"}
          name="username"
          hasError={state?.error}
        />
        <PasswordField
          placeholder={"Enter your password"}
          label={"Password*"}
          name="password"
          hasError={state?.error}
          className={"mt-5"}
        />
        {state?.error && (
          <p className="text-[#F04438] font-inter text-xs my-4">
            {state.error}
          </p>
        )}
        <SubmitButton text={"Sign in"} pending={pending} className={"mt-6"} />
      </form>
      <DontHaveAccount />
    </div>
  );
};

export default Login;
