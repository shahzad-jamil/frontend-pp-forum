"use client"
import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/logo.svg"
import forgotImage from "../../../public/forgotpassword.svg"
import Link from 'next/link'
import captchaIcon from "../../../public/captcha.svg 1.svg"





const page = () => {
  return (
    <>

      <div className='py-[20px]   px-[100px]'>
        <Image
          src={Logo}
          alt='logo image'
          height={500}
          width={200}
        />
      </div >
      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%] order-2 md:order-1'>
          <div className='w-[100%] md:w-[80%] sm:h-[100vh] mx-auto flex flex-col justify-center'>
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font dark:text-backgroundTextColor '>Forget Password?</h1>
            <p className='text-[14px] md:text-[16px] secondary-text-color montserrat-secondary-font'>
              Registered email is required to reset your password.
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full border-color rounded-[100px] ">
                <label
                  htmlFor="email"
                  className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-white dark:bg-primaryColor dark:text-backgroundTextColor primary-text-color font-semibold montserrat-primary-font"
                >
                  Email
                </label>
                <input type="text" placeholder='user@gmail.com' className='w-full dark:bg-primaryColor montserrat-secondary-font border-1 outline-none p-7 rounded-[100px] text-[14px] secondary-text-color' />
              </div>
              <div className="mt-[20px] mb-4">
                <div className='flex justify-between items-center montserrat-secondary-font'>
                  <label className="flex items-center space-x-2 text-[14px]">
                    <input type="checkbox" className="form-checkbox  w-6 h-6 cursor-pointer secondary-text-color accent-backgroundColor" />
                    <span className='text-[12px] md:text-[14px] secondary-text-color montserrat-secondary-font'>I am human</span>
                  </label>
                  <Image
                    src={captchaIcon}
                    height={40}
                    width={40}
                  />
                </div>
              </div>
              <div>
                <button className='w-[100%] background-color p-6 md:p-7 rounded-[100px] button-text-color text-[12px] md:text-[14px] font-openSans font-[600] cursor-pointer my-[30px]'>
                  Reset
                </button>
              </div>
              <div className='flex justify-center mt-[-20px]'>
                <span className='text-[12px] md:text-[14px] secondary-text-color montserrat-secondary-font'>Need help?</span>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2 dark:bg-primaryColor flex flex-col lg:flex-row items-center justify-center overflow-y-hidden  lg:fixed right-[6%] lg:top-[8%] xl:top-[12%] ">
          <Image
            src={forgotImage}
            alt='logo image'
            width={447}
            height={900}
            className="object-contain"
          />
        </div>
      </div>
    </>

  )
}

export default page