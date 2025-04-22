'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import minimize from "../../../public/icons8_expand_arrow 1.svg"
import maximize from "../../../public/Vector.svg"

import postedByUser from "../../../public/Ellipse 1 (1).svg"
import Image from 'next/image'
import post4 from "../../../public/Rectangle 24 (1).svg"
import post5 from "../../../public/Rectangle 24.svg"

const OffTopics = () => {
  const [isMinimized, setIsMinimized] = useState(false)

  const offTopics = [
    {
      image: post4,
      title: "Time Pass And Sports",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you...",
      threads: "27.7k",
      updatedTime: "53 minutes ago",
      MatchBetweenTeams: "New Zealand (131/2) outclass Pakistan (128/9)...",
      postedBy: "Bouncer Guy",
      postedUserImage: postedByUser
    },
    {
      image: post5,
      title: "Member Interviews",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you...",
      threads: "27.7k",
      updatedTime: "53 minutes ago",
      MatchBetweenTeams: "New Zealand (131/2) outclass Pakistan (128/9)...",
      postedBy: "Bouncer Guy",
      postedUserImage: postedByUser
    },
  ]

  return (
    <>
      <div
        className={`w-full flex justify-between items-center mt-[20px] p-4 rounded-[15px] ${isMinimized ? 'bg-white' : 'background-color'
          }`}
      >
        <h1
          className={`text-[28px] px-3 montserrat-primary-font font-semibold ${isMinimized ? 'text-black' : 'background-text-color'
            }`}
        >
          Off Topics
        </h1>
        <button onClick={() => setIsMinimized(!isMinimized)}>
          <Image
            src={isMinimized ? maximize : minimize}
            alt="toggle"
            height={20}
            width={22}
            className={`cursor-pointer ${isMinimized ? 'text-black w-[12]' : 'background-text-color'
              }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            key="sports-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className='w-full'
          >
            {offTopics.map((item, index) => (
              <div key={index} className='flex flex-col sm:flex-row mt-[20px] gap-[20px] sport-border-color pb-4'>
                <Image src={item.image} alt='post 1' height={228} width={260} className='w-full sm:w-[260px] h-auto object-cover' />
                <div className='flex flex-col'>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>{item.title}</h1>
                    <h1 className='text-[12px] sm:text-[14px] font-semibold following-text-color montserrat-primary-font'>Following</h1>
                  </div>
                  <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>{item.description}</p>

                  <div className='flex justify-between flex-col sm:flex-row gap-4 my-[10px] sm:items-center flex-wrap'>
                    <div className='flex items-center gap-1'>
                      <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>Threads:</h1>
                      <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font dark:text-registerTextColor dark:montserrat-smallweigh-font'>{item.threads}</p>
                    </div>

                    <div className='flex items-center gap-1'>
                      <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>Updated:</h1>
                      <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font dark:text-registerTextColor dark:montserrat-smallweigh-font'>{item.updatedTime}</p>
                    </div>
                  </div>

                  <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>{item.MatchBetweenTeams}</h1>
                  <div className='flex items-center gap-2 mt-[10px] sm:mt-1'>
                    <div className='w-[34px] h-[34px]'>
                      <Image src={item.postedUserImage} alt='posted user' height={34} width={34} className='rounded-full object-cover' />
                    </div>
                    <p className='montserrat-primary-font text-[12px] sm:text-[14px]  font-bold primary-text-color dark:text-backgroundTextColor'>{item.postedBy}</p>
                  </div>
                </div>
              </div>
            ))}          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default OffTopics
