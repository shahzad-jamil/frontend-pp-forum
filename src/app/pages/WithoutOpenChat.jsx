'use client'
import React, { useState } from 'react'
import Image from 'next/image'
// import report from "../../../public/report.svg"
// import search from "../../../public/search.svg"
// import message from "../../../public/message.svg"
// import chatpic from "../../../public/chatwindow.svg"
// import attach from "../../../public/attachment.svg"
// import send from "../../../public/icons8_paper_plane 1.svg"
import OpenChat from './OpenChat'

const WithoutOpenChat = ({ selectedUser, userList }) => {
  const [reportPopup, setReportPopup] = useState(false)
  const [users, setSelectedUser] = useState(null)
  const [showChat, setShowChat] = useState(false)

  const toggleReportPopUp = () => {
    setReportPopup((prev) => !prev)
  }

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
    <div className='w-[100%] h-[91vh]  overflow-hidden mx-auto  p-2 sm:p-0'>
      <div className='w-full h-full flex flex-col md:flex-row gap-2 rounded-[20px]'>
        {/* Users List */}
        <div className={`flex-col h-full md:p-4 gap-2 md:flex ${showChat ? 'hidden' : 'flex'}`}>
          <div className='flex flex-col gap-2 justify-center'>
            <h1 className='text-[20px] sm:text-[24px] primary-text-color dark:text-backgroundTextColor font-semibold montserrat-primary-font'>
              Messages
            </h1>

            <div className='flex w-full text-secondaryColor gap-1 items-center chatbox-background-color dark:bg-viewmoreButtonColor/10 px-3 rounded-[10px]'>
              <Image src="/search.svg" alt='search icon' width={14} height={14} className='cursor-pointer' />
              <input type="text" placeholder='Search' className='outline-none bg-transparent w-full p-3' />
            </div>

            <div className='text-[11px] secondary-text-color montserrat-smallweigh-font flex items-center gap-1'>
              <span>Sort by</span>
              <select className='text-[11px] cursor-pointer message-theme-text-color montserrat-smallweigh-font bg-transparent outline-none'>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="older">Older</option>
              </select>
            </div>

            <div className='flex flex-col gap-5 h-[78vh] overflow-y-auto p-3 md:pr-1'>
              {userList.map((user, index) => (
                <div key={index} onClick={() => handleSelectedUser(user)} className='flex gap-4 cursor-pointer'>
                  <Image src={user.profileImage} alt='profile' width={42} height={42} />
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                      <div className='flex gap-2'>
                        <Image src={user.isPin} alt='pin' width={12} height={12} />
                        <h1 className='text-[14px] primary-text-color dark:text-backgroundTextColor font-semibold montserrat-primary-font'>{user.name}</h1>
                      </div>
                      <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>{user.message}</p>
                    </div>
                    <div className='flex flex-col items-end'>
                      <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>{user.time}</p>
                      <Image src={user.status} alt='status' width={12} height={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className={`w-full md:flex-1 h-[92vh]  flex flex-col ${!showChat ? 'hidden md:flex' : ''}`}>
          {users ? (
            <>
              {/* Back Button */}


              <OpenChat selectedUser={users} onClose={handleBackToUsers} />

            </>
          ) : (
            <div className='flex flex-col justify-between flex-1 pb-[20px]'>
              <div>
                <div className='flex p-2 justify-end h-[61px]'>
                  <Image src="/report.svg" onClick={toggleReportPopUp} alt='report' width={42} height={42} className='cursor-pointer' />
                </div>
                <div className='flex justify-center  chatbox-background-color h-[78vh] dark:bg-primaryColor flex-col items-center'>
                  <Image src="/chatwindow.svg" alt='empty chat pic' width={320} height={320} />
                  <p className='text-[14px] secondary-text-color text-center montserrat-smallweigh-font max-w-[350px]'>
                    You haven't opened any message yet, please select a message to start conversation.
                  </p>
                </div>
              </div>

              {reportPopup && (
                <div className="fixed top-0 left-0 inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
                  <div className="w-full max-w-[520px] card-background-color dark:bg-primaryColor p-6 rounded-[20px] shadow-2xl flex flex-col gap-[10px]">
                    <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">
                      Report
                    </h1>
                    <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">
                      Why are you reporting this post?
                    </h1>
                    <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color">
                      If someone is in immediate danger, get help before reporting to Forum PakPassion. Don't wait.
                    </p>

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
                      <label key={idx} className="flex items-center gap-3 text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color">
                        <input type="checkbox" className="w-5 h-5 dark:bg-primaryColor accent-green-600" />
                        {label}
                      </label>
                    ))}

                    <div className="relative w-full">
                      <textarea
                        placeholder="Describe your concern (optional)"
                        rows="3"
                        className="w-full border-1 border-color bg-transparent dark:bg-primaryColor outline-none p-4 rounded-[20px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color resize-none"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button className="button-background-color text-backgroundTextColor py-4 px-6 rounded-[100px] font-semibold text-[14px] montserrat-secondary-font">
                        Send Report
                      </button>
                    </div>
                  </div>
                </div>
              )}


              {/* Sticky Chat Input */}
              <div className="w-full dark:bg-homeTabBackgroundColor/5 flex flex-col sm:flex-row items-center gap-3 p-2 rounded-md">
                <div className="w-full flex">
                  <Image src="/attachment.svg" alt="attach" width={40} height={40} className="cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className=" w-full text-[14px] bg-cardBackgroundColor dark:bg-homeTabBackgroundColor rounded-[100px] montserrat-secondary-font secondary-text-color
             dark:text-white outline-none py-4 px-5"
                  /> </div>
                <div className="md:w-full sm:w-[35%] lg:w-[35%] xl:w-[22%] h-full flex items-center justify-end">
                  <button className="button-background-color w-full sm:w-auto h-[40px] rounded-[100px] px-6 py-8 sm:px-8 flex items-center justify-center gap-2">
                    <h1 className="text-[11px] sm:text-[12px] cursor-pointer background-text-color font-semibold montserrat-secondary-font">
                      Send Message
                    </h1>
                    <Image
                      src="/icons8_paper_plane 1.svg"
                      alt="send"
                      width={18}
                      height={18}
                      className="cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WithoutOpenChat
