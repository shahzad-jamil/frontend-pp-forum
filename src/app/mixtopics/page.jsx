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
import search from '../../../public/green search icon.svg';
import close from "../../../public/icons8_multiply 2.svg"
import creat from "../../../public/icons8_create 2.svg"
import dots from "../../../public/icons8_menu_vertical 1.svg"
import poll from '../../../public/icons8_poll 1.svg';
import filterbar from "../../../public/icons8_index 1.svg"
import checkbox from "../../../public/checkbox.svg"
import uncheckbox from "../../../public/uncheckbox.svg"


import CreateComponent from '../components/CreateComponent';
import { AnimatePresence, motion } from 'framer-motion'


import minimize from "../../../public/icons8_expand_arrow 1.svg"
import maximize from "../../../public/Vector.svg"
import filterMaximize from "../../../public/newArrowExpand.svg"





import { useState, useRef, useEffect } from 'react';

// import create from '../../../public/icons8_create 1.svg';
import article from '../../../public/icons8_regular_document 1.svg';
// import question from '../../../public/icons8_questions 1.svg';
// import poll from '../../../public/icons8_poll 1.svg';
import discussion from '../../../public/discussion.svg';
import Link from 'next/link';
const page = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterPopUp, setFilterPopup] = useState(false);
  const [selected, setSelected] = useState(null);

  const dropdownRef = useRef(null); // Ref to detect outside clicks

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };



  const toggleFilterPopUp = () => {
    setFilterPopup((prev) => !prev);
  };
  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setFilterPopup(false)
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
  const hoverColors = {
    'bg-discussionButtonColor': 'hover:bg-discussionButtonColor/30',
    'bg-articleButtonColor': 'hover:bg-articleButtonColor/30',
    'bg-pollButtonColor': 'hover:bg-pollButtonColor/30',
    'bg-questionButtonColor': 'hover:bg-questionButtonColor/30',
  };


  const Topics = [

    {
      title: "Pace alone won't make you a great bowler.",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
      userImage: user,
      date: "Today at 3:29 AM",
      name: "Bouncer Guy",
      replies: "10",
      views: "226",
      image: postImage,
      type: "discussion",
      buttonImg: discussion,
      pinned: true,

    },

    {
      title: "West Indies series could revive Shan Masood",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
      userImage: user,
      date: "Today at 3:29 AM",
      name: "Bouncer Guy",
      replies: "10",
      views: "226",
      type: "article",
      buttonImg: article,
      pinned: true,
    },

    {
      title: "Mohammad Abbas was unfairly side-lined.",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
      userImage: user,
      date: "Today at 3:29 AM",
      name: "Bouncer Guy",
      replies: "10",
      views: "226",
      image: postvideo,
      type: "discussion",
      buttonImg: discussion,
      pinned: true,
    },

    {
      title: "Cricket has become too commercialized.",
      description: "Ever wanted to relive one of your favourite matches of recent times? Then this forum is for you, find your favourite match...",
      userImage: user,
      date: "Today at 3:29 AM",
      name: "Bouncer Guy",
      replies: "10",
      views: "226",
      type: "article",
      buttonImg: article,
    },

  ]

  // const [isSport, setIsSport] = useState(false);         // Show by default
  // const [isOffTopic, setIsOffTopic] = useState(false);   // Show by default
  // const [isMinimized, setIsMinimized] = useState(false); // Show



  const [isMinimized, setIsMinimized] = useState(false)
  const [isOffTopic, setIsOffTopic] = useState(false)

  const [isPPTeam, setIsPPTeam] = useState(false)
  return (
    <>


      <div>
        <div className='w-[100%] md:w-[85%] mx-auto  flex justify-between items-center '>
          <div
            className=' px-6 w-[100%] md:w-[95%] mx-auto flex flex-col md:flex-row  gap-[10px] md:justify-center items-center mt-[20px] relative'
            ref={dropdownRef} >
            <div className='flex  w-[100%] md:w-[90%] border-searchBorderColor dark:border-searchBorderColor/20 border p-3 md:p-4 mx-auto justify-between items-center rounded-[100px]'>
              <div className='w-[100%] flex gap-1 md:gap-3 items-center '>
                <Image
                  src={search}
                  alt='search'
                  width={20}
                  heigh={20}
                />
                <input type="text" placeholder='Search threads, posts and posters' className='w-[100%] text-[10px] md:text-[14px] p-2 outline-none bg-transparent text-secondaryColor montserrat-secondary-font  ' />
              </div>
              <Image
                src={close}
                alt='close'
                width={20}
                heigh={20}
              />
            </div>


            {/* Create Thread Button */}
            <div className='flex md:w-[100%] xl:w-[40%] justify-end items-center gap-2'>
              <div className='w-[40px] h-[40px] flex items-center justify-center rounded-[100%] bg-chatBubbleColor '>
                <Image
                  src={filterbar}
                  alt='menu'
                  width={25}
                  heigh={25}
                />
              </div>
              <button
                onClick={toggleDropdown}
                className='button-background-color hover:bg-backgroundColor rounded-[100px] md:justify-center py-4 px-4 sm:py-5 sm:px-8 flex md:items-center gap-3'
              >
                <Image src={create} alt='post 1' width={20} height={20} />
                <h1 className=' text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Create Thread
                </h1>
              </button>

              <button
                onClick={toggleFilterPopUp}
                className='bg-primaryColor dark:bg-buttonBackgroundColor hover:bg-primaryColor/90 rounded-[100px] md:justify-center py-4 px-4 sm:py-5 sm:px-8 flex md:items-center gap-3 '
              >
                {/* <Image src={create} alt='post 1' width={20} height={20} /> */}
                <h1 className='text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Filters
                </h1>
              </button>
            </div>
            {filterPopUp && (
              <div
                ref={dropdownRef}
                className="absolute top-full right-0 mt-3 flex flex-col gap-[10px] dark:bg-primaryColor card-background-color p-6 rounded-[20px] shadow-2xl w-[280px] sm:w-[520px] z-50"
              >
                {/* Heading */}
                <div className='w-full flex justify-end'>
                  <Image
                    src={close}
                    alt='close'
                    width={20}
                    heigh={20}
                    className="cursor-pointer"
                    onClick={() => setFilterPopup(false)}
                  />
                </div>
                <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">Show Only</h1>

                {/* Checkbox */}
                <label className="flex items-center gap-2 text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-500 rounded-sm accent-green-600 bg-white dark:bg-black"
                  />
                  Featured threads Only
                </label>



                <label className="flex items-center gap-2 text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-500 rounded-sm accent-green-600 bg-white dark:bg-black"
                  />

                  List threads based on commented
                </label>


                {/* Search Input */}
                <div className="relative my-[2px] w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-popUpInputFieldsBorder bg-transparent  dark:bg-primaryColor outline-none p-3 sm:p-6 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font focus:border-registerTextColor secondary-text-color"
                  />
                </div>

                {/* Started By */}
                <div className="relative my-[2px] w-full">
                  <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font">
                    Started By
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-popUpInputFieldsBorder bg-transparent focus:border-registerTextColor outline-none dark:bg-primaryColor p-3 sm:p-6 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color"
                  />
                </div>


                {/* Last Updated (Dropdown Style Input) */}
                <div className="relative w-full my-[2px]">
                  <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font z-10">
                    Last Updated
                  </label>

                  <div className="relative w-full">
                    <select
                      className="w-full border focus:border-registerTextColor  border-popUpInputFieldsBorder outline-none dark:bg-primaryColor bg-cardBackgroundColor p-3 sm:p-6 pr-12 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color appearance-none cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      <option value="24h">Last 24 Hours</option>
                      <option value="7d">Last 7 Days</option>
                      <option value="30d">Last 30 Days</option>
                    </select>

                    <Image
                      src={filterMaximize}
                      width={20}
                      height={20}
                      alt="icon"
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />
                  </div>
                </div>


                {/* Type of Thread */}
                <div className="relative w-full my-[2px]">
                  <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font z-10">
                    Thread Type:
                  </label>

                  <div className="relative w-full">
                    <select
                      className="w-full border focus:border-registerTextColor border-popUpInputFieldsBorder outline-none dark:bg-primaryColor bg-cardBackgroundColor p-3 sm:p-6 pr-12 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color appearance-none cursor-pointer"
                    >
                      <option value="Any">(Any)</option>
                      <option value="Discussion">Discussion</option>
                      <option value="Article">Article</option>
                      <option value="Poll"> Poll</option>
                      <option value="Question">Question</option>
                    </select>

                    <Image
                      src={filterMaximize}
                      width={20}
                      height={20}
                      alt="icon"
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div className="relative w-full my-[2px]">
                  <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font z-10">
                    Sort By:
                  </label>

                  <div className="relative w-full">
                    <select className="w-full border focus:border-registerTextColor border-popUpInputFieldsBorder dark:bg-primaryColor outline-none p-3 sm:p-6 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color appearance-none bg-cardBackgroundColor cursor-pointer">
                      <option value="last message">Last message</option>
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                      <option value="popular">Most Popular</option>
                    </select>

                    <Image
                      src={filterMaximize}
                      width={20}
                      height={20}
                      alt="icon"
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />
                  </div>
                </div>

                {/* Descending */}
                <div className="relative w-full my-[2px]">
                  <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font z-10">
                    Order
                  </label>

                  <div className="relative w-full">
                    <select className="w-full border focus:border-registerTextColor border-popUpInputFieldsBorder dark:bg-primaryColor outline-none p-3 sm:p-6 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color appearance-none bg-cardBackgroundColor cursor-pointer">
                      <option value="desc">Descending</option>
                      <option value="asc">Ascending</option>
                    </select>

                    <Image
                      src={filterMaximize}
                      width={20}
                      height={20}
                      alt="icon"
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />
                  </div>
                </div>


                {/* Filter Button */}
                <div className='flex justify-end'>
                  <button className=" button-background-color  text-white py-4 px-6 rounded-[100px] font-semibold text-[14px] montserrat-secondary-font">
                    Filter
                  </button>
                </div>
              </div>
            )}



            {/* Dropdown Menu */}
            {showDropdown && (
              <div ref={dropdownRef} className='absolute top-[100%] right-[10%] mt-3 flex flex-col justify-center gap-[10px] dark:bg-primaryColor card-background-color p-4 rounded-[20px] shadow-2xl w-[224px] z-50'>
                {actions.map((action, index) => (
                  <Link href={action.path} key={index}>
                    <button
                      className={`text-[16px] w-full rounded-[100px] py-4 px-4 sm:py-5 sm:px-8 flex items-center gap-3 ${action.color} ${hoverColors[action.color]}`}
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
      </div>
      {/* create button */}
      <div className='w-fulL lg:max-w-[80%] mx-auto h-auto flex lg:flex-col items-center'>

        <div className='w-[100%] p-3 lg:flex-row h-full flex-col  flex gap-[20px]  '>
          {/* md:flex-row */}
          {/* left content */}

          {/* Sports Section */}
          <div className='w-[100%] lg:w-[30%] mx-auto md:mx-0  '>
            {/* w-[30%] */}
            {/* --- Sports --- */}
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isMinimized ? 'bg-cardBackgroundColor dark:bg-homeTabBackgroundColor' : 'bg-registerTextColor hover:bg-backgroundColor'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isMinimized ? 'text-primaryColor dark:text-backgroundTextColor' : 'background-text-color'}`}>
                Sports
              </h1>
              <button onClick={() => setIsMinimized(!isMinimized)}>
                <Image
                  src={isMinimized ? maximize : minimize}

                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isMinimized ? 'text-black h-[22px]' : 'background-text-color'
                    }`}
                />
              </button>
            </div>

            {!isMinimized && (
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
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isOffTopic ? 'bg-cardBackgroundColor dark:bg-homeTabBackgroundColor' : 'bg-registerTextColor hover:bg-backgroundColor'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isOffTopic ? 'text-primaryColor dark:text-backgroundTextColor' : 'background-text-color'}`}>
                Off Topic
              </h1>
              <button onClick={() => setIsOffTopic(!isOffTopic)}>
                <Image
                  src={isOffTopic ? maximize : minimize}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isOffTopic ? 'text-black h-[22px]' : 'background-text-color'
                    }`}
                />
              </button>
            </div>

            {!isOffTopic && (
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
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isPPTeam ? 'bg-cardBackgroundColor dark:bg-homeTabBackgroundColor' : 'bg-registerTextColor hover:bg-backgroundColor'}`}>
              <h1 className={`text-[20px] px-3 montserrat-primary-font font-semibold ${isPPTeam ? 'text-primaryColor dark:text-backgroundTextColor' : 'background-text-color '}`}>
                The PP Team
              </h1>
              <button onClick={() => setIsPPTeam(!isPPTeam)}>
                <Image
                  src={isPPTeam ? maximize : minimize}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isPPTeam ? 'text-black h-[22px]' : 'background-text-color'
                    }`}
                />
              </button>
            </div>

            {/* {!isPPTeam && (
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
            )} */}
          </div>


          {/* right content */}

          <div className=' flex flex-col justify-center w-[100%] lg:w-[70%] m'>
            {/* w-[65%] */}
            {/* post 1 */}
            <Link href="/discussiondetails">

              {Topics.map((items, index) => (
                <div
                  key={index}
                  className={`relative w-full rounded-[20px] flex flex-col lg:flex-row gap-4 p-4 mt-6 mb-10 ${items.pinned
                    ? 'bg-mixTopicBackgroundColor dark:bg-mixTopicDarkBackgroundColor  dark:border-[1px] dark:border-mixTopicsCardsBorder/40'
                    : 'bg-cardBackgroundColor dark:bg-DarkcardBackgroundColor  dark:border-[1px] dark:border-mixTopicsOtherCardsBorder'
                    }`}
                >
                  {/* Left Section */}
                  <div className="flex-1">
                    <h1 className="text-[18px] sm:text-[22px] lg:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor">
                      {items.title}
                    </h1>
                    <p className="text-[12px] sm:text-[14px] mt-1 secondary-text-color montserrat-secondary-font">
                      {items.description}
                    </p>

                    {/* User Info and Stats */}
                    <div className="w-full mt-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                      {/* User Info */}
                      <div className="flex gap-3 items-center">
                        <Image src={items.userImage} alt={items.name} width={48} height={48} className="rounded-full" />
                        <div>
                          <h1 className="text-[12px] sm:text-[14px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font">
                            {items.date}
                          </h1>
                          <p className="text-[12px] secondary-text-color montserrat-secondary-font">{items.name}</p>
                        </div>
                      </div>

                      {/* Replies and Views */}
                      <div className="flex flex-wrap gap-4 items-center justify-between w-full xl:w-auto">
                        <div className="flex gap-3">
                          <h1 className="text-[12px] sm:text-[14px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font">
                            Replies: <span className="register-text-color dark:font-normal dark:text-registerTextColor dark:font-openSans">{items.replies}</span>
                          </h1>
                          <h1 className="text-[12px] sm:text-[14px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font">
                            Views: <span className="register-text-color dark:font-normal dark:text-registerTextColor dark:font-openSans">{items.views}</span>
                          </h1>
                        </div>

                        {/* Discussion Button */}
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-backgroundTextColor 
                         ${items.type === "discussion" ? "bg-discussionButtonColor" : "bg-articleButtonColor"}`}>
                          <Image
                            src={items.type === "discussion" ? discussion : article}
                            alt={items.type}
                            width={10}
                            height={10}
                          />
                          <h1 className="text-[10px] font-semibold montserrat-secondary-font capitalize">
                            {items.type}
                          </h1>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Right Image (preserve space even if image is hidden) */}
                  <div className="w-full lg:w-[200px] flex-shrink-0 mt-4 lg:mt-0">
                    {items.type === 'discussion' ? (
                      <Image
                        src={items.image}
                        alt="post"
                        width={200}
                        height={160}
                        className="w-full h-auto rounded-[15px] object-cover"
                      />
                    ) : (
                      <div className="w-full h-[160px] rounded-[15px] bg-transparent" />
                    )}
                  </div>

                  {items.pinned && (
                    <div className="absolute top-6 right-7">
                      <Image src={pin} alt="Pinned" width={30} height={30} />
                    </div>
                  )}
                </div>
              ))};

            </Link>

            {/* question section */}

            <div className='w-full flex-col p-5 mt-5 bg-cardBackgroundColor dark:bg-DarkcardBackgroundColor dark:border-[1px]
            dark:border-mixTopicsOtherCardsBorder/20 rounded-[20px]'>
              <div className='w-full flex justify-between items-center pb-5 border-b border-searchBorderColor
              dark:border-searchBorderColor/20'>
                <div className=' sm:w-[30%] md:w-[50%] lg:w-[35%] xl:w-[22%]'>
                  <button
                    className="text-[8px] sm:text-[10px] w-full rounded-[100px] py-4 px-5 sm:py-2 sm:px-4 flex items-center gap-3 bg-questionButtonColor"
                  >
                    <Image
                      src={question}
                      alt='discussion'
                      width={12}
                      height={12}
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
                  <div className='w-full md:w-[80%] '>
                    <h1 className='text-[20px] sm:text-[24px] md:text-[20px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      What does 1.5K followers mean?
                    </h1>
                    <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-bolder-font'>
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
                <div className='w-full mt-[10px] flex justify-between pb-5 border-b border-searchBorderColor dark:border-searchBorderColor/20'>
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
                    <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-bolder-font'>
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
            <div className='w-full flex-col p-5 mt-5 bg-cardBackgroundColor dark:bg-DarkcardBackgroundColor dark:border-[1px]
            dark:border-mixTopicsOtherCardsBorder rounded-[20px]'>
              {/* Poll button and arrow section */}
              <div className='w-full flex justify-between items-center pb-5 border-b border-searchBorderColor dark:border-searchBorderColor/20'>
                <div className=' sm:w-[25%] md:w-[40%] lg:w-[30%] xl:w-[16%] 2xl:w-[18%] '>
                  <button
                    className="text-[8px] sm:text-[10px] w-full rounded-[100px] py-4 px-6 sm:py-2 sm:pr-[-3px]  flex items-center gap-2 bg-pollButtonColor"
                  >
                    <Image
                      src={poll}
                      alt='poll'
                      width={12}
                      height={12}
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
              <div
                className={`bg-[#3F94051A] border px-4 py-2 rounded-lg mb-2 cursor-pointer flex items-center justify-between mt-[10px] ${selected === "yes"
                  ? "border-green-500 bg-backgroundColor/20"
                  : "border-none bg-secondaryColor/20"
                  }`}
                onClick={() => setSelected("yes")}
              >
                {/* Text on the left */}
                <label
                  className={`text-[14px] sm:text-[16px] font-bold montserrat-primary-font cursor-pointer ${selected === "yes" ? "text-primaryColor dark:text-backgroundTextColor" : "text-primaryColor dark:text-backgroundTextColor"
                    }`}
                >
                  Yes
                </label>

                {/* Radio button on the right */}
                <input
                  type="radio"
                  name="selectOption"
                  value="yes"
                  checked={selected === "yes"}
                  onChange={() => setSelected("yes")}
                  className="accent-[#3F9405] w-6 h-6  cursor-pointer"
                />
              </div>

              <div
                className={`bg-cardBackgroundColor border px-4 py-2 rounded-lg cursor-pointer flex items-center justify-between ${selected === "no"
                  ? "border-green-500 dark:bg-backgroundColor/20"
                  : "border-none bg-secondaryColor/20"
                  }`}
                onClick={() => setSelected("no")}
              >
                {/* Text on the left */}
                <label
                  className={`text-[14px] sm:text-[16px] font-bold montserrat-primary-font cursor-pointer ${selected === "no" ? "text-primaryColor dark:text-backgroundTextColor" : "text-primaryColor dark:text-backgroundTextColor"
                    }`}
                >
                  No
                </label>

                {/* Radio button on the right */}
                <input
                  type="radio"
                  name="selectOption"
                  value="no"
                  checked={selected === "no"}
                  onChange={() => setSelected("no")}
                  className="accent-[#3F9405] w-6 h-6 cursor-pointer"
                />
              </div>             {/* Votes and action buttons */}
              <div className="flex justify-between items-center text-[12px] sm:text-[14px] font-[600] text-primaryColor font-Montserrat mt-4 dark:text-backgroundTextColor">
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