import React, { useRef } from "react";
import { useState } from "react";

const Otp = ({ otpLength = 4 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  console.log(otpFields);
  console.log(ref);

  const handleKeyDown = (e, index) => {
    const key = e.key;

    const copyPrevOtp = [...otpFields];

    copyPrevOtp[index] = key;
    console.log(copyPrevOtp);
    ref.current[index + 1].focus();
    setOtpFields(copyPrevOtp);
  };
  return (
    <div>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            type="number"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default Otp;
