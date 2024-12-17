import CopySVG from "@/assets/Content/copy";
import TickSVG from "@/assets/Content/tick";
import { useEffect, useState } from "react";

const CopyTick = ({ content }) => {
  const [showTick, setShowTick] = useState(false);
  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    setShowTick(true);
  };

  useEffect(() => {
    let timeoutId;
    if (showTick) {
      timeoutId = setTimeout(() => {
        setShowTick(false);
      }, 2000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showTick]);
  return (
    <button
      disabled={showTick}
      onClick={() => handleCopy(content)}
      className="w-7 h-7 flex items-center justify-center hover:bg-lightDark 
  transition duration-100 cursor-pointer rounded-md -ml-1 active:scale-90"
    >
      {showTick ? (
        <TickSVG className="w-[18px] h-[18px]" />
      ) : (
        <CopySVG className="w-[18px] h-[18px]" />
      )}
    </button>
  );
};

export default CopyTick;
