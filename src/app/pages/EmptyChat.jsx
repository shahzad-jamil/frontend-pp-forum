import React from 'react'
import Image from 'next/image'
import report from "../../../public/report.svg"
import search from "../../../public/search.svg"
import message from "../../../public/message.svg"
import windowpic from "../../../public/windowpic.svg"
import attach from "../../../public/attachment.svg"

const EmptyChat = () => {
  return (
    <>
      <div className='max-w-[82%] my-[50px] mx-auto'>
        <div className='w-[100%]'>
          <h1 className='text-[24px] text-center pb-[10px] md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Direct Messages
          </h1>
          {/* <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
            Anything and everything to do with the great game.
          </p> */}
        </div>

        <div className='w-[100%]  shadow-2xl h-[100%] flex gap-2 rounded-[20px]'>

          <div className=' flex-1 p-4'>
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
              <div className='flex flex-col justify-center h-[568px] items-center'>
                <Image src={message} alt='search icon' width={77.15} height={59.17} className='cursor-pointer' />
                <p className='text-[14px] text-center max-w-[200px] secondary-text-color montserrat-smallweigh-font'>
                  Seems like you didn't add some one
                </p>
              </div>
            </div>
          </div>

          <div className=' pb-[20px] flex-3'>
            <div className='flex p-2 justify-end  h-[61px]'>
              <Image src={report} alt='search icon' width={42} height={42} className='cursor-pointer' />
            </div>
            <div className='flex justify-center chatbox-background-color m-3 flex-col items-center h-[585px]'>
              <Image src={windowpic} alt='empty chat pic' width={320} height={320} className='cursor-pointer' />
              <p className='text-[14px]  secondary-text-color montserrat-smallweigh-font'>
                Start the conversation and break the silence
              </p>

            </div>
            <div className='h-[36px] w-[100%] items-center flex justify-between '>
              <div className='flex gap-2 w-[85%]'>
                <Image src={attach} alt='search icon' width={42} height={42} className='cursor-pointer' />
                <input type="text" placeholder='Type your message here..' className='w-[100%] text-[14px] outline-none secondary-text-color montserrat-smallweigh-font' />
              </div>
              <button className='button-background-color rounded-[10px] justify-center mr-[10px] py-3 md:py-5 px-8 flex items-center gap-3'>

                <h1 className='text-[14px] cursor-pointer background-text-color font-semibold montserrat-secondary-font'>
                  Send Message
                </h1>

              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EmptyChat