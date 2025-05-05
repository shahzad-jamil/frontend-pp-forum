"use client";
import React from 'react';
import Image from 'next/image';
import lock from "../../../public/icons8_lock 1.svg";
import maleprofile from "../../../public/icons8_male_user 1.svg";
import mute from "../../../public/mute bell.svg";
import search from "../../../public/green search icon.svg";
import arrow from "../../../public/detailPanel Vector.svg";
import minimize from "../../../public/Vector.svg";

const UserDetailPanel = ({ user, onClose }) => {
  return (
    <div className="h-full max-h-screen overflow-y-auto z-50 transition-transform duration-300 px-4 py-4 sm:p-5 w-full sm:max-w-[800px] bg-cardBackgroundColor dark:bg-homeTabBackgroundColor/5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onClose} className="text-xl" aria-label="Close panel">
          <Image src={minimize} alt="minimize" className="rotate-180 w-5 h-5" />
        </button>
      </div>

      {/* Profile Image and Name */}
      <div className="flex flex-col gap-4 items-center">
        <div className="p-2 sm:p-4 flex flex-col items-center justify-center">
          <Image src={user.profileImage} alt='user profile image' width={85} height={85} className="object-cover" />
          <h3 className="text-center text-[24px] sm:text-[28px] montserrat-primary-font text-primaryColor dark:text-backgroundTextColor mt-2">
            {user.name}
          </h3>
          <p className="text-[12px] sm:text-[14px] text-center secondary-text-color montserrat-smallweigh-font">Active 13h ago</p>
        </div>

        {/* Encrypted Banner */}
        <div className="w-full flex justify-center">
          <div className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[83%] flex gap-2 bg-massageBackground
           dark:bg-mixTopicsOtherCardsBorder/5 rounded-[10px] p-2 px-3 items-center justify-center">
            <Image src={lock} width={16} height={16} alt="lock" />
            <h1 className="text-[13px] sm:text-[14px] dark:text-backgroundTextColor secondary-text-color montserrat-smallweigh-font text-center">
              End-to-end encrypted
            </h1>
          </div>
        </div>

        {/* Options: Profile / Mute / Search */}
        <div className="flex justify-around gap-4 flex-wrap w-full sm:w-[90%] lg:w-[80%] mt-6">
          {[
            { icon: maleprofile, label: "Profile" },
            { icon: mute, label: "Mute" },
            { icon: search, label: "Search" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[80px] sm:w-[45px]">
              <div className="flex items-center bg-massageBackground dark:bg-mixTopicsOtherCardsBorder/5 w-[40px] h-[40px] justify-center rounded-full">
                <Image src={item.icon} alt={`${item.label.toLowerCase()}icon`} width={20} height={20} />
              </div>
              <h1 className="font-Montserrat font-[500] text-primaryColor dark:text-backgroundTextColor text-[13px] sm:text-[14px] mt-1 text-center">
                {item.label}
              </h1>
            </div>
          ))}
        </div>

        {/* Options List */}
        <div className="w-full mt-8">
          <div className="overflow-hidden w-full flex flex-col items-center justify-center">
            {[
              "Chat info",
              "Customize Chat",
              "Media And files",
              "Privacy And Support",
            ].map((text, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center px-4 py-3 border-b border-searchBorderColor dark:border-searchBorderColor/20"
              >
                <span className="text-[16px] sm:text-[17px] font-Montserrat font-[500] text-primaryColor dark:text-backgroundTextColor">
                  {text}
                </span>
                <Image src={arrow} height={8} width={12} alt="arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPanel;
