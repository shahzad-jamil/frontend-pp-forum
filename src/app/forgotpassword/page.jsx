import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/logo.svg"
import forgotImage from "../../../public/forgotpassword.svg"
import Link from 'next/link'
import captchaIcon from "../../../public/captcha.svg 1.svg"




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
            <h1 className='text-[40px] font-semibold mb-[10px] primary-text-color '>Forget Password</h1>
            <p className='text-[16px] secondary-text-color'>
              Registered email is required to reset your password.
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="email"
                  className="absolute text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold"
                >
                  Email
                </label>
                <input type="text" placeholder='user@gmail.com' className='w-full border-1 outline-none p-7 rounded-[100px] text-[14px] secondary-text-color' />
              </div>
              <div className="mt-[20px] mb-4">
                <div className='flex justify-between items-center'>
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
                <button className='w-[100%] background-color p-7 rounded-[100px] background-text-color text-[14px]  cursor-pointer my-[30px]'>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2 lg:flex items-center justify-center ">
          <Image
            src={forgotImage}
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

export default page