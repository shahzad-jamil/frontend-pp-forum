"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/logo.svg"
import LoginImage from "../../../public/login.svg"
import Link from 'next/link'
import googleIcon from "../../../public/icons8_google 1.svg"
import facebookIcon from "../../../public/icons8_facebook_circled 1.svg"
import twitterIcon from "../../../public/icons8_X 1.svg"
import eye from "../../../public/icons8_hide 1.svg"
import eyeSlash from "../../../public/viewEye.svg"

const page = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className='py-[20px]  px-[100px]'>
        <Image
          src={Logo}
          alt='logo image'
          height={500}
          width={200}
        />
      </div >
      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%] order-2 md:order-1 mb-[40px]'>
          <div className='w-[80%] h-[100%] mx-auto  flex item-center flex-col  justify-center'>
            <h1 className='text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font '>Login</h1>
            <p className='text-[16px]  secondary-text-color montserrat-secondary-font'>
              Login to access your Pak Passion account
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="email"
                  className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Email
                </label>
                <input type="text" placeholder='Enter Your Email' className='w-full montserrat-secondary-font border-1 border-color secondary-text-color outline-none p-7 rounded-[100px] text-[14px]' />
              </div>
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="password"
                  className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Password
                </label>
                <div className='flex border-color rounded-[100px] pr-[20px]'>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]'
                  />
                  <Image
                    src={passwordVisible ? eyeSlash : eye}
                    alt='toggle visibility'
                    height={18}
                    width={18}
                    className='cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              <div className="flex mt-[20px] items-center justify-between mb-4">
                <label className="flex items-center space-x-2 text-[14px]">
                  <input type="checkbox" className="form-checkbox cursor-pointer montserrat-secondary-font w-6 h-6 accent-blue-500" />
                  <span className='text-[14px] secondary-text-color montserrat-secondary-font'>Remember me</span>
                </label>

                <Link href="/forgotpassword" className="text-[14px] accent-text-color hover:underline montserrat-secondary-font">
                  Forgot password
                </Link>
              </div>
              <div>
                <button className='w-[100%] background-color p-7 rounded-[100px] button-text-color text-[14px] montserrat-secondary-font  cursor-pointer my-[30px]'>
                  Login
                </button>
              </div>
              <div className=' text-center text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                <h1 className='secondary-text-color montserrat-secondary-font'>
                  Don't have an account? <Link href="/register" className='text-[14px] register-text-color font-semibold'>
                    Register now</Link>
                </h1>
              </div>
              <div className='flex gap-3 mt-[30px] items-center montserrat-secondary-font'>
                <div className='w-[100%] line-background-color h-[1px]'>
                </div>
                <p className='w-[60%] lg:my-[10px] secondary-text-color text-[14px] text-center tracking-[2px]'>
                  or continue with
                </p>
                <div className='w-[100%] line-background-color h-[1px]'>
                </div>
              </div>
            </form>

            <div className='w-[100%] flex gap-[30px] mt-[20px]'>
              <div className='flex items-center  w-[100%] border-color cursor-pointer p-4 rounded-[100px] justify-center'>
                <Image
                  src={googleIcon}
                  height={34}
                  width={34}
                />
              </div>
              <div className='flex items-center  w-[100%] border-color p-4 cursor-pointer rounded-[100px] justify-center'>
                <Image
                  src={facebookIcon}
                  height={34}
                  width={34}
                />
              </div>
              <div className='flex items-center border-color w-[100%] p-4 cursor-pointer rounded-[100px] justify-center'>
                <Image
                  src={twitterIcon}
                  height={34}
                  width={34}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 lg:flex items-center justify-center ">
          <Image
            src={LoginImage}
            alt='logo image'
            width={616}
            height={816}
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default page;
