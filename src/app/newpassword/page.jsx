'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/logo.svg"
import newPassImage from "../../../public/newpass.svg"
import eye from "../../../public/icons8_hide 1.svg"
import viewEye from "../../../public/viewEye.svg"
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handelNavigate = (e) => {
    e.preventDefault()
    router.push("/")
  }
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
        <div className='w-full'>
          <div className='w-[100%] md:w-[80%]  sm:h-[70vh] mx-auto flex flex-col justify-center'>
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold dark:text-backgroundTextColor mb-[10px] montserrat-primary-font'>New Password</h1>
            <p className='text-[14px] md:text-[16px] secondary-text-color montserrat-secondary-font '>
              Create a new and strong password
            </p>

            <form action="">
              <div className="relative mt-[30px] w-full">
                <label
                  htmlFor="password"
                  className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-white dark:bg-primaryColor dark:text-backgroundTextColor primary-text-color font-semibold montserrat-primary-font"
                >
                  Password
                </label>
                <div className='flex items-center border-color rounded-[100px] pr-[20px]'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='****************'
                    className='w-full montserrat-secondary-font dark:bg-primaryColor  secondary-text-color outline-none p-5 md:p-5 rounded-[100px] text-[14px]'
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
                  className="absolute text-[12px] dark:bg-primaryColor dark:text-backgroundTextColor md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Confirm Password
                </label>
                <div className='flex items-center border-color rounded-[100px] pr-[20px]'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='*****************'
                    className='w-full secondary-text-color dark:bg-primaryColor  montserrat-secondary-font outline-none p-5 md:p-5 rounded-[100px] text-[14px]'
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
                <button className='w-[100%] bg-backgroundColor text-backgroundTextColor hover:bg-registerTextColor p-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px] font-openSans font-[600] cursor-pointer my-[30px]' onClick={handelNavigate}>
                  Confirm new Password
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" flex items-center justify-center mt-6 lg:mt-0 overflow-y-hidden lg:fixed right-0 xl:right-[6%] lg:bottom-[10%] xl:bottom-[8%] xl:top-[8%]">
          <Image src={newPassImage} alt='register' width={616} height={816} className="object-contain w-[80%] xl:w-[100%]  xl:h-[100%] rounded-[20px]" />
        </div>
      </div>
    </>
  )
}

export default Page
