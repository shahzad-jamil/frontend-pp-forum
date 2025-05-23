
"use client"
import Image from 'next/image'
import React from 'react'
// import Logo from "../../../public/logo.svg"
// import verifyImage from "../../../public/otp.svg"
import Link from 'next/link'
import { useRouter } from 'next/navigation'




const page = () => {
  const router = useRouter()

  const handelNavigate = (e) => {
    e.preventDefault()
    router.push("/newpassword")
  }
  return (
    <>
      <div className='py-[20px]   px-[100px]'>
        <Image
          src='/logo.svg'
          alt='logo image'
          height={500}
          width={200}
        />
      </div >
      <div className="max-w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto item-center">
        <div className='w-[100%]'>
          <div className='w-[100%] md:w-[80%] sm:h-[70vh] mx-auto flex flex-col justify-center'>
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font dark:text-backgroundTextColor'>Verify Code</h1>
            <p className='text-[14px] md:text-[16px] secondary-text-color montserrat-secondary-font'>
              Enter the code that send to registered email
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="optcode"
                  className="absolute text-[12px] md:text-[14px] -top-3 dark:bg-primaryColor dark:text-backgroundTextColor left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Otp Code
                </label>
                <input type="text" placeholder='312564' className='w-full montserrat-secondary-font secondary-text-color dark:bg-primaryColor border-color outline-none p-5 md:p-5 rounded-[100px] text-[14px]' />
              </div>
              <div>
                <button className='w-[100%] bg-backgroundColor text-backgroundTextColor hover:bg-registerTextColor p-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px] font-openSans font-[600] cursor-pointer my-[30px]' onClick={handelNavigate}>
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" flex items-center justify-center mt-6 lg:mt-0 overflow-y-hidden lg:fixed right-0 xl:right-[6%] lg:bottom-[10%] xl:bottom-[8%] xl:top-[8%]">
          <Image src='/otp.svg' alt='register' width={616} height={816} className="object-contain w-[80%] xl:w-[100%]  xl:h-[100%] rounded-[20px]" />
        </div>
      </div>
    </>

  )
}

export default page