import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='w-full px-[10px] xl:px-0 xl:max-w-[82%] h-[48vh] xl:h-[37.8vh] mx-auto  my-[20px]'>
        <h1 className='text-[32px] text-center md:text-left md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
          Create A Poll
        </h1>
        <p className='text-[14px] p-[20px] my-[10px] secondary-text-color montserrat-smallweigh-font'>
          "Ask a question and give people options to choose from."
        </p>

        <div className='w-full flex flex-col gap-[20px] justify-center'>
          {/* Answer 1 */}
          <div className="relative mt-[10px] w-full">
            <label className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
              Answer
            </label>
            <div className='flex justify-between items-center border-color pr-10 rounded-[100px]'>
              <input
                type="text"
                placeholder='Type here..'
                className='w-full montserrat-secondary-font secondary-text-color outline-none p-5 md:p-5 rounded-[100px] text-[14px]'
              />
              <Image
                src="/icons8_delete 2.svg"
                alt="Delete Icon"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Answer 2 */}
          <div className="relative mt-[10px] w-full">
            <label className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
              Answer
            </label>
            <div className='flex justify-between items-center border-color pr-10 rounded-[100px]'>
              <input
                type="text"
                placeholder='Type here..'
                className='w-full montserrat-secondary-font secondary-text-color outline-none p-5 md:p-5 rounded-[100px] text-[14px]'
              />
              <Image
                src="/icons8_delete 2.svg"
                alt="Delete Icon"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Add another answer */}
          <div className="mt-[10px] w-full">
            <div className='flex gap-3 items-center border-color pl-5 rounded-[100px]'>
              <Image
                src="/icons8_Plus_1 1.svg"
                alt="Plus Icon"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder='Add another answer'
                className='w-full montserrat-secondary-font secondary-text-color outline-none p-5 md:p-5 rounded-[100px] text-[14px]'
              />
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className='my-[20px]'>
          <h1 className='text-[18px] md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Duration
          </h1>
          <div className="mt-2">
            <select className="py-4 px-5 text-[16px] rounded-md border border-gray-300 focus:outline-none">
              <option value="24_hours">24 hours</option>
              <option value="7_hours">7 hours</option>
              <option value="1_day">1 day</option>
              <option value="2_days">2 days</option>
            </select>
          </div>
        </div>

        {/* Allow Multiple Answers */}
        <div className='my-[20px]'>
          <h1 className='text-[18px] md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
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
        <div className='flex justify-center w-full mx-auto mt-[120px] px-[10px] xl:px-0   lg:justify-end'>
          <button className='button-background-color rounded-[100px] justify-center py-4 md:py-5 px-8 flex items-center gap-3'>
            {/* <Image src="/icons8_plus_1 1.svg" alt="Post Icon" width={20} height={20} /> */}
            <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Post Poll
            </h1>
          </button>
        </div>
      </div>

      {/* Submit Button */}

    </>
  )
}

export default page;
