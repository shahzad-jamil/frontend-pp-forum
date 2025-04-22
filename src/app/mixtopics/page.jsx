"use client";
import React from 'react'
import Image from 'next/image';
import create from "../../../public/icons8_create 1.svg"
import user from "../../../public/Group 2008.svg"
import postImage from "../../../public/image 115.svg"
import pin from "../../../public/pin.svg"
import postvideo from "../../../public/image 115 (1).svg"
import question from '../../../public/icons8_questions 1.svg';
import arrow from "../../../public/icons8_expand_arrow black.svg"
import search from '../../../public/search.svg';
import close from "../../../public/icons8_multiply 2.svg"
import creat from "../../../public/icons8_create 2.svg"
import dots from "../../../public/icons8_menu_vertical 1.svg"
import poll from '../../../public/icons8_poll 1.svg';

import CreateComponent from '../components/CreateComponent';
import { AnimatePresence, motion } from 'framer-motion'



import maximize from "../../../public/icons8_expand_arrow 1.svg"
import minimize from "../../../public/Vector.svg"
import { useState, useRef, useEffect } from 'react';

// import create from '../../../public/icons8_create 1.svg';
import article from '../../../public/icons8_regular_document 1.svg';
// import question from '../../../public/icons8_questions 1.svg';
// import poll from '../../../public/icons8_poll 1.svg';
import discussion from '../../../public/discussion.svg';
import Link from 'next/link';
const page = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect outside clicks

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const actions = [
    {
      image: discussion,
      title: 'Discussion',
      path: '/post-discussion',
      color: 'bg-discussionButtonColor',
    },
    {
      image: article,
      title: 'Article',
      path: '/post-article',
      color: 'bg-articleButtonColor',
    },
    {
      image: poll,
      title: 'Poll',
      path: '/poll',
      color: 'bg-pollButtonColor',
    },
    {
      image: question,
      title: 'Question',
      path: '/post-question',
      color: 'bg-questionButtonColor',
    },
  ];

  // const Topics = [

  //   {
  //     title: "Pace alone won't make you a great bowler.",
  //     description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
  //     userImage: user,
  //     date: "Today at 3:29 AM",
  //     name: "Bouncer Guy",
  //     replies: "10",
  //     views: "226",
  //     image: postImage,
  //   },

  //   {
  //     title: "Pace alone won't make you a great bowler.",
  //     description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
  //     userImage: user,
  //     date: "Today at 3:29 AM",
  //     name: "Bouncer Guy",
  //     replies: "10",
  //     views: "226",
  //     image: postImage,
  //   }

  // ]

  const [isSport, setIsSport] = useState(false);         // Show by default
  const [isOffTopic, setIsOffTopic] = useState(false);   // Show by default
  const [isMinimized, setIsMinimized] = useState(false); // Show

  return (
    <>


      <div>
        <div
          className=' px-6 md:px-0 md:max-w-[92%] flex gap-[10px] justify-end mt-[20px] relative'
          ref={dropdownRef}
        >
          {/* Create Thread Button */}
          <button
            onClick={toggleDropdown}
            className='button-background-color rounded-[100px] md:justify-center py-4 px-4 sm:py-5 sm:px-8 flex md:items-center gap-3'
          >
            <Image src={create} alt='post 1' width={20} height={20} />
            <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Create Thread
            </h1>
          </button>

          <button
            // onClick={toggleDropdown}
            className='bg-primaryColor rounded-[100px] md:justify-center py-4 px-4 sm:py-5 sm:px-8 flex md:items-center gap-3'
          >
            {/* <Image src={create} alt='post 1' width={20} height={20} /> */}
            <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Filters
            </h1>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className='absolute top-[100%] mt-3 flex flex-col justify-center gap-[10px] dark:bg-primaryColor card-background-color p-4 rounded-[20px] shadow-2xl w-[224px] z-50'>
              {actions.map((action, index) => (
                <Link href={action.path} key={index}>
                  <button
                    className={` text-[16px] w-full rounded-[100px] py-4 px-4 sm:py-5 sm:px-8 flex items-center gap-3 ${action.color}`}
                  >
                    <Image
                      src={action.image}
                      alt='discussion'
                      width={20}
                      height={20}
                    />
                    <span className='text-[16px] background-text-color font-semibold montserrat-secondary-font'>
                      {action.title}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* create button */}
      <div className='w-fulL md:max-w-[84%] mx-auto h-auto flex lg:flex-col items-center'>

        <div className='w-[100%] p-3 md:flex-row h-full flex-col  flex gap-[20px] '>
          {/* md:flex-row */}
          {/* left content */}

          {/* Sports Section */}
          <div className='w-[100%] md:w-[30%] mx-auto md:mx-0 mt-10'>
            {/* w-[30%] */}
            {/* --- Sports --- */}
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isSport ? 'bg-white' : 'background-color'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isSport ? 'text-black' : 'background-text-color'}`}>
                Sports
              </h1>
              <button onClick={() => setIsSport(!isSport)}>
                <Image
                  src={isSport ? minimize : maximize}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isSport ? 'text-black w-[12]' : 'background-text-color'}`}
                />
              </button>
            </div>

            {isSport && (
              <div className='px-5 mt-2'>
                <ul className="list-none">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Cricket
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    My Cricket
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Commentary Threads
                  </li>
                </ul>
              </div>
            )}

            {/* --- Off Topic --- */}
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isOffTopic ? 'bg-white' : 'background-color'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isOffTopic ? 'text-black' : 'background-text-color'}`}>
                Off Topic
              </h1>
              <button onClick={() => setIsOffTopic(!isOffTopic)}>
                <Image
                  src={isOffTopic ? minimize : maximize}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isOffTopic ? 'text-black w-[12]' : 'background-text-color'}`}
                />
              </button>
            </div>

            {isOffTopic && (
              <div className='px-5 mt-2'>
                <ul className="list-none">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Time Pass And Sports
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Member Interviews
                  </li>
                </ul>
              </div>
            )}

            {/* --- The PP Team --- */}
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isMinimized ? 'bg-white' : 'background-color'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isMinimized ? 'text-black' : 'background-text-color'}`}>
                The PP Team
              </h1>
              <button onClick={() => setIsMinimized(!isMinimized)}>
                <Image
                  src={isMinimized ? minimize : maximize}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isMinimized ? 'text-black w-[12]' : 'background-text-color'}`}
                />
              </button>
            </div>

            {isMinimized && (
              <div className='px-5 mt-2'>
                <ul className="list-none">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Admin 1
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-lime-500 before:rounded-full secondary-text-color montserrat-secondary-font">
                    Admin 2
                  </li>
                </ul>
              </div>
            )}
          </div>


          {/* right content */}

          <div className='flex-col justify-center w-[100%] md:w-[70%] mt-10'>
            {/* w-[65%] */}
            {/* post 1 */}
            <div className='w-full bg-backgroundColor/10 rounded-[20px] flex gap-2 p-5 flex-col lg:flex-row'>
              <div className='w-full lg:w-[80%]'>
                <div>
                  <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    Pace alone won't make you a great bowler.
                  </h1>
                  <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                    Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...
                  </p>
                </div>
                <div className='w-full mt-5 flex flex-col lg:flex-row items-center justify-between'>
                  <div className='flex w-full gap-3'>
                    <Image
                      src={user}
                      alt="user"
                      width={63}
                      height={48}
                    />
                    <div className='flex flex-col justify-center'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font'>
                        Today at 3:29 AM
                      </h1>
                      <p className='secondary-text-color montserrat-secondary-font'>Bouncer Guy</p>
                    </div>
                  </div>

                  <div className='flex w-full justify-between gap-[20px] mt-4 lg:mt-0'>
                    <div className='flex gap-2'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                        Replies: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>10</p>
                      </h1>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                        Views: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>226</p>
                      </h1>
                    </div>

                    <div className='text-backgroundTextColor px-4 flex items-center gap-1 bg-discussionButtonColor rounded-[100px]'>
                      <Image src={discussion} alt='post 1' width={10} height={10} />
                      <h1 className='text-[10px] font-semibold montserrat-secondary-font'>
                        Discussion
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-4 lg:mt-0'>
                <Image
                  src={postImage}
                  alt="post"
                  height={160}
                  width={200}
                  className="lg:w-[200px] w-full rounded-[15px] object-cover"
                />
              </div>
            </div>

            {/* article 1 */}
            <div className='w-full bg-backgroundColor/10 rounded-[20px] flex gap-2 p-5 mt-5 flex-col lg:flex-row'>
              <div className='w-full'>
                <div className='flex flex-col md:flex-row gap-2'>
                  <Image
                    src={pin}
                    alt='pin'
                    width={30}
                    height={30}
                  />
                  <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    West Indies series could revive Shan Masood's.
                  </h1>
                </div>
                <div>
                  <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                    Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...
                  </p>
                </div>
                <div className='w-full mt-5 flex flex-col lg:flex-row items-center justify-between'>
                  <div className='flex w-full'>
                    <Image
                      src={user}
                      alt="user"
                      width={63}
                      height={48}
                    />
                    <div className='flex flex-col justify-center ml-3'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font'>
                        Today at 3:29 AM
                      </h1>
                      <p className='secondary-text-color montserrat-secondary-font'>Bouncer Guy</p>
                    </div>
                  </div>

                  <div className='flex justify-between w-full gap-[20px] mt-4 lg:mt-0'>
                    <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                      Replies: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>10</p>
                    </h1>
                    <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                      Views: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>226</p>
                    </h1>

                    <div className='text-backgroundTextColor px-4 flex items-center gap-1 bg-articleButtonColor rounded-[100px]'>
                      <Image src={discussion} alt='post 1' width={10} height={10} />
                      <h1 className='text-[10px] font-semibold montserrat-secondary-font'>
                        Article
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* post 2 */}
            <div className='w-full bg-backgroundColor/10 rounded-[20px] flex flex-col lg:flex-row gap-2 p-5 mt-5'>
              <div className='w-full lg:w-[80%]'>
                <div>
                  <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    Mohammad Abbas was unfairly side-lined.
                  </h1>
                  <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                    Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...
                  </p>
                </div>
                <div className='w-full mt-5 flex flex-col lg:flex-row items-center justify-between'>
                  <div className='flex w-full gap-3'>
                    <Image
                      src={user}
                      alt="user"
                      width={63}
                      height={48}
                    />
                    <div className='flex flex-col justify-center'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font'>
                        Today at 3:29 AM
                      </h1>
                      <p className='secondary-text-color montserrat-secondary-font'>Bouncer Guy</p>
                    </div>
                  </div>

                  <div className='flex w-full justify-between gap-[20px] mt-4 lg:mt-0'>
                    <div className='flex gap-2'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                        Replies: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>10</p>
                      </h1>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                        Views: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>226</p>
                      </h1>
                    </div>

                    <div className='text-backgroundTextColor px-4 flex items-center gap-1 bg-discussionButtonColor rounded-[100px]'>
                      <Image src={discussion} alt='post 1' width={10} height={10} />
                      <h1 className='text-[10px] font-semibold montserrat-secondary-font'>
                        Discussion
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full lg:w-auto mt-4 lg:mt-0'>
                <Image
                  src={postvideo}
                  alt="post"
                  height={160}
                  width={200}
                  className="lg:w-[200px] w-full rounded-[15px] object-cover"
                />
              </div>
            </div>

            {/* article 2 */}
            <div className='w-full flex flex-col lg:flex-row gap-2 p-5 mt-5'>
              <div className='w-full'>
                <div>
                  <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    Cricket has become too commercialized.
                  </h1>
                </div>
                <div>
                  <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                    Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...
                  </p>
                </div>
                <div className='mt-5 flex flex-col lg:flex-row items-center justify-between'>
                  <div className='flex w-full gap-3'>
                    <Image
                      src={user}
                      alt="user"
                      width={63}
                      height={48}
                    />
                    <div className='flex flex-col justify-center'>
                      <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font'>
                        Today at 3:29 AM
                      </h1>
                      <p className='secondary-text-color montserrat-secondary-font'>Bouncer Guy</p>
                    </div>
                  </div>

                  <div className='flex w-full lg:w-auto justify-between gap-[20px] mt-4 lg:mt-0'>
                    <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                      Replies: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>10</p>
                    </h1>
                    <h1 className='text-[12px] sm:text-[14px] dark:text-backgroundTextColor font-bold primary-text-color montserrat-primary-font flex gap-2'>
                      Views: <p className='register-text-color dark:font-[400] dark:text-registerTextColor dark:font-openSans'>226</p>
                    </h1>

                    <div className='text-backgroundTextColor px-4 flex items-center justify-center gap-1 bg-articleButtonColor rounded-[100px]'>
                      <Image src={discussion} alt='post 1' width={10} height={10} />
                      <h1 className='text-[10px] font-semibold montserrat-secondary-font'>
                        Article
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            {/* question section */}

            <div className='w-full flex-col p-5 mt-5'>
              <div className='w-full flex justify-between items-center '>
                <div className=' sm:w-[30%] md:w-[50%] xl:w-[30%]'>
                  <button
                    className="text-[12px] sm:text-[14px] w-full rounded-[100px] py-4 px-5 sm:py-5 sm:px-8 flex items-center gap-3 bg-questionButtonColor"
                  >
                    <Image
                      src={question}
                      alt='discussion'
                      width={20}
                      height={20}
                    />
                    <span className='text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                      Question for you
                    </span>
                  </button>
                </div>
                <div>
                  <Image
                    src={arrow}
                    alt='arrow'
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className='w-full mt-5 '>
                <div className='flex justify-between'>
                  <div className='w-full md:w-[80%]'>
                    <h1 className='text-[20px] sm:text-[24px] md:text-[20px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      What does 1.5K followers mean?
                    </h1>
                    <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                      3496 answers - last followed Mar 23
                    </p>
                  </div>
                  <div className='mt-2'>
                    <Image
                      src={close}
                      alt='close'
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className='w-full mt-[10px] flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <h1 className='text-[12px] sm:text-[18px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      Answer
                    </h1>
                    <Image
                      src={creat}
                      alt='create'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className='mt-3'>
                    <Image
                      src={dots}
                      alt='dots'
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>

              <div className='w-full mt-5'>
                <div className='flex justify-between '>
                  <div className=' w-full md:w-[80%]'>
                    <h1 className='text-[20px] sm:text-[24px] md:text-[20px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      What do you think of Jimmy Kimmel's feud with Elon Musk?
                    </h1>
                    <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font'>
                      3496 answers - last followed Mar 23
                    </p>
                  </div>
                  <div className='mt-2'>
                    <Image
                      src={close}
                      alt='close'
                      width={20}
                      heigh={20}
                    />
                  </div>
                </div>
                <div className='w-full mt-[10px] flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <h1 className='text-[12px] sm:text-[18px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      Answer
                    </h1>
                    <Image
                      src={creat}
                      alt='create'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className='mt-3'>
                    <Image
                      src={dots}
                      alt='dots'
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>


            {/* poll card */}
            <div className='w-full flex-col p-5 mt-5'>
              {/* Poll button and arrow section */}
              <div className='w-full flex justify-between items-center'>
                <div className=' sm:w-[30%] md:w-[50%]'>
                  <button
                    className="text-[12px] sm:text-[16px] w-full rounded-[100px] py-4 px-6 sm:py-5 sm:px-8 flex items-center gap-3 bg-pollButtonColor"
                  >
                    <Image
                      src={poll}
                      alt='poll'
                      width={20}
                      height={20}
                    />
                    <span className='text-[12px] sm:text-[16px] background-text-color font-semibold montserrat-secondary-font'>
                      Poll for you
                    </span>
                  </button>
                </div>
                <div>
                  <Image
                    src={arrow}
                    alt='arrow'
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Poll question */}
              <div className='w-full mt-5 flex items-center justify-between'>
                <div>
                  <h1 className='text-[20px] sm:text-[22px] md:text-[22px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    Cricket has become too commercialized
                  </h1>
                </div>
                <div className='mt-3'>
                  <Image
                    src={dots}
                    alt='dots'
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Poll answers */}
              <div className="bg-[#3F94051A] border border-green-500 px-4 py-2 rounded-lg mb-2 cursor-pointer flex items-center justify-between mt-[10px]">
                <label className='text-[14px] sm:text-[16px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                  Yes
                </label>
                <input type="radio" name="poll" className="accent-green-500 p-2 cursor-pointer" />
              </div>

              <div className="border bg-[#3F94051A] px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center">
                <label className='text-[14px] sm:text-[16px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                  No
                </label>
                <input type="radio" name="poll" className="accent-green-500 p-2 cursor-pointer" />
              </div>

              {/* Votes and action buttons */}
              <div className="flex justify-between items-center text-[12px] sm:text-[14px] font-bold primary-text-color montserrat-bolder-font mt-4">
                <span>0 Votes - 24h left</span>
                <div className="flex gap-2">
                  <button className="text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font">Show Results</button>
                  <button className='button-background-color rounded-[100px] py-3 px-6 flex items-center gap-3'>
                    <h1 className='text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                      Vote
                    </h1>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default page