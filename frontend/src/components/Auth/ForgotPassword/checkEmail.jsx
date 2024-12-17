// import { useState, useEffect } from "react";
// import LinkExpired from "./linkExpired";
import LinkNotExpired from "./notLinkExpired";

const CheckEmail = ({ email }) => {
  // const [isLinkExpired, setIsLinkExpired] = useState(false);
  // const [timeRemaining, setTimeRemaining] = useState(10);
  // useEffect(() => {
  //   if (timeRemaining > 0) {
  //     const timer = setInterval(() => {
  //       setTimeRemaining((prevTime) => prevTime - 1);
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   } else {
  //     setIsLinkExpired(true);
  //   }
  // }, [timeRemaining]);

  return (
    <div>
      {/* {isLinkExpired ? (
        <LinkExpired />
      ) : (
        <>
          <p>Time remaining: {timeRemaining} seconds</p>
        </>
      )} */}
      <LinkNotExpired email={email} />
    </div>
  );
};

export default CheckEmail;
