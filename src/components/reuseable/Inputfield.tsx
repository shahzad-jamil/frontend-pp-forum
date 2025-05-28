import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: any;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  placeholder = "",
  register,
  error,
  type = "text",
}) => {
  return (
    <div className="relative mt-[30px] w-full">
      <label
        htmlFor={id}
        className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font dark:bg-primaryColor dark:text-backgroundTextColor"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full dark:bg-primaryColor montserrat-secondary-font border-[1.7px] border-neutral200 focus:border-primaryGreen/50  secondary-text-color outline-none px-6 py-4 rounded-[100px] text-[12px] md:text-[14px]"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
