import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/logo.svg"
import verifyImage from "../../../public/otp.svg"
import Link from 'next/link'




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
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold mb-[10px] montserrat-primary-font'>Verify Code</h1>
            <p className='text-[14px] md:text-[16px] secondary-text-color montserrat-secondary-font'>
              Enter the code that send to registered email
            </p>
            <form action="">
              <div className="relative mt-[30px] w-full ">
                <label
                  htmlFor="optcode"
                  className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-white primary-text-color font-semibold montserrat-primary-font"
                >
                  Otp Code
                </label>
                <input type="text" placeholder='312564' className='w-full montserrat-secondary-font secondary-text-color border-color outline-none p-7 rounded-[100px] text-[14px]' />
              </div>
              <div>
                <button className='w-[100%] background-color p-6 md:p-7 rounded-[100px] button-text-color text-[12px] md:text-[14px] font-openSans font-[600] cursor-pointer my-[30px]'>
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col lg:flex-row items-center justify-center overflow-y-hidden  lg:fixed right-[6%] lg:top-[7%] xl:top-[12%] ">
          <Image
            src={verifyImage}
            alt='verify image'
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