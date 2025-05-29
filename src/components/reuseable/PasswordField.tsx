import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";

interface PasswordFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: any;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  id,
  placeholder = "",
  register,
  error,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative mt-[30px] w-full">
      <label
        htmlFor={id}
        className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font dark:bg-primaryColor dark:text-backgroundTextColor"
      >
        {label}
      </label>

      <div className="flex border-[1.7px] border-neutral200 focus-within:border-primaryGreen/50 rounded-[100px] pr-[20px]">
        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className="w-full montserrat-secondary-font dark:bg-primaryColor secondary-text-color outline-none px-6 py-4  rounded-[100px] text-[12px] md:text-[14px]"
        />
        <Image
          src={visible ? "/viewEye.svg" : "/icons8_hide 1.svg"}
          alt="toggle visibility"
          height={18}
          width={18}
          className="cursor-pointer"
          onClick={() => setVisible((prev) => !prev)}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1 ps-4">{error}</p>}
    </div>
  );
};

export default PasswordField;
