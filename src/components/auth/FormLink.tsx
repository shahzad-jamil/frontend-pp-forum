import Link from "next/link";
import React from "react";

interface FormLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FormLink: React.FC<FormLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`text-[12px] md:text-[14px] accent-text-color hover:underline transition duration-200 montserrat-secondary-font ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};

export default FormLink;
