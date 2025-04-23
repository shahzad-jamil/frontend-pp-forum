"use client"
import React from 'react'
import Image from 'next/image'
import post from "../../../public/image 115 (2).svg"
import flag from "../../../public/icons8_Flag 1.svg"
import forward from "../../../public/icons8_forward_arrow 1.svg"
import user from "../../../public/Group 2008.svg"
import ytvideo from "../../../public/Group 1967.svg"
import emoji from "../../../public/Frame 328.svg"
import like from "../../../public/icons8_thumbs_up_1 1.svg"
import comment from "../../../public/icons8_chat_message_1 1.svg"
import share from "../../../public/Vector 2.svg"
import dislike from "../../../public/icons8_thumbs_down.svg"
// import maximize from "../../../public/icons8_expand_arrow 1 (1).svg"
import darkmaximize from "../../../public/icons8_expand_arrow black.svg"
import { Input } from 'postcss'
import Comments from '../components/Comments'
import { useState, useRef, useEffect } from 'react';
import maximize from "../../../public/icons8_expand_arrow 1.svg"
import minimize from "../../../public/Vector.svg"
import search from '../../../public/search.svg';
import close from "../../../public/icons8_multiply 2.svg"

const page = () => {


  const [isSport, setIsSport] = useState(false);         // Show by default
  const [isOffTopic, setIsOffTopic] = useState(false);   // Show by default
  const [isMinimized, setIsMinimized] = useState(false); // Show

  return (
    <>

      <div className='w-full md:w-[80%] mx-auto h-auto'>

        <div className='flex mt-[10px] w-[100%] border-searchBorderColor/10 border p-4 mx-auto justify-between items-center rounded-[100px]'>
          <div className='w-[100%] flex gap-3 items-center'>
            <Image
              src={search}
              alt='search'
              width={20}
              heigh={20}
            />
            <input type="text" placeholder='Search threads, posts and posters' className='w-[100%] p-2 outline-none bg-transparent text-secondaryColor montserrat-secondary-font  ' />
          </div>
          <Image
            src={close}
            alt='close'
            width={20}
            heigh={20}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 p-4 w-full">

          {/* left content */}

          <div className='w-[100%] sm:h-[20%] md:w-[100%] lg:w-[30%] mx-auto md:mx-0 '>
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

            {!isSport && (
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

            {!isMinimized && (
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

          <div className='flex-col justify-center w-full lg:w-[65%] mt-10'>
            <div>
              <Image
                src={post}
                alt='post'
                width={742}
                height={380} />
            </div>
            <div>
              <h1 className='text-[24px] sm:-[20px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor mt-2'>
                Pace alone won't make you a great bowler.
              </h1>
            </div>
            <div>
              <p className='text-[18px] sm:-[12px] secondary-text-color montserrat-secondary-font'>
                Monday at 3:55 PM
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between mt-5 p-3 gap-y-3 md:gap-0">
              {/* Left Section */}
              <div className="w-full md:w-[30%] flex justify-between flex-wrap gap-y-2">
                <h1 className="text-[12px] md:text-[16px] font-bold primary-text-color montserrat-primary-font flex gap-1 items-center dark:text-backgroundTextColor">
                  Replies: <span className="register-text-color">10</span>
                </h1>
                <h1 className="text-[12px] md:text-[16px] font-bold primary-text-color montserrat-primary-font flex gap-1 items-center  dark:text-backgroundTextColor">
                  Views: <span className="register-text-color">226</span>
                </h1>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-[21%] flex justify-between md:justify-end items-center gap-4">
                <p className="register-text-color font-bold">New</p>
                <Image src={flag} alt="flag" width={20} height={20}
                  className='dark:bg-white' />
                <Image src={forward} alt="forward" width={20} height={20}
                  className=' dark:bg-white' />
                <h1 className="text-[12px] md:text-[16px] font-bold primary-text-color montserrat-primary-font  dark:text-backgroundTextColor">
                  #1
                </h1>
              </div>
            </div>


            <div className='w-[100%] bg-[#3F94051A] p-3 rounded-[15px] mt-5 flex flex-col sm:flex-col'>
              <div className='w-full flex flex-col sm:flex-row sm:justify-between gap-4'>
                {/* Left Section */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                  <Image
                    src={user}
                    alt="user"
                    width={63}
                    height={48}
                    className='shrink-0'
                  />
                  <div>
                    <h1 className='text-[14px] font-bold primary-text-color montserrat-primary-font  dark:text-backgroundTextColor'>
                      CricketerWarrior
                    </h1>
                    <p className='secondary-text-color montserrat-secondary-font'>Bouncer Guy</p>
                  </div>
                  <div className='sm:ml-4'>
                    <button className='rounded-[100px] spaces-button-color md:p-3 px-6 py-3 w-max'>
                      <span className='register-text-color'>Moderator Member</span>
                    </button>
                  </div>
                </div>

                {/* Right Section */}
                <div className='flex sm:items-center gap-2'>
                  <h1 className='text-[12px] sm:text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                    Joined:
                  </h1>
                  <p className='md:text-[10px] xl:text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font dark:font-[400] dark:text-registerTextColor dark:font-openSans'>
                    Aug 12, 2023
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5 mt-3'>
                In our latest exclusive interview, Jonathan Agnew – former England cricketer, BBC Radio’s legendary voice of cricket, and Wisden Cricketer of the Year in 1988 – shares his unfiltered insights on Pakistan cricket, India-Pakistan tensions, and the future of the sport. Fresh from his recent trip to Pakistan, Aggers dives into the highs and lows of cricket diplomacy, team dynamics, and the challenges facing modern formats.</p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Key highlights of the interview:
              </p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Security and Hospitality in Pakistan: Agnew expressed his appreciation for Pakistan’s hospitality and security arrangements. Traveling with his wife, he stated, “We felt completely safe in Pakistan,” countering the longstanding concerns in some quarters about touring the country.
              </p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Champions Trophy and Unfair Logistics: He criticized the scheduling of the upcoming ICC Champions Trophy, suggesting that Lahore would have been a “brilliant final venue”, but logistical decisions seemed to favor India, raising concerns about fairness in international cricket.
              </p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Pakistan’s Leadership Crisis: According to Agnew, Pakistan cricket appears “rather rudderless,” with instability at the leadership level affecting the team’s performance. He also reflected on Jason Gillespie’s short-lived coaching stint, labeling it a failed experiment due to deeper structural issues.
              </p>

              <p className='text-[13px] md:text-[16px]flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Babar Azam versus Sachin Tendulkar – A Pressure Comparison: Drawing a comparison between two batting greats, Agnew noted that “Sachin had positive pressure, but with Babar, it’s a bit more hostile.” He emphasized how criticism of Babar Azam often feels more intense and unforgiving, unlike that on Sachin Tendulkar, who received support even in tough times.
              </p>

              <p className='text-[13px] md:text-[16px]flex-col secondary-text-color montserrat-secondary-font mb-5'>
                The Decline of 50-Over Cricket: Agnew believes ODI cricket is struggling to stay relevant, stating bluntly, “50-over cricket is in terminal decline.” With the T20 format dominating global cricket, he questioned whether ODIs could survive in their current form.
              </p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>

                An Emotional Experience at Wagah Border: Agnew described his visit to the India-Pakistan Wagah border as “absolutely extraordinary.” He was deeply moved by the patriotic fervor on both sides, making it a highlight of his trip.
              </p>

              <p className='text-[13px] md:text-[16px] flex-col secondary-text-color montserrat-secondary-font mb-5'>
                Watch full interview here:
              </p>
            </div>

            <div>
              <Image
                src={ytvideo}
                alt='post'
                width={600}
                height={337} />
            </div>

            {/* Emoji image */}
            <div className='w-full sm:w-[80%] flex justify-center sm:justify-end mt-2'>
              <Image
                src={emoji}
                alt='emoji'
                width={158}
                height={30}
              />
            </div>

            {/* Like, Comment, Share section */}
            <div className='w-full sm:w-[90%] flex flex-wrap gap-3 justify-center sm:justify-end mt-2'>
              <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                <Image src={like} alt='like' width={30} height={30} />
                <h1 className='ml-2 text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                  10k
                </h1>
              </div>

              <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                <Image src={comment} alt='comment' width={30} height={30} />
                <h1 className='ml-2 text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                  4k
                </h1>
              </div>

              <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                <Image src={share} alt='share' width={30} height={30} />
                <h1 className='ml-2 text-[14px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                  956
                </h1>
              </div>
            </div>



            <div>
              <Comments />
            </div>

            <div className='my-20  flex justify-between items-center'>
              <div className=' w-[70%] flex items-center justify-between '>
                <div>
                  <Image
                    src={user}
                    alt="user"
                    width={63}
                    height={48} />
                </div>
                <div className='w-[80%]'>
                  <input
                    type='text'
                    placeholder='share your thoughts...'
                    className='p-4 w-full rounded-[100px] outline-none bg-viewmoreButtonColor dark:bg-viewmoreButtonColor/10' />
                </div>
              </div>

              <button className='bg-backgroundColor rounded-[100px] py-3 px-8 flex items-center gap-3'>
                <h1 className='text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Post
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default page