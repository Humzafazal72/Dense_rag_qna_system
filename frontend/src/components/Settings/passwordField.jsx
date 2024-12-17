"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordField = ({ labelClassName, labelText, placeholder, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 text-sm">
      <label htmlFor="" className={labelClassName}>
        {labelText}
      </label>
      <div className="relative w-full flex items-center">
        <input
          name={name}
          className="w-full pl-[14px] py-3 bg-[#25262D] placeholder:text-[#676871] rounded-lg focus:outline-none"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-[14px] cursor-pointer"
        >
          {showPassword ? (
            <FaEye strokeWidth={1} />
          ) : (
            <FaEyeSlash strokeWidth={1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
