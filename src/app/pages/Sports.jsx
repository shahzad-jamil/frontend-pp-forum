'use client'
import React, { useState } from 'react'
import minimize from "../../../public/icons8_macos_minimize 1.svg"
import maximize from "../../../public/icons8_Plus 3.svg"
import { AnimatePresence, motion } from 'framer-motion'
import postedByUser from "../../../public/Rectangle 56.svg"
import Image from 'next/image'
import darkmaximize from "../../../public/icons8_Plus_2 1.svg"
import darkminimize from "../../../public/icons8_macos_minimize 1 (1).svg"
import post1 from "../../../public/Rectangle 24 (4).svg"
import post2 from "../../../public/Rectangle 24 (3).svg"
import post3 from "../../../public/Rectangle 24 (2).svg"
import post4 from "../../../public/Rectangle 24 (1).svg"
import post5 from "../../../public/Rectangle 24.svg"
import LatestPost from '../components/LatestPost'
import TrendingContent from '../components/TrendingContent'
import ForumStastic from '../components/ForumStastic'
import OffTopics from '../components/OffTopics'

const Sports = () => {
  const sportsTopic = [
    {
      image: post1,
      title: "Cricket",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match and experience the rollercoaster of emotions.",
      threads: "27.7k",
      updatedTime: "53 minutes ago",
      MatchBetweenTeams: "New Zealand (131/2) outclass Pakistan (128/9) by 8 wickets in the...",
      postedBy: "Bouncer Guy",
      postedUserImage: postedByUser
    },
    {
      image: post2,
      title: "My Cricket",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match and experience the rollercoaster of emotions.",
      threads: "27.7k",
      updatedTime: "53 minutes ago",
      MatchBetweenTeams: "New Zealand (131/2) outclass Pakistan (128/9) by 8 wickets in the...",
      postedBy: "Bouncer Guy",
      postedUserImage: postedByUser
    },
    {
      image: post3,
      title: "Commentary Threads",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match and experience the rollercoaster of emotions.",
      threads: "27.7k",
      updatedTime: "53 minutes ago",
      MatchBetweenTeams: "New Zealand (131/2) outclass Pakistan (128/9) by 8 wickets in the...",
      postedBy: "Bouncer Guy",
      postedUserImage: postedByUser
    },
  ]

  const staffOnline = [
    {
      userImage: postedByUser,
      userName: "BouncerGuy",
      userRole: "Super Moderator"
    },
    {
      userImage: postedByUser,
      userName: "Asad T",
      userRole: "Super Moderator"
    },
  ]

  const [isMinimized, setIsMinimized] = useState(false)
  const [isDarkMinimized, setIsDarkMinimized] = useState(false)

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-[30px] w-full lg:max-w-[82%] md:mt-[20px] mx-auto px-4'>
        <div className='w-full lg:flex-4 p-3'>
          {/* Header */}
          <div className='background-color w-full flex justify-between items-center p-4 rounded-[15px] '>
            <h1 className='text-[28px] background-text-color px-3 montserrat-primary-font font-semibold '>Sports</h1>
            <button onClick={() => setIsMinimized(!isMinimized)}>
              <Image src={isMinimized ? maximize : minimize} alt='toggle' height={35} width={35} className='cursor-pointer' />
            </button>
          </div>

          {/* Sports Topics */}
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
                {sportsTopic.map((item, index) => (
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
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <OffTopics />

          <div className='background-color w-full mt-[30px] flex justify-between p-4 rounded-[15px]'>
            <h1 className='text-[28px] background-text-color px-3 montserrat-primary-font font-semibold'>The PP Team</h1>
            <Image src={maximize} alt='minimize' height={35} width={35} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='w-full lg:flex-1 p-2 flex flex-col gap-4'>

          {/* Staff Online */}
          <div className='card-background-color dark:bg-primaryColor outline-none shadow-2xl border border-secondaryColor/50 py-4 md:px-6 rounded-[20px]'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font'>Staff Online</h1>
                <p className='text-[20px] sm:text-[24px] font-bold register-text-color montserrat-primary-font'>(2)</p>
              </div>
              <button onClick={() => setIsDarkMinimized(!isDarkMinimized)}>
                <Image src={isDarkMinimized ? darkmaximize : darkminimize} alt='toggle' height={35} width={35} className='cursor-pointer' />
              </button>
            </div>

            <AnimatePresence>
              {!isDarkMinimized && (
                <motion.div
                  key="staff-online"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {staffOnline.map((member, index) => (
                    <div key={index} className='flex items-center gap-2 mt-3'>
                      <div className='w-[45px] h-[34px]'>
                        <Image src={member.userImage} alt='user' height={34} width={45} className='rounded-full object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='montserrat-primary-font text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color'>{member.userName}</h1>
                        <p className='montserrat-secondary-font text-[12px] sm:text-[14px] font-bold secondary-text-color'>{member.userRole}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Members Online */}
          <div className='card-background-color dark:bg-primaryColor outline-none shadow-2xl border border-secondaryColor/50 py-4 md:px-6 rounded-[20px]'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>Members Online</h1>
                <p className='text-[20px] sm:text-[24px] font-bold register-text-color montserrat-primary-font'>(4)</p>
              </div>
              <button onClick={() => setIsDarkMinimized(!isDarkMinimized)}>
                <Image src={isDarkMinimized ? darkmaximize : darkminimize} alt='toggle' height={35} width={35} className='cursor-pointer' />
              </button>
            </div>

            <AnimatePresence>
              {!isDarkMinimized && (
                <motion.div
                  key="members-online"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {staffOnline.map((member, index) => (
                    <div key={index} className='flex items-center gap-2 mt-3'>
                      <div className='w-[45px] h-[34px]'>
                        <Image src={member.userImage} alt='user' height={34} width={45} className='rounded-full object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='montserrat-primary-font text-[12px] sm:text-[14px] font-bold primary-text-color dark:text-backgroundTextColor'>{member.userName}</h1>
                        <p className='montserrat-secondary-font text-[12px] sm:text-[14px] font-bold secondary-text-color'>{member.userRole}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guests */}
          <div className='card-background-color py-4 px-6 rounded-[20px] dark:bg-primaryColor outline-none shadow-2xl border border-secondaryColor/50'>
            <div className='flex gap-2'>
              <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>Guests Online</h1>
              <p className='text-[20px] sm:text-[24px] font-bold register-text-color montserrat-primary-font'>(18)</p>
            </div>
          </div>

          <TrendingContent />
          <LatestPost />
        </div>
      </div>

      <div className='w-full lg:max-w-[82%] mt-[100px] mx-auto px-4'>
        <ForumStastic />
      </div>
    </>
  )
}

export default Sports
