'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import report from "../../../public/report.svg"
import search from "../../../public/search.svg"
import message from "../../../public/message.svg"
import chatpic from "../../../public/chatwindow.svg"
import attach from "../../../public/attachment.svg"
import send from "../../../public/icons8_paper_plane 1.svg"
import OpenChat from './OpenChat'

const WithoutOpenChat = ({ selectedUser, userList }) => {
  const [reportPopup, setReportPopup] = useState(false)

  const toggleReportPopUp = () => {
    setReportPopup((prev) => !prev)
  }
  const [users, setSelectedUser] = useState(null)
  const [showChat, setShowChat] = useState(false)

  const handleSelectedUser = (user) => {
    setSelectedUser(user)
    selectedUser(user)
    setShowChat(true)
  }

  const handleBackToUsers = () => {
    setShowChat(false)
    setSelectedUser(null)
  }

  return (
    <div className='max-w-[90%] xl:max-w-[82%] my-[20px] mx-auto'>
      {/* <div className='w-full'>
        <h1 className='text-[20px] sm:text-[24px] dark:text-backgroundTextColor text-center pb-[10px] md:text-[36px] primary-text-color dark:backgroundTextColor font-semibold montserrat-primary-font'>
          Direct Messages
        </h1>
      </div> */}

      {/* Wrapper for layout */}
      <div className='w-full  h-full flex flex-col  md:flex-row gap-2 rounded-[20px]'>

        {/* Users List */}
        <div className={`flex-col  h-[100%]  md:p-4 gap-2 md:flex ${showChat ? 'hidden' : 'flex'}`}>
          <div className='flex flex-col gap-2  justify-center'>
            <h1 className='text-[20px] sm:text-[24px] primary-text-color dark:text-backgroundTextColor font-semibold montserrat-primary-font'>
              Messages
            </h1>
            <div className='flex w-full text-secondaryColor gap-1 items-center chatbox-background-color dark:bg-viewmoreButtonColor/10 px-3 rounded-[10px]'>
              <Image src={search} alt='search icon' width={14} height={14} className='cursor-pointer' />
              <input type="text" placeholder='Search' className='outline-none bg-transparent w-[100%] p-3' />
            </div>

            <div className='text-[11px] secondary-text-color montserrat-smallweigh-font flex items-center gap-1'>
              <span>Sort by</span>
              <select className='text-[11px] cursor-pointer message-theme-text-color montserrat-smallweigh-font bg-transparent outline-none'>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="older">Older</option>
              </select>
            </div>

            <div className='flex flex-col gap-5 overflow-y-auto pr-1'>
              {userList.map((user, index) => (
                <div key={index} onClick={() => handleSelectedUser(user)} className='flex gap-4 cursor-pointer'>
                  <Image src={user.profileImage} alt='profile' width={42} height={42} />
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                      <div className='flex gap-2'>
                        <Image src={user.isPin} alt='pin' width={12} height={12} />
                        <h1 className='text-[14px] primary-text-color dark:text-backgroundTextColor font-semibold montserrat-primary-font'>{user.name}</h1>
                      </div>
                      <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>
                        {user.message}
                      </p>
                    </div>
                    <div className='flex flex-col items-end'>
                      <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>
                        {user.time}
                      </p>
                      <Image src={user.status} alt='status' width={12} height={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className={`w-full md:flex-1 ${!showChat ? 'hidden md:block' : ''}`}>
          {
            users ? (
              <>
                {/* Back button for mobile */}
                <div className='md:hidden p-2'>

                  <button onClick={handleBackToUsers} className='button-background-color  rounded-[10px] py-2 px-5 flex items-center justify-center '>
                    <h1 className='text-[11px] sm:text-[14px] cursor-pointer background-text-color font-semibold montserrat-secondary-font'>
                      Back
                    </h1>
                  </button>
                </div>
                <OpenChat selectedUser={users} />
              </>
            ) : (
              <div className='pb-[20px] flex-1'>
                <div className='flex p-2 justify-end h-[61px]'>
                  <Image src={report} onClick={toggleReportPopUp} alt='report' width={42} height={42} className='cursor-pointer' />
                </div>
                <div className='flex justify-center chatbox-background-color dark:bg-primaryColor m-3 flex-col items-center h-[585px]'>
                  <Image src={chatpic} alt='empty chat pic' width={320} height={320} />
                  <p className='text-[14px] secondary-text-color text-center montserrat-smallweigh-font max-w-[350px]'>
                    You haven't opened any message yet, please select a message to start conversation.
                  </p>
                </div>
                {reportPopup && (
                  <div
                    // ref={dropdownRef}
                    className="absolute top-[30%] right-[10%]  flex flex-col gap-[10px] dark:bg-primaryColor card-background-color p-6 rounded-[20px] shadow-2xl w-[280px] sm:w-[520px] z-50"
                  >
                    {/* Title */}
                    <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">
                      Report
                    </h1>

                    {/* Info Text */}
                    <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">
                      Why are you reporting this post?
                    </h1>
                    <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color">
                      If someone is in immediate danger, get help before reporting to Forum PakPassion. Don't wait.
                    </p>

                    {/* Checkboxes */}
                    {[
                      'Problem involving someone under 18',
                      'Bullying, harassment or abuse',
                      'Suicide or self-harm',
                      'Violent, hateful or disturbing content',
                      'Selling or promoting restricted items',
                      'Adult content',
                      'Scam, fraud or false information',
                      'Intellectual property',
                      "I don't want to see this",
                      'Others'
                    ].map((label, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-3 text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color"
                      >
                        <input type="checkbox" className="w-5 h-5 dark:bg-primaryColor" />
                        {label}
                      </label>
                    ))}

                    {/* Description Textarea */}
                    <div className="relative w-full">
                      <textarea
                        placeholder="Describe your concern (optional)"
                        rows="3"
                        className="w-full border-1 border-color dark:bg-primaryColor outline-none p-4 rounded-[20px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color resize-none"
                      ></textarea>
                    </div>

                    {/* Send Report Button */}
                    <div className="flex justify-end">
                      <button className="button-background-color text-white py-4 px-6 rounded-[100px] font-semibold text-[14px] montserrat-secondary-font">
                        Send Report
                      </button>
                    </div>
                  </div>
                )}
                <div className='w-full dark:bg-viewmoreButtonColor/30 flex flex-row items-stretch md:items-center justify-between gap-3 p-1 rounded-md'>
                  <div className='flex items-center gap-2 w-[100%]'>
                    <Image
                      src={attach}
                      alt='attach'
                      width={32}
                      height={32}
                      className='cursor-pointer shrink-0 fill-red-'
                    />
                    <input
                      type='text'
                      placeholder='Type your message here...'
                      className='w-full text-[12px] outline-none bg-transparent secondary-text-color montserrat-smallweigh-font py-4 px-3 rounded-md'
                    />
                  </div>

                  <button className='button-background-color sm:w-[50%] md:w-[70%] lg:w-[35%] xl:w-[25%] 2xl:w-[22%] h-[40px] rounded-[100px] py-3 px-4 flex items-center justify-center '>
                    <h1 className='text-[11px] sm:text-[14px] cursor-pointer background-text-color font-semibold montserrat-secondary-font'>
                      Send Message
                    </h1>
                    <Image
                      src={send}
                      alt='attach'
                      width={18}
                      height={18}
                      className='cursor-pointer shrink-0'
                    />
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default WithoutOpenChat
