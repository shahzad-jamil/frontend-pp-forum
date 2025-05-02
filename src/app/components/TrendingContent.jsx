"use client";
import React, { useState } from 'react';
import postedByUser from "../../../public/Rectangle 56.svg";
import Image from 'next/image';
import greenmaximize from "../../../public/icons8_expand_arrow 1 (2).svg";
import greenminimize from "../../../public/icons8_expand_arrow 1 (1).svg";
import { motion } from "framer-motion";

const TrendingContent = () => {
  const trendingContent = [
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",
    },
    {
      image: postedByUser,
      title: "Hasan Nawaz: The emerging power-hitting sensation in International Cricket",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",
    },
    {
      image: postedByUser,
      title: "Mohammad Haris - International Performance Watch",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",
    },
    {
      image: postedByUser,
      title: "We are far behind, can't compete with the world: Atiq-uz-Zaman",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",
    },
    {
      image: postedByUser,
      title: "We are far behind, can't compete with the world: Atiq-uz-Zaman",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",
    },
  ];

  const [isContentMinimized, setIsContentMinimized] = useState(false);

  return (
    <>
      <div className="w-[100%] card-background-color flex flex-col mt-[30px] dark:bg-searchBorderColor/5 outline-none border border-searchBorderColor  dark:border-sportCardsDarkBorder/20 py-4 px-4 sm:py-5 sm:px-8 rounded-[20px]">
        <div className="w-[100%] flex justify-between rounded-[15px]">
          <div>
            <h1 className="text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor">
              Trending Content
            </h1>
          </div>
          <button onClick={() => setIsContentMinimized(!isContentMinimized)}>
            <Image
              src={isContentMinimized ? greenmaximize : greenminimize}
              alt="toggle"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Apply motion effect using framer-motion */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: "auto" }}
          animate={{
            height: isContentMinimized ? 0 : "auto",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {trendingContent.map((trending, index) => (
            <div
              className="flex gap-2 mt-[10px] border-b py-4 border-searchBorderColor dark:border-searchBorderColor/20"
              key={index}
            >
              <div className="w-[45px] h-[34px] flex justify-center items-center p-0 rounded-full">
                <Image
                  src={trending.image}
                  alt="post 1"
                  height={34}
                  width={45}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex w-[100%] flex-col">
                <h1 className="montserrat-primary-font text-[13px] flex-1 font-bold primary-text-color dark:text-backgroundTextColor">
                  {trending.title}
                </h1>
                <div className="flex flex-col sm:flex-row justify-between mt-[10px] sm:items-center">
                  <div className="flex items-center gap-2">
                    <h1 className="font-openSans font-[400] dark:font-[400] dark:font-openSans text-[11px] secondary-text-color dark:text-backgroundTextColor">
                      {trending.postedBy}
                    </h1>
                    <h1 className="font-openSans font-[400] text-[11px] dark:font-[400] dark:font-openSans dark:text-backgroundTextColor secondary-text-color">
                      {trending.Time}
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <h1 className="text-[11px] font-bold text-buttonBackgroundColor dark:font-[400] dark:font-openSans font-openSans dark:text-backgroundTextColor">
                      Replies:
                    </h1>
                    <p className="text-[11px] text-buttonBackgroundColor dark:font-[400] dark:font-openSans montserrat-primary-font">
                      {trending.Replies}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default TrendingContent;
