import { useFormStatus } from "react-dom";
import LoadingRing from "../LoadingRing";

const CustomButton = ({ text, onClick, className }) => {
  const { pending } = useFormStatus();

  return (
    <button
      onClick={onClick}
      className={`active:scale-95 font-medium text-sm w-full bg-[#F5F3C2] text-black 
        flex items-center justify-center py-[14px] rounded-lg ${className}`}
    >
      {pending ? (
        <>
          <LoadingRing
            width={"19.6px"}
            height={"19.6px"}
            colors={["#000000"]}
          />
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default CustomButton;
