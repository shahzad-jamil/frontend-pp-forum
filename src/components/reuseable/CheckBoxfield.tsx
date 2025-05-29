import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomCheckboxProps {
    label: string;
    register: UseFormRegisterReturn;
    id: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, register, id }) => {
    return (
        <label htmlFor={id} className="flex items-center gap-1 cursor-pointer select-none">
            <input
                id={id}
                type="checkbox"
                {...register}
                className="peer hidden"
            />
            <div className="w-5 h-5 shrink-0 border-[3px] border-secondaryColor rounded-[3px] flex items-center justify-center transition-all peer-checked:hidden">
            </div>
            <div className="w-5 h-5 border-[3px] hidden peer-checked:flex border-primaryGreen rounded-[3px] items-center justify-center transition-all peer-checked:bg-primaryGreen">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="text-sm text-secondaryColor dark:text-darkSecondaryColor font-Montserrat">{label}</span>
        </label>
    );
};

export default CustomCheckbox;
