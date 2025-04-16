'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/logo.svg"
import newPassImage from "../../../public/newpass.svg"
import eye from "../../../public/icons8_hide 1.svg"
import viewEye from "../../../public/viewEye.svg"

const Page = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <>
      <div className='py-[20px] px-[100px]'>
        <Image
          src={Logo}
          alt='logo image'
          height={500}
          width={200}
        />
      </div>

      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto items-center">
        <div className='w-full order-2 md:order-1'>
          <div className='w-[80%] h-[90vh] mx-auto flex flex-col justify-center'>
            <h1 className='text-[40px] font-semibold mb-[10px] primary-text-color montserrat-primary-font'>New Password</h1>
            <p className='text-[16px] secondary-text-color montserrat-secondary-font'>
              Create a new and strong password
            </p>

            <form action="">
              <div className="relative mt-[30px] w-full">
                <label
                  htmlFor="password"
                  className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Password
                </label>
                <div className='flex items-center border-color rounded-[100px] pr-[20px]'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='****************'
                    className='w-full montserrat-secondary-font secondary-text-color outline-none p-7 rounded-[100px] text-[14px]'
                  />
                  <Image
                    src={showPassword ? viewEye : eye}
                    alt='eye'
                    height={18}
                    width={18}
                    className='cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

              <div className="relative mt-[30px] w-full">
                <label
                  htmlFor="confirmpassword"
                  className="absolute text-[14px] -top-3 left-5 font-semibold px-2 bg-white primary-text-color montserrat-primary-font"
                >
                  Confirm Password
                </label>
                <div className='flex items-center border-color rounded-[100px] pr-[20px]'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='*****************'
                    className='w-full secondary-text-color montserrat-secondary-font outline-none p-7 rounded-[100px] text-[14px]'
                  />
                  <Image
                    src={showConfirmPassword ? viewEye : eye}
                    alt='eye'
                    height={18}
                    width={18}
                    className='cursor-pointer'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>

              <div>
                <button className='w-full background-color p-7 rounded-[100px] background-text-color text-[14px] cursor-pointer montserrat-secondary-font my-[30px]'>
                  Confirm new Password
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col lg:flex-row items-center justify-center overflow-y-hidden lg:fixed right-[6%]">
          <Image
            src={newPassImage}
            alt='new Pass image'
            width={447}
            height={900}
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default Page
