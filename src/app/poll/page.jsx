import React from 'react'
import Image from 'next/image'
import bin from "../../../public/icons8_delete 2.svg"
import plus from "../../../public/icons8_Plus_1 1.svg"


const page = () => {
  return (
    <>
      <div className='w-[100%] px-[10px] xl:px-[0px] xl:max-w-[82%] h-[48vh]  xl:h-[37.8vh] mx-auto mt-[1px] my-[20px] '>
        <h1 className='text-[32px] text-center md:text-left md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
          Create A Poll
        </h1>
        <p className='text-[14px] pt-[10px] secondary-text-color montserrat-smallweigh-font'>
          "Ask a question and give people options to choose from."
        </p>

        <div className='w-[100%] flex flex-col gap-2 justify-center'>
          <div className="relative mt-[10px] w-full">
            <label htmlFor="" className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
              Answer
            </label>
            <div className='flex justify-between border-color pr-10 rounded-[100px]'>
              <input type="text" placeholder='Type here..' className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]' />
              <Image src={bin} alt='bin' width={20} height={20} />
            </div>
          </div>
          <div className="relative mt-[10px] w-full">
            <label htmlFor="" className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
              Answer
            </label>
            <div className='flex justify-between border-color pr-10 rounded-[100px]'>
              <input type="text" placeholder='Type here..' className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]' />
              <Image src={bin} alt='bin' width={20} height={20} />
            </div>
          </div>

          <div className="mt-[10px] w-full">

            <div className='flex gap-3 border-color pl-5  rounded-[100px]'>
              <Image src={plus} alt='bin' width={20} height={20} />
              <input type="text" placeholder='Add another answer' className='w-full montserrat-secondary-font secondary-text-color outline-none py-7 rounded-[100px] text-[14px]' />
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-[18px]  md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Duration
          </h1>

          <div className="mt-2">
            <select className="py-4 px-5 text-[16px] rounded-md border border-gray-300 focus:outline-none ">
              <option value="24_hours">24 hours</option>
              <option value="7_hours">7 hours</option>
              <option value="1_day">1 day</option>
              <option value="2_days">2 days</option>
            </select>
          </div>
        </div>


        <div>
          <h1 className='text-[18px]  md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Allow Multiple Answers
          </h1>
          <div className='flex gap-2 flex-col'>
            <label className="flex items-center space-x-2 text-[14px]">
              <input type="checkbox" className="form-checkbox w-6 h-6 cursor-pointer montserrat-secondary-font border-color accent-blue-500" />
              <span className='text-[14px] tracking-wider montserrat-secondary-font secondary-text-color'>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-[14px]">
              <input type="checkbox" className="form-checkbox w-6 h-6 cursor-pointer montserrat-secondary-font border-color accent-blue-500" />
              <span className='text-[14px] tracking-wider montserrat-secondary-font secondary-text-color'>No</span>
            </label>
          </div>
        </div>


      </div>
      <div className='flex justify-center w-[100%] mx-auto px-[10px] xl:px-0 xl:max-w-[82%]  mt-[150px] mb-[10px] lg:justify-end'>
        <button className='button-background-color rounded-[100px] justify-center py-4 md:py-5 px-8 flex items-center gap-3'>
          {/* <Image src={plus} alt='post 1' width={20} height={20} /> */}
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Post Poll
          </h1>
        </button>
      </div></>
  )
}

export default page