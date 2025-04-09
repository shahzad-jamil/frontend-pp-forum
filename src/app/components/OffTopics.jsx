'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import minimize from "../../../public/icons8_macos_minimize 1.svg"
import maximize from "../../../public/icons8_Plus 3.svg"

import postedByUser from "../../../public/Rectangle 56.svg"
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
      <div className='background-color w-full mt-[30px] flex justify-between p-4 rounded-[15px]'>
        <h1 className='text-[28px] background-text-color px-3 montserrat-primary-font font-semibold'>
          Off Topic
        </h1>
        <button onClick={() => setIsMinimized(!isMinimized)}>
          <Image
            src={isMinimized ? maximize : minimize}
            alt='toggle'
            height={35}
            width={35}
            className='cursor-pointer'

          />
        </button>
      </div>

      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            className='w-full'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {offTopics.map((item, index) => (
              <div key={index} className='flex mt-[20px] gap-[20px] sport-border-color pb-4 overflow-hidden'>
                <Image src={item.image} alt='post 1' height={228} width={260} />
                <div className='flex flex-col'>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-[24px] font-bold primary-text-color montserrat-primary-font'>
                      {item.title}
                    </h1>
                    <h1 className='text-[14px] font-semibold following-text-color montserrat-primary-font'>
                      Following
                    </h1>
                  </div>
                  <p className='text-[14px] secondary-text-color montserrat-secondary-font'>
                    {item.description}
                  </p>
                  <div className='flex justify-between mt-[10px] items-center'>
                    <div className='flex items-center gap-1'>
                      <h1 className='text-[14px] font-bold primary-text-color montserrat-primary-font'>
                        Threads:
                      </h1>
                      <p className='text-[14px] secondary-text-color montserrat-secondary-font'>
                        {item.threads}
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <h1 className='text-[14px] font-bold primary-text-color montserrat-primary-font'>
                        Updated:
                      </h1>
                      <p className='text-[14px] secondary-text-color montserrat-secondary-font'>
                        {item.updatedTime}
                      </p>
                    </div>
                  </div>
                  <h1 className='text-[14px] font-bold primary-text-color montserrat-primary-font'>
                    {item.MatchBetweenTeams}
                  </h1>
                  <div className='flex items-center gap-2 mt-2'>
                    <div className='w-[34px] h-[34px] flex justify-center items-center p-0 rounded-full'>
                      <Image
                        src={item.postedUserImage}
                        alt='post user'
                        height={34}
                        width={34}
                        className='rounded-full object-cover'
                      />
                    </div>
                    <p className='montserrat-primary-font text-[14px] font-bold primary-text-color'>
                      {item.postedBy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default OffTopics
