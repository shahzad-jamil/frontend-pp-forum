'use client'
import React, { useState } from 'react'
import minimize from "../../../public/icons8_expand_arrow 1.svg"
import maximize from "../../../public/Vector.svg"
import { AnimatePresence, motion } from 'framer-motion'
import postedByUser from "../../../public/Ellipse 1 (1).svg"
import onlineUser from "../../../public/Rectangle 56.svg"
import Image from 'next/image'
import greenmaximize from "../../../public/icons8_expand_arrow 1 (2).svg"
import greenminimize from "../../../public/icons8_expand_arrow 1 (1).svg"
import post1 from "../../../public/Rectangle 24 (4).svg"
import post2 from "../../../public/Rectangle 24 (3).svg"
import post3 from "../../../public/Rectangle 24 (2).svg"
import post4 from "../../../public/Rectangle 24 (1).svg"
import post5 from "../../../public/Rectangle 24.svg"
import LatestPost from '../components/LatestPost'
import TrendingContent from '../components/TrendingContent'
import ForumStastic from '../components/ForumStastic'
import OffTopics from '../components/OffTopics'
import Link from 'next/link'

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
      userImage: onlineUser,
      userName: "BouncerGuy",
      userRole: "Super Moderator"
    },
    {
      userImage: onlineUser,
      userName: "Asad T",
      userRole: "Super Moderator"
    },
  ]

  const [isMinimized, setIsMinimized] = useState(false)
  const [isPPTeam, setIsPPTeam] = useState(false)

  // const [isGreenMinimized, setIsGreenMinimized] = useState(false)
  const [isStaffMinimized, setIsStaffMinimized] = useState(false);
  const [isMembersMinimized, setIsMembersMinimized] = useState(false);

  return (
    <>
      <div className='flex flex-col xl:flex-row gap-[30px] w-full md:w-[90%] lg:max-w-[82%] md:mt-[20px] mx-auto px-4'>
        <div className='w-full lg:flex-4 p-3'>
          {/* Header */}
          <div
            className={`w-full flex justify-between items-center p-4 rounded-[15px] ${isMinimized ? 'bg-white' : 'bg-buttonBackgroundColor'
              }`}
          >
            <h1
              className={`text-[28px] px-3 montserrat-primary-font font-semibold ${isMinimized ? 'text-black' : 'background-text-color'
                }`}
            >
              Sports
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
                  <Link href="/mixtopics">
                    <div key={index} className='flex flex-col sm:flex-row mt-[20px] gap-[20px] border-b border-secondaryColor/50 pb-4'>
                      <Image src={item.image} alt='post 1' height={228} width={260} className='w-full sm:w-[260px] h-auto object-cover' />
                      <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                          <h1 className='text-[20px] sm:text-[24px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font '>{item.title}</h1>
                          {/* <h1 className='text-[12px] sm:text-[14px] font-semibold following-text-color montserrat-primary-font'>Following</h1> */}
                        </div>
                        <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>{item.description}</p>

                        <div className='flex justify-between flex-col sm:flex-row gap-4 my-[10px] sm:items-center flex-wrap'>
                          <div className='flex items-center gap-1'>
                            <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color font-openSans dark:text-backgroundTextColor'>Threads:</h1>
                            <p className='text-[12px] sm:text-[14px] secondary-text-color font-openSans font-[400]  dark:font-[400] dark:text-registerTextColor dark:font-openSans'>{item.threads}</p>
                          </div>

                          <div className='flex items-center gap-1'>
                            <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color font-openSans dark:text-backgroundTextColor'>Latest Post:</h1>
                            <p className='text-[12px] sm:text-[14px] secondary-text-color font-openSans font-[400] dark:font-[400] dark:text-registerTextColor dark:font-openSans'>{item.updatedTime}</p>
                          </div>
                        </div>

                        <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color font-openSans dark:text-backgroundTextColor'>{item.MatchBetweenTeams}</h1>
                        <div className='flex items-center gap-2 mt-[10px] sm:mt-1'>
                          <div className='w-[34px] h-[34px]'>
                            <Image src={item.postedUserImage} alt='posted user' />
                          </div>
                          <p className='text-[12px] sm:text-[14px] font-openSans font-bold primary-text-color dark:text-backgroundTextColor'>{item.postedBy}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <OffTopics />

          <div
            className={`w-full flex justify-between items-center p-4 mt-[20px] rounded-[15px] ${isPPTeam ? 'bg-white' : 'bg-buttonBackgroundColor'
              }`}
          >
            <h1
              className={`text-[28px] px-3 montserrat-primary-font font-semibold ${isPPTeam ? 'text-black' : 'background-text-color'
                }`}
            >
              The PP Team
            </h1>
            <button onClick={() => setIsPPTeam(!isPPTeam)}>
              <Image
                src={isPPTeam ? maximize : minimize}
                alt="toggle"
                height={20}
                width={22}
                className={`cursor-pointer ${isPPTeam ? 'text-black w-[12]' : 'background-text-color'
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='w-full lg:flex-1 p-2 flex flex-col gap-4'>

          {/* Staff Online */}
          <div className='card-background-color dark:bg-backgroundTextColor/10 outline-none py-4 px-4 sm:py-5 sm:px-8 border border-secondaryColor/50 md:px-6 rounded-[20px]'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font'>
                  Staff Online
                </h1>
                <p className='text-[20px] sm:text-[24px] font-bold register-text-color montserrat-primary-font'>(2)</p>
              </div>
              <button onClick={() => setIsStaffMinimized(!isStaffMinimized)}>
                <Image
                  src={isStaffMinimized ? greenmaximize : greenminimize}
                  alt='toggle'
                  height={20}
                  width={20}
                  className='cursor-pointer'
                />
              </button>
            </div>

            <AnimatePresence>
              {!isStaffMinimized && (
                <motion.div
                  key="staff-online"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {staffOnline.map((member, index) => (
                    <div key={index} className='flex items-center gap-2 mt-3 border-b pb-4 border-searchBorderColor   dark:border-searchBorderColor/20'>
                      <div className='w-[45px] h-[34px]'>
                        <Image src={member.userImage} alt='user' height={34} width={45} className='rounded-full object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='montserrat-primary-font text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color'>{member.userName}</h1>
                        <p className='montserrat-secondary-font text-[12px] font-bold secondary-text-color dark:font-[600] dark:text-registerTextColor dark:font-openSans'>{member.userRole}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Members Online */}
          <div className='card-background-color dark:bg-backgroundTextColor/10 outline-none py-4 px-4 sm:py-5 sm:px-8 border border-secondaryColor/50 md:px-6 rounded-[20px]'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font'>
                  Members Online
                </h1>
                <p className='text-[20px] sm:text-[24px] font-bold register-text-color montserrat-primary-font'>(2)</p>
              </div>
              <button onClick={() => setIsMembersMinimized(!isMembersMinimized)}>
                <Image
                  src={isMembersMinimized ? greenmaximize : greenminimize}
                  alt='toggle'
                  height={20}
                  width={20}
                  className='cursor-pointer'
                />
              </button>
            </div>

            <AnimatePresence>
              {!isMembersMinimized && (
                <motion.div
                  key="members-online"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {staffOnline.map((member, index) => (
                    <div key={index} className='flex items-center gap-2 mt-3 border-b pb-4 border-searchBorderColor dark:border-searchBorderColor/20'>
                      <div className='w-[45px] h-[34px]'>
                        <Image src={member.userImage} alt='user' height={45} width={45} className='object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='montserrat-primary-font text-[12px] sm:text-[14px] font-bold primary-text-color dark:text-backgroundTextColor'>{member.userName}</h1>
                        <p className='montserrat-secondary-font text-[12px] font-bold secondary-text-color dark:font-[600] dark:text-registerTextColor dark:font-openSans'>{member.userRole}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Guests */}
          <div className='card-background-color py-4 px-6 rounded-[20px] dark:bg-backgroundTextColor/10 outline-none  border border-secondaryColor/50'>
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
