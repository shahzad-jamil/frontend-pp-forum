'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/logo.svg"
import registerImage from "../../../public/register.svg"
import Link from 'next/link'
import googleIcon from "../../../public/icons8_google 1.svg"
import facebookIcon from "../../../public/icons8_facebook_circled 1.svg"
import twitterIcon from "../../../public/icons8_X 1.svg"
import captchaIcon from "../../../public/captcha.svg 1.svg"
import eye from "../../../public/icons8_hide 1.svg"
import viewEye from "../../../public/viewEye.svg"

const page = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <>
      <div className='py-[20px] px-[100px]'>
        <Image src={Logo} alt='logo image' height={500} width={200} />
      </div>

      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%] order-2 md:order-1 mb-[40px]'>
          <div className='w-[80%] h-[100%] mx-auto flex item-center flex-col justify-center'>
            <h1 className='text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font '>Register</h1>
            <p className='text-[16px] montserrat-secondary-font secondary-text-color'>
              Create a account to use Pak Passion
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full montserrat-font">
                <label htmlFor="username" className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color montserrat-primary-font font-semibold">
                  User Name
                </label>
                <input type="text" id="username" placeholder='username' className="w-full montserrat-secondary-font secondary-text-color border-1 outline-none p-7 rounded-[100px] text-[14px]" />
              </div>
              <div className="relative mt-[30px] w-full">
                <label htmlFor="email" className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
                  Email
                </label>
                <input type="text" placeholder='user@gmail.com' className='w-full montserrat-secondary-font secondary-text-color border-1 outline-none p-7 rounded-[100px] text-[14px]' />
              </div>
              <div className="relative mt-[30px] w-full">
                <label htmlFor="password" className="absolute text-[14px] -top-3 left-5 px-2 montserrat-primary-font bg-white primary-text-color font-semibold">
                  Password
                </label>
                <div className='flex border-color rounded-[100px] pr-[20px] items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]'
                  />
                  <Image
                    src={showPassword ? viewEye : eye}
                    alt='eye icon'
                    height={18}
                    width={18}
                    className='cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center mt-[20px] gap-[10px] mb-4">
                <label className="flex items-center space-x-2 text-[14px]">
                  <input type="checkbox" className="form-checkbox w-6 h-6 cursor-pointer montserrat-secondary-font border-color accent-blue-500" />
                  <span className='text-[14px] tracking-wider montserrat-secondary-font secondary-text-color'>I agree to the terms and privacy policy.</span>
                </label>

                <div className='flex justify-between items-center'>
                  <label className="flex items-center space-x-2 text-[14px]">
                    <input type="checkbox" className="form-checkbox w-6 h-6 montserrat-secondary-font cursor-pointer border-color accent-blue-500" />
                    <span className='text-[14px] tracking-wider montserrat-secondary-font secondary-text-color'>I am human</span>
                  </label>
                  <Image src={captchaIcon} height={40} width={40} />
                </div>
              </div>
              <div>
                <button className='w-[100%] background-color p-7 montserrat-secondary-font rounded-[100px] background-text-color text-[14px] cursor-pointer my-[30px]'>
                  Register
                </button>
              </div>
              <div className='text-center text-[14px] mt-[-20px] tracking-[2px]'>
                <h1 className='secondary-text-color montserrat-secondary-font'>
                  Already have an account?
                  <Link href="/login" className='text-[14px] register-text-color montserrat-secondary-font font-semibold ml-1'>
                    Login
                  </Link>
                </h1>
              </div>
              <div className='flex gap-3 lg:mt-[30px] items-center montserrat-secondary-font'>
                <div className='w-[100%] line-background-color h-[1px]'></div>
                <p className='w-[60%] my-[10px] text-[14px] secondary-text-color text-center tracking-[2px]'>
                  or continue with
                </p>
                <div className='w-[100%] line-background-color h-[1px]'></div>
              </div>
            </form>
            <div className='w-[100%] flex gap-[30px] mt-[20px]'>
              <div className='flex items-center border-color w-[100%] cursor-pointer p-4 rounded-[100px] justify-center'>
                <Image src={googleIcon} height={34} width={34} />
              </div>
              <div className='flex items-center border-color w-[100%] p-4 cursor-pointer rounded-[100px] justify-center'>
                <Image src={facebookIcon} height={34} width={34} />
              </div>
              <div className='flex items-center border-color w-[100%] p-4 cursor-pointer rounded-[100px] justify-center'>
                <Image src={twitterIcon} height={34} width={34} />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 lg:flex items-center justify-center">
          <Image src={registerImage} alt='register' width={616} height={816} className="object-contain" />
        </div>
      </div>
    </>
  )
}

export default page
