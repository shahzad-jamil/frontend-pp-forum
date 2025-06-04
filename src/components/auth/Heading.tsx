import React from "react";

interface FormTitleProps {
  title: string;
  subtitle?: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="text-[30px] md:text-[40px] primary-text-color font-semibold dark:text-backgroundTextColor montserrat-primary-font">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[14px] md:text-[16px] text-secondaryColor dark:text-darkSecondaryColor montserrat-smallweigh-font">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default FormTitle;
