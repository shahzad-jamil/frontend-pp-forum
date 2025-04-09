import React from 'react'

const ForumStastic = () => {
  return (
    <>
      <div className='w-[100%]'>
        <h1 className='montserrat-primary-font text-[36px] text-center flex-1 font-bold primary-text-color'>
          Forum Statistics
        </h1>
      </div>
      <div className=' flex justify-center  gap-3 py-[30px]'>
        <div className='flex flex-col w-[200px] p-7 rounded-[20px] border-color justify-center items-center '>
          <h1 className='montserrat-primary-font text-[28px] flex-1 font-bold primary-text-color'>
            119,441
          </h1>
          <h1 className='montserrat-primary-font text-[18px] flex-1 font-bold register-text-color'>
            Threads
          </h1>
        </div>
        <div className='flex flex-col w-[200px] p-7 rounded-[20px] border-color justify-center items-center '>
          <h1 className='montserrat-primary-font text-[28px] flex-1 font-bold primary-text-color'>
            6,966,911
          </h1>
          <h1 className='montserrat-primary-font text-[18px] flex-1 font-bold register-text-color'>
            Runs
          </h1>
        </div>
        <div className='flex flex-col w-[200px] p-7 rounded-[20px] border-color justify-center items-center '>
          <h1 className='montserrat-primary-font text-[28px] flex-1 font-bold primary-text-color'>
            62,227
          </h1>
          <h1 className='montserrat-primary-font text-[18px] flex-1 font-bold register-text-color'>
            Members
          </h1>
        </div>
        <div className='flex flex-col w-[200px] p-7 rounded-[20px] border-color justify-center items-center '>
          <h1 className='montserrat-primary-font text-[28px] flex-1 font-bold primary-text-color'>
            jkllis904
          </h1>
          <h1 className='montserrat-primary-font text-[18px] flex-1 font-bold register-text-color'>
            Latest Member
          </h1>
        </div>
      </div>
    </>
  )
}

export default ForumStastic