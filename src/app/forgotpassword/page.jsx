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
          <div className='w-[80%] h-[100vh] mx-auto  flex item-center flex-col  justify-center'>
            <h1 className='text-[40px] font-semibold mb-[10px] primary-text-color montserrat-primary-font '>Forget Password?</h1>
            <p className='text-[16px] secondary-text-color montserrat-secondary-font'>
              Registered email is required to reset your password.
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full border-color rounded-[100px] ">
                <label
                  htmlFor="email"
                  className="absolute text-[14px] -top-3 left-5 montserrat-primary-font px-2 bg-white primary-text-color font-semibold"
                >
                  Email
                </label>
                <input type="text" placeholder='user@gmail.com' className='w-full montserrat-secondary-font border-1 outline-none p-7 rounded-[100px] text-[14px] secondary-text-color' />
              </div>
              <div className="mt-[20px] mb-4">
                <div className='flex justify-between items-center montserrat-secondary-font'>
                  <label className="flex items-center space-x-2 text-[14px]">
                    <input type="checkbox" className="form-checkbox w-6 h-6 cursor-pointer secondary-text-color accent-blue-500" />
                    <span className='text-[14px] tracking-wider secondary-text-color'>I am human</span>
                  </label>
                  <Image
                    src={captchaIcon}
                    height={40}
                    width={40}
                  />
                </div>
              </div>
              <div>
                <button className='w-[100%] background-color p-7 rounded-[100px] montserrat-secondary-font background-text-color text-[14px]  cursor-pointer my-[30px]'>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col lg:flex-row items-center justify-center overflow-y-hidden  lg:fixed right-[6%] ">
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