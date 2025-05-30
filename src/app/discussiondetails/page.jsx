"use client"
import React from 'react'
import Image from 'next/image'
// import post from "../../../public/image 115 (2).svg"
// import flag from "../../../public/icons8_Flag 1.svg"
// import forward from "../../../public/icons8_forward_arrow 1.svg"
// import user from "../../../public/Group 2008.svg"
// import ytvideo from "../../../public/Group 1967.svg"
// import emoji from "../../../public/Frame 328.svg"
// import like from "../../../public/icons8_thumbs_up_1 1.svg"
// import comment from "../../../public/icons8_chat_message_1 1.svg"
// import share from "../../../public/Vector 2.svg"
// import dislike from "../../../public/icons8_thumbs_down.svg"
// import maximize from "../../../public/icons8_expand_arrow 1 (1).svg"
// import darkmaximize from "../../../public/icons8_expand_arrow black.svg"
import { Input } from 'postcss'
import Comments from '../components/Comments'
import { useState, useRef, useEffect } from 'react';
// import maximize from "../../../public/newArrowExpand.svg"
// import minimize from "../../../public/Vector.svg"
// import search from '../../../public/green search icon.svg';
// import close from "../../../public/icons8_multiply 2.svg"
// import discussion from '../../../public/discussion.svg';


const page = () => {


  const [isSport, setIsSport] = useState(false);         // Show by default
  const [isOffTopic, setIsOffTopic] = useState(false);   // Show by default
  const [isMinimized, setIsMinimized] = useState(false); // Show

  return (
    <>

      <div className='w-full md:w-[100%] xl:w-[80%] mx-auto h-auto'>

        <div className='flex mt-[10px] w-[100%] border-searchBorderColor dark:border-searchBorderColor/20 border p-4 mx-auto justify-between items-center rounded-[100px]'>
          <div className='w-[100%] flex gap-3 items-center'>
            <Image
              src='/green search icon.svg'
              alt='search'
              width={18}
              height={18}

            />
            <input type="text" placeholder='Search threads, posts and posters' className='w-[100%] p-2 outline-none bg-transparent text-secondaryColor montserrat-bolder-font  ' />
          </div>
          <Image
            src='/icons8_multiply 2.svg'
            alt='close'
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 p-4 w-full">

          {/* left content */}

          <div className='w-[100%] sm:h-[20%] md:w-[100%] lg:w-[50%] xl:w-[30%]  mx-auto md:mx-0 '>
            {/* w-[30%] */}
            {/* --- Sports --- */}
            <div className="w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] bg-cardBackgroundColor dark:bg-homeTabBackgroundColor">
              <h1 className="text-[20px] px-3 primary-text-color montserrat-bolder-font text-primaryColor dark:text-backgroundTextColor">
                Sports
              </h1>
              <button onClick={() => setIsSport(!isSport)}>
                <Image
                  src={isSport ? '/Vector.svg' : '/newArrowExpand.svg'}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isSport ? 'text-black h-[22px]' : 'text-black'}`}
                />
              </button>
            </div>

            {!isSport && (
              <div className='px-5 mt-2'>
                <ul className="list-none">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-registerTextColor before:rounded-full secondary-text-color montserrat-bolder-font">
                    Cricket
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-registerTextColor before:rounded-full secondary-text-color montserrat-bolder-font">
                    My Cricket
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-registerTextColor before:rounded-full secondary-text-color montserrat-bolder-font">
                    Commentary Threads
                  </li>
                </ul>
              </div>
            )}

            {/* --- Off Topic --- */}
            <div className="w-full flex dark:bg-homeTabBackgroundColor dark:text-backgroundTextColor justify-between items-center p-2 mt-[20px] rounded-[15px] bg-cardBackgroundColor">
              <h1 className="text-[20px] px-3 montserrat-bolder-font  text-primaryColor dark:text-backgroundTextColor">
                Off Topic
              </h1>
              <button onClick={() => setIsOffTopic(!isOffTopic)}>
                <Image
                  src={isOffTopic ? '/Vector.svg' : '/newArrowExpand.svg'}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isOffTopic ? 'text-black h-[22px]' : 'background-text-color'}`}
                />
              </button>
            </div>

            {!isOffTopic && (
              <div className='px-5 mt-2'>
                <ul className="list-none">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-listPollColor before:rounded-full secondary-text-color montserrat-bolder-font">
                    Time Pass And Sports
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-listPollColor before:rounded-full secondary-text-color montserrat-bolder-font">
                    Member Interviews
                  </li>
                </ul>
              </div>
            )}

            {/* --- The PP Team --- */}
            <div className={`w-full flex justify-between items-center p-2 mt-[20px] rounded-[15px] ${isMinimized ? 'bg-cardBackgroundColor dark:bg-homeTabBackgroundColor  ' : 'bg-cardBackgroundColor dark:bg-homeTabBackgroundColor dark:text-backgroundTextColor'}`}>
              <h1 className={`text-[20px] px-3 montserrat-bolder-font font-semibold text-primaryColor dark:text-backgroundTextColor`}>
                The PP Team
              </h1>
              <button onClick={() => setIsMinimized(!isMinimized)}>
                <Image
                  src={isMinimized ? '/Vector.svg' : '/newArrowExpand.svg'}
                  alt="toggle"
                  height={20}
                  width={22}
                  className={`cursor-pointer ${isMinimized ? ' h-[22px]' : ''}`}
                />
              </button>
            </div>
            {/* 
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
            )} */}
          </div>

          <div className='flex flex-col gap-5 justify-center w-full lg:w-[60%] xl:w-[100%] lg:p-4'>
            <div className='bg-discussionDetailCardBackground dark:bg-mixTopicsOtherCardsBorder/5 rounded-[20px] p-5'>
              <div className='w-[100%] '>
                <Image
                  src='/image 115 (2).svg'
                  alt='post'
                  width={742}
                  height={380}
                  className='w-full' />
              </div>
              <div className='flex  items-center justify-between'>
                <h1 className='text-[24px] sm:-[20px] font-bold primary-text-color montserrat-bolder-font dark:text-backgroundTextColor mt-2'>
                  Pace alone won't make you a great bowler.
                </h1>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-backgroundTextColor bg-discussionButtonColor">
                  <Image
                    src='/discussion.svg'
                    alt="discussion"
                    width={10}
                    height={10}
                  />
                  <h1 className="text-[10px] font-semibold montserrat-secondary-font capitalize">
                    Discussion
                  </h1>
                </div>
              </div>
              <div>
                <p className='text-[18px] sm:-[12px] secondary-text-color montserrat-bolder-font'>
                  Monday at 3:55 PM
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between mt-5 p-3 gap-y-3 md:gap-0">
                {/* Left Section */}
                <div className="w-full md:w-[30%] flex justify-between flex-wrap gap-y-2">
                  <h1 className="text-[12px] md:text-[16px] primary-text-color font-openSans font-[700] flex gap-1 items-center dark:text-backgroundTextColor">
                    Replies: <span className="register-text-color font-openSans font-[600] ">10</span>
                  </h1>
                  <h1 className="text-[12px] md:text-[16px] primary-text-color font-openSans font-[700] flex gap-1 items-center  dark:text-backgroundTextColor">
                    Views: <span className="register-text-color font-openSans font-[600]">226</span>
                  </h1>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[21%] md:text-[16px] flex justify-between md:justify-end items-center gap-4">
                  <p className="register-text-color font-openSans font-[600]">New</p>
                  <Image src='/icons8_Flag 1.svg' alt="flag" width={20} height={20}
                    className='dark:bg-white' />
                  <Image src='/icons8_forward_arrow 1.svg' alt="forward" width={20} height={20}
                    className=' dark:bg-white' />
                  <h1 className="text-[12px] md:text-[16px] primary-text-color font-openSans font-[700] 
                dark:text-backgroundTextColor">
                    #1
                  </h1>
                </div>
              </div>


              <div className='w-[100%] bg-mixTopicBackgroundColor/10  p-3 rounded-[15px] mt-5 flex justify-center items-center flex-col sm:flex-col'>
                <div className='w-full flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-4'>
                  {/* Left Section */}
                  <div className='flex flex-col sm:flex-row sm:items-center  gap-4 '>
                    <Image
                      src='/Group 2008.svg'
                      alt="user"
                      width={63}
                      height={48}
                      className='shrink-0'
                    />
                    <div>
                      <h1 className='text-[14px] primary-text-color font-openSans font-[600]  dark:text-backgroundTextColor'>
                        CricketerWarrior
                      </h1>
                      <p className='secondary-text-color font-openSans font-[700]'>Bouncer Guy</p>
                    </div>
                    <div className='sm:ml-4'>
                      {/* <button className='rounded-[100px] spaces-button-color md:py-2 px-6 py-3 flex items-center'> */}
                      <span className=' bg-primaryColor py-3 px-6 md:text-[10px] register-text-color montserrat-primary-font rounded-[100px] '>Moderator Member</span>
                      {/* </button> */}
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className='flex sm:items-center gap-2'>
                    <h1 className='text-[12px] sm:text-[14px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor '>
                      Joined:
                    </h1>
                    <p className='md:text-[10px] xl:text-[12px] sm:text-[14px] secondary-text-color font-openSans font-[700]
                  dark:font-[400] dark:text-registerTextColor dark:font-openSans'>
                      Aug 12, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[12px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5 mt-3'>
                  In our latest exclusive interview, Jonathan Agnew – former England cricketer, BBC Radio’s legendary voice of cricket, and Wisden Cricketer of the Year in 1988 – shares his unfiltered insights on Pakistan cricket, India-Pakistan tensions, and the future of the sport. Fresh from his recent trip to Pakistan, Aggers dives into the highs and lows of cricket diplomacy, team dynamics, and the challenges facing modern formats.</p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Key highlights of the interview:
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Security and Hospitality in Pakistan: Agnew expressed his appreciation for Pakistan’s hospitality and security arrangements. Traveling with his wife, he stated, “We felt completely safe in Pakistan,” countering the longstanding concerns in some quarters about touring the country.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Champions Trophy and Unfair Logistics: He criticized the scheduling of the upcoming ICC Champions Trophy, suggesting that Lahore would have been a “brilliant final venue”, but logistical decisions seemed to favor India, raising concerns about fairness in international cricket.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Pakistan’s Leadership Crisis: According to Agnew, Pakistan cricket appears “rather rudderless,” with instability at the leadership level affecting the team’s performance. He also reflected on Jason Gillespie’s short-lived coaching stint, labeling it a failed experiment due to deeper structural issues.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Babar Azam versus Sachin Tendulkar – A Pressure Comparison: Drawing a comparison between two batting greats, Agnew noted that “Sachin had positive pressure, but with Babar, it’s a bit more hostile.” He emphasized how criticism of Babar Azam often feels more intense and unforgiving, unlike that on Sachin Tendulkar, who received support even in tough times.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  The Decline of 50-Over Cricket: Agnew believes ODI cricket is struggling to stay relevant, stating bluntly, “50-over cricket is in terminal decline.” With the T20 format dominating global cricket, he questioned whether ODIs could survive in their current form.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>

                  An Emotional Experience at Wagah Border: Agnew described his visit to the India-Pakistan Wagah border as “absolutely extraordinary.” He was deeply moved by the patriotic fervor on both sides, making it a highlight of his trip.
                </p>

                <p className='text-[13px] md:text-[16px] flex-col secondary-text-color font-Montserrat font-[700] mb-5'>
                  Watch full interview here:
                </p>
              </div>
              <div className="relative xl:w-[800px] xl:h-[500px]  rounded-[20px] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-[420px] rounded-[20px]"
                ></iframe>
              </div>


              {/* Emoji image */}
              <div className='w-full sm:w-[80%] flex justify-center sm:justify-end mt-2'>
                <Image
                  src='/Frame 328.svg'
                  alt='emoji'
                  width={158}
                  height={30}
                  className='bg-viewmoreButtonColor rounded-[20px]'
                />
              </div>

              {/* Like, Comment, Share section */}
              <div className='w-full sm:w-[90%] flex flex-wrap gap-3 justify-center sm:justify-end mt-2'>
                <div className='flex items-center bg-viewmoreButtonColor py-3 px-6 rounded-full'>
                  <Image src='/icons8_thumbs_up_1 1.svg' alt='like' width={25} height={25} />
                  <h1 className='ml-2 text-[14px] primary-text-color font-openSans font-[600] dark:text-primaryColor'>
                    10k
                  </h1>
                </div>

                <div className='flex items-center bg-viewmoreButtonColor py-3 px-6 rounded-full'>
                  <Image src='/icons8_chat_message_1 1.svg' alt='comment' width={25} height={25} />
                  <h1 className='ml-2 text-[14px] primary-text-color font-openSans font-[600] dark:text-primaryColor'>
                    4k
                  </h1>
                </div>

                <div className='flex items-center bg-viewmoreButtonColor py-3 px-6 rounded-full'>
                  <Image src='/Vector 2.svg' alt='share' width={25} height={25} />
                  <h1 className='ml-2 text-[14px] primary-text-color font-openSans font-[600] dark:text-primaryColor'>
                    956
                  </h1>
                </div>
              </div>

            </div>

            <div className='bg-discussionDetailCardBackground dark:bg-mixTopicsOtherCardsBorder/5  rounded-[20px] p-5'>
              <div>
                <Comments />
              </div>
            </div>

            <div className="my-4 w-full flex justify-between p-4 rounded-[20px] items-center">
              <div className="w-full sm:w-[85%] md:w-[75%] xl:w-[85%] flex items-center justify-between gap-3">
                <div className="flex-shrink-0">
                  <Image src='/Group 2008.svg' alt="user" width={63} height={48} />
                </div>
                <div className="w-full shadow-2xl">
                  <input
                    type="text"
                    placeholder="Share your thoughts..."
                    className="p-4 w-full text-[10px] sm:text-[15px] rounded-[100px] font-openSans font-[600] outline-none bg-viewmoreButtonColor dark:bg-viewmoreButtonColor/10"
                  />
                </div>
              </div>
              <div className='md:w-[10%] flex justify-end'>
                <button className="bg-backgroundColor rounded-[100px] py-3 px-6 sm:px-12 flex items-center gap-3 ml-3">
                  <h1 className="text-[12px] sm:text-[14px] background-text-color font-semibold montserrat-secondary-font">
                    Post
                  </h1>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default page