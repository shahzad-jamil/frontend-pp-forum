'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import Logo from "../../../public/logo.svg"
// import registerImage from "../../../public/register.svg"
import Link from 'next/link'
// import googleIcon from "../../../public/icons8_google 1.svg"
// import facebookIcon from "../../../public/icons8_facebook_circled 1.svg"
// import appleIcon from "../../../public//icons8_Apple_Inc 1.svg"

// import captchaIcon from "../../../public/captcha.svg 1.svg"
// import eye from "../../../public/icons8_hide 1.svg"
// import viewEye from "../../../public/viewEye.svg"
import { useRouter } from 'next/navigation'
const page = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }


  const router = useRouter()

  const handleNavigate = (e) => {
    e.preventDefault()
    router.push("/")
  }
  return (
    <>
      <div className='py-[20px]  px-[20px] md:px-[100px]'>
        <Image src='/logo.svg' alt='logo image' height={500} width={200} />
      </div>

      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%]  mb-[40px]'>
          <div className='w-[100%] md:w-[80%] h-[80vh] mx-auto flex flex-col justify-center'>
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font dark:bg-primaryColor dark:text-backgroundTextColor '>Register</h1>
            <p className='text-[14px] md:text-[16px] secondary-text-color montserrat-secondary-font'>
              Create a account to use PakPassion
            </p>
            <form action="">
              <div className="relative mt-[15px] w-full montserrat-font border-color rounded-[100px]">
                <label htmlFor="username" className="absolute text-[12px] dark:bg-primaryColor dark:text-backgroundTextColor md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font">
                  User Name
                </label>
                <input type="text" id="username" placeholder='username' className="w-full montserrat-secondary-font secondary-text-color border-1 outline-none p-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px] dark:bg-primaryColor " />
              </div>
              <div className="relative mt-[30px] w-full border-color rounded-[100px]">
                <label htmlFor="email" className="absolute text-[12px] dark:bg-primaryColor dark:text-backgroundTextColor md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font">
                  Email
                </label>
                <input type="text" placeholder='user@gmail.com' className='w-full montserrat-secondary-font secondary-text-color dark:bg-primaryColor  border-1 outline-none p-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px]' />
              </div>
              <div className="relative mt-[30px] w-full">
                <label htmlFor="password" className="absolute text-[12px] md:text-[14px] dark:bg-primaryColor dark:text-backgroundTextColor -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font">
                  Password
                </label>
                <div className='flex border-color rounded-[100px] pr-[20px] items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    className='w-full montserrat-secondary-font dark:bg-primaryColor  secondary-text-color outline-none p-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px]'
                  />
                  <Image
                    src={showPassword ? '/viewEye.svg' : '/icons8_hide 1.svg'}
                    alt='eye icon'
                    height={18}
                    width={18}
                    className='cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center mt-[20px] gap-[5px] mb-4">
                <label className="flex items-center space-x-2 text-[14px]">
                  <input type="checkbox" className="form-checkbox w-6 h-6 cursor-pointer montserrat-secondary-font border-color accent-backgroundColor" />
                  <span className='text-[12px] md:text-[14px] secondary-text-color montserrat-secondary-font'>“By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.”</span>
                </label>

                <div className='flex justify-between items-center'>
                  <label className="flex items-center space-x-2 text-[14px]">
                    <input type="checkbox" className="form-checkbox w-6 h-6 montserrat-secondary-font cursor-pointer border-color accent-backgroundColor" />
                    <span className='text-[12px] md:text-[14px] secondary-text-color montserrat-secondary-font'>I am human</span>
                  </label>
                  <Image src='/captcha.svg 1.svg' height={40} width={40} />
                </div>
              </div>
              <div>
                <button onClick={handleNavigate} className='w-[100%] bg-backgroundColor text-backgroundTextColor hover:bg-registerTextColor p-5 md:p-5 rounded-[100px]  text-[12px] md:text-[14px] font-openSans
                font-[600] cursor-pointer my-[30px]'>
                  Register
                </button>
              </div>
              <div className='text-center text-[12px] md:text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                <h1 className='secondary-text-color montserrat-secondary-font'>
                  Already have an account?
                  <Link href="/login" className='text-[12px] md:text-[14px] register-text-color font-semibold'>
                    Login
                  </Link>
                </h1>
              </div>
              <div className='flex gap-3 mt-[15px] items-center montserrat-secondary-font whitespace-nowrap'>
                <div className='flex-1 line-background-color h-[1px]' />
                <p className='text-[12px] md:text-[14px] secondary-text-color text-center tracking-[2px] px-2'>
                  or continue with
                </p>
                <div className='flex-1 line-background-color h-[1px]' />
              </div>
            </form>







            <div className='w-[100%] flex gap-[30px] mt-[10px]'>
              <div className='flex items-center border-color dark:hover:bg-secondaryColor/30 w-[100%] hover:bg-primaryColor/20 cursor-pointer p-3 rounded-[100px] justify-center'>
                <Image src='/icons8_google 1.svg' height={34} width={34} />
              </div>
              <div className='flex items-center border-color w-[100%] dark:hover:bg-secondaryColor/30 hover:bg-primaryColor/20 p-3 cursor-pointer rounded-[100px] justify-center'>
                <Image src='/icons8_facebook_circled 1.svg' height={34} width={34} />
              </div>
              <div className='flex items-center border-color w-[100%] dark:hover:bg-secondaryColor/30 hover:bg-primaryColor/20 p-3 cursor-pointer rounded-[100px] justify-center'>
                <Image src='/icons8_Apple_Inc 1.svg' height={34} width={34} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-6 lg:mt-0 overflow-y-hidden lg:fixed right-0 xl:right-[6%] lg:bottom-[10%] xl:bottom-[8%] xl:top-[8%]">
          <Image src='/register.svg' alt='register' width={616} height={816} className="object-contain w-[80%] xl:w-[100%]  xl:h-[100%] rounded-[20px]" />
        </div>
      </div>
    </>
  )
}

export default page
