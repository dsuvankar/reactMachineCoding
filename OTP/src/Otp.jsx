import React, { useRef } from "react";
import { useState } from "react";

const Otp = ({ otpLength = 4 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  console.log(otpFields);
  console.log(ref);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOTP = [...otpFields];
    newOTP[index] = value;
    setOtpFields(newOTP);

    if (value && index < otpFields.length - 1) {
      ref.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "ArrowRight") {
      e.preventDefault();
      if (index + 1 < otpFields.length) {
        ref.current[index + 1].focus();
      }
    }

    if (key === "ArrowLeft") {
      e.preventDefault();
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }

    if (key === "Backspace" && !otpFields[index]) {
      const newOTP = [...otpFields];
      newOTP[index] = "";
      setOtpFields(newOTP);

      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            maxLength={1}
            type="text"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default Otp;
