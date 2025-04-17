import React, { use, useState } from 'react'
import Image from 'next/image'
import report from "../../../public/report.svg"
import search from "../../../public/search.svg"
import message from "../../../public/message.svg"
import chatpic from "../../../public/chatwindow.svg"
import attach from "../../../public/attachment.svg"
import dp from "../../../public/profilePic.svg"
import pin from "../../../public/pin.svg"
import singletick from "../../../public/singletick.svg"
import doubletick from "../../../public/doubletick.svg"
import OpenChat from './OpenChat'






const WithoutOpenChat = ({ selectedUser, userList }) => {
  const [users, setSelectedUser] = useState()
  const handelSelectedUser = (user) => {
    setSelectedUser(user)
    selectedUser(user)
  }
  return (
    <>
      <div className=' max-w-[90%] xl:max-w-[82%] my-[50px] mx-auto'>
        <div className='w-[100%]'>
          <h1 className='text-[24px] text-center pb-[10px] md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Direct Messages
          </h1>
          {/* <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
          Anything and everything to do with the great game.
        </p> */}
        </div>

        <div className='w-[100%]  shadow-2xl h-[100%] flex gap-2 rounded-[20px]'>

          <div className=' flex p-4 '>
            <div className='flex flex-col gap-2 item-center justify-center'>
              <h1 className='text-[24px]  primary-text-color font-semibold montserrat-primary-font'>
                Messages
              </h1>
              <div className='flex w-[100%] gap-1 item-center chatbox-background-color pl-3 rounded-[10px]'>
                <Image src={search} alt='search icon' width={14} height={14} className='cursor-pointer' />
                <input type="text" placeholder='Search' className='outline-none w-full  p-3' />
              </div>
              <div>
                <div className='text-[11px] secondary-text-color montserrat-smallweigh-font flex items-center gap-1'>
                  <span>Sort by</span>
                  <select className='text-[11px] cursor-pointer message-theme-text-color montserrat-smallweigh-font bg-transparent outline-none'>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="older">Older</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-5 h-[568px] '>
                {
                  userList.map((user, index) => {
                    return <div key={index} onClick={() => handelSelectedUser(user)} className='flex gap-4'>
                      <Image src={user.profileImage} alt='search icon' width={42} height={42} className='cursor-pointer' />
                      <div className='flex justify-between  w-[100%]'>
                        <div className='flex flex-col'>
                          <div className='flex gap-2'>
                            <Image src={user.isPin} alt='search icon' width={12} height={12} />

                            <h1 className='text-[14px]   primary-text-color font-semibold montserrat-primary-font'>
                              {user.name}
                            </h1>
                          </div>
                          <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>
                            {user.message}
                          </p>
                        </div>
                        <div className='flex flex-col '>
                          <p className='text-[12px] secondary-text-color montserrat-smallweigh-font'>
                            {user.time}
                          </p>
                          <Image src={user.status} alt='search icon' width={12} height={12} />

                        </div>

                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>

          {users ?
            <OpenChat selectedUser={users} />
            : <div className=' pb-[20px] flex-1'>
              <div className='flex p-2 justify-end  h-[61px]'>
                <Image src={report} alt='search icon' width={42} height={42} className='cursor-pointer' />
              </div>
              <div className='flex justify-center chatbox-background-color m-3 flex-col items-center h-[585px]'>
                <Image src={chatpic} alt='empty chat pic' width={320} height={320} className='cursor-pointer' />
                <p className='text-[14px]  secondary-text-color text-center montserrat-smallweigh-font max-w-[350px]'>
                  You haven't opened any message yet, please select a message to start conservation.
                </p>

              </div>
              <div className='w-full  flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 rounded-md'>
                <div className='flex items-center gap-2 w-full'>
                  <Image
                    src={attach}
                    alt='attach'
                    width={32}
                    height={32}
                    className='cursor-pointer shrink-0'
                  />
                  <input
                    type='text'
                    placeholder='Type your message here...'
                    className='w-full text-sm outline-none secondary-text-color montserrat-smallweigh-font py-4 px-3 rounded-md'
                  />
                </div>

                <button className='button-background-color w-[15%] h-[40px]  rounded-[10px] py-3 px-5 flex items-center justify-center gap-3'>
                  <h1 className='text-sm cursor-pointer background-text-color font-semibold montserrat-secondary-font'>
                    Send Message
                  </h1>
                </button>
              </div>

            </div>}
        </div>
      </div>

    </>
  )
}

export default WithoutOpenChat