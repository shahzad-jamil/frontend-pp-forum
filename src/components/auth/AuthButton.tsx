import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const AuthButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      type="submit"
      {...props}
      className={"w-full bg-primaryGreen transition duration-100 text-backgroundTextColor hover:bg-registerTextColor p-4 rounded-[100px] text-[12px] md:text-[14px] font-[600] font-openSans cursor-pointer my-[30px]"}
    >
      {children}
    </button>
  );
};

export default AuthButton;
