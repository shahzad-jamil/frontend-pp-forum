import React, { use } from 'react'
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
import messgaePic from "../../../public/1 7.svg"



const OpenChat = ({ selectedUser }) => {
  const users = [
    {
      profileImage: dp,
      name: "John Doe",
      isPin: pin,
      message: "How are you doing Today",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Travis Barker",
      isPin: pin,
      message: "Smells like design spirit..",
      time: "16:45",
      status: singletick
    },
    {
      profileImage: dp,
      name: "Kate Rose",
      isPin: pin,
      message: "you: See you tomorrow!",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Robert Parker",
      isPin: pin,
      message: "Awesome!",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Rick Owens",
      isPin: pin,
      message: "Good idea 🤩",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "George Orwell",
      isPin: pin,
      message: "you: Literally 1984 🤨",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Franz Kafka",
      isPin: pin,
      message: "Are you interested in insectitides for..",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Tom Hardy",
      isPin: pin,
      message: "Smells like design spirit..",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Vivienne Westwood",
      isPin: pin,
      message: "This cat is so funny 😸",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Anthony Paul",
      isPin: pin,
      message: "Check out my page 🤩",
      time: "16:45",
      status: doubletick
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick
    },
  ]


  const handelSelectedUser = () => {
    console.log(">>>>>>>>>>>>", selectedUser)
  }

  return (
    <>


      <div className=' pb-[20px] flex-1'>
        <div className='flex justify-between  h-[61px]'>
          <div className='flex gap-4 items-center'>
            <Image src={selectedUser.profileImage} alt='search icon' width={42} height={42} className='cursor-pointer' />
            <div className='flex flex-col'>



              <h1 className='text-[16px]   primary-text-color font-semibold montserrat-primary-font'>
                {selectedUser.name}
              </h1>

              <p className='text-[14px] message-theme-text-color montserrat-smallweigh-font'>
                Online
              </p>
            </div>
          </div>
          <Image src={report} alt='search icon' width={42} height={42} className='cursor-pointer' />
        </div>
        <div className='flex w-[100%]  chatbox-background-color m-3 h-[585px]'>
          <div className=' flex flex-col w-[100%]   gap-4'>
            <div className='flex gap-5 items-start'>
              <Image src={selectedUser.profileImage} alt='search icon' width={24} height={24} className='cursor-pointer' />
              <div className='flex flex-col gap-2'>
                <Image src={messgaePic} alt='search icon' width={240} height={240} className='cursor-pointer' />
                <div className='flex pl-3 gap-0 flex-col justify-center'>
                  <p className='text-[14px] message-theme-text-color montserrat-smallweigh-font'>
                    https://dribbble.com/shots/17742253-ui-kit-designjam
                  </p>
                  <p className='text-[14px] primary-text-color montserrat-primary-font'>
                    {selectedUser.userMessage1}
                  </p>
                  <p className='text-[12px]  secondary-text-color montserrat-smallweigh-font'>
                    15:42
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%]  flex pl-3 gap-0 flex-col items-end pr-4 justify-center'>

              <p className='text-[14px] primary-text-color montserrat-primary-font'>
                Thank you for work, see you!
              </p>
              <p className='text-[12px]  secondary-text-color montserrat-smallweigh-font'>
                15:42
              </p>
            </div>

            <div className='flex gap-2 items-center my-[20px]'>
              <div className='line-background-color h-[1px] w-[100%]'>

              </div>
              <p className='text-[12px] secondary-text-color montserrat-primary-font'>
                Today
              </p>
              <div className='line-background-color h-[1px] w-[100%]'>

              </div>
            </div>
            <div className='flex gap-3 items-start'>
              <Image src={selectedUser.profileImage} alt='search icon' width={24} height={24} className='cursor-pointer' />
              <div className='flex pl-3 gap-0 flex-col justify-center'>

                <p className='text-[14px] primary-text-color montserrat-primary-font'>
                  {selectedUser.userMessage2}

                </p>
                <p className='text-[12px]  secondary-text-color montserrat-smallweigh-font'>
                  15:42
                </p>
              </div>

            </div>

            <div className='flex pl-3 gap-0 flex-col justify-center items-end'>

              <p className='text-[14px] primary-text-color  montserrat-primary-font'>
                Hi, yes, David have found it, ask our concierge 👀
              </p>
              <p className='text-[12px]  secondary-text-color montserrat-smallweigh-font'>
                15:42
              </p>
            </div>
          </div>




          {/* <div className='flex-1 flex flex-col gap-4 items-end'> */}


          {/* </div> */}


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

          <button className='button-background-color w-[15%] h-[40px] rounded-[10px] py-3 px-5 flex items-center justify-center gap-3'>
            <h1 className='text-sm cursor-pointer background-text-color font-semibold montserrat-secondary-font'>
              Send Message
            </h1>
          </button>
        </div>

      </div>

    </>
  )
}

export default OpenChat