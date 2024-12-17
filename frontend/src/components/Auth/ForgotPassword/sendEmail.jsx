import ForgotPasswordSVG from "@/assets/Auth/forgotPassword";
import InputField from "../inputfield";
import SubmitButton from "../Login/submitButton";

const SendEmail = ({ state, formAction, pending }) => {
  return (
    <>
      <ForgotPasswordSVG className="w-16 h-16 lg:w-24 lg:h-24 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Forgot your password?
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your email to receive an OTP for reset password process.
      </div>
      <form action={formAction} className="mt-10">
        <InputField
          type={"text"}
          label={"Email*"}
          name={"email"}
          placeholder={"Enter your email"}
        />
        {state?.error && (
          <div className="mt-2 text-red-500 text-sm">{state.error}</div>
        )}
        {state?.success && (
          <div className="mt-2 text-green-500 text-sm">{state.success}</div>
        )}
        <SubmitButton className={`mt-6`} text={"Continue"} pending={pending} />
      </form>
    </>
  );
};

export default SendEmail;
