import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/logo.svg"
import newPassImage from "../../../public/newpass.svg"
import Link from 'next/link'
import eye from "../../../public/icons8_hide 1.svg"







const page = () => {
  return (
    <>

      <div className='my-[20px]  px-[100px]'>
        <Image
          src={Logo}
          alt='logo image'
          height={500}
          width={200}
        />
      </div >

      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%] order-2 md:order-1'>
          <div className='w-[80%] h-[100%] mx-auto  flex item-center flex-col  justify-center'>
            <h1 className='text-[40px] font-semibold mb-[10px] primary-text-color montserrat-primary-font'>New Password</h1>
            <p className='text-[16px] secondary-text-color montserrat-secondary-font'>
              Create a new and strong password
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="password"
                  className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Password
                </label>
                <div className='flex border-color rounded-[100px] pr-[20px]'>
                  <input type="text" placeholder='****************' className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]' />
                  <Image src={eye} alt='eye' height={18} width={18} className='cursor-pointer' />
                </div>
              </div>

              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="confirmpassword"
                  className="absolute text-[14px] -top-3 left-5 font-semibold px-2 bg-white primary-text-color montserrat-primary-font"
                >
                  Confirm Password
                </label>
                <div className='flex border-color rounded-[100px] pr-[20px]'>
                  <input type="text" placeholder='*****************' className='w-full   secondary-text-color montserrat-secondary-font outline-none p-7 rounded-[100px] text-[14px]' />
                  <Image src={eye} alt='eye' height={18} width={18} className='cursor-pointer' />
                </div>
              </div>

              <div>
                <button className='w-[100%] background-color p-7 rounded-[100px] background-text-color text-[14px]  cursor-pointer montserrat-secondary-font my-[30px]'>
                  Confirm new Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2 lg:flex items-center justify-center ">
          <Image
            src={newPassImage}
            alt='new Pass image'
            width={616}
            height={816}
            className="object-contain"
          />
        </div>
      </div>
    </>

  )
}

export default page