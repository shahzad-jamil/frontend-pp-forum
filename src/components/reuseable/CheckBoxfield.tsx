import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { DefaultTransition } from "../../utils/constants";

interface CustomCheckboxProps {
    label: string;
    register: UseFormRegisterReturn;
    id: string;
    error?: any
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, register, id, error }) => {
    return (
        <div>
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
            <AnimatePresence initial={false} mode="wait">
                {error && (
                    <motion.div
                        key="upper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={DefaultTransition}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomCheckbox;
