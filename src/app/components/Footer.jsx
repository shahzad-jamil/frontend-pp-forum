"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import notificationImage from "../../../public/notification-03.svg"
import instagram from "../../../public/instagram.svg"
import youtube from "../../../public/youtube.svg"
import facebook from "../../../public/facebook.svg"
import twitter from "../../../public/twitter.svg"

const Footer = () => {
  const footerlinks = [
    { name: "Home", path: "/home" },
    { name: "Spaces", path: "/spaces" },
    { name: "Direct Messages", path: "/directmessage" },
    { name: "Help Center", path: "/helpcenter" }
  ]

  const pathname = usePathname()
  const hideFooterPages = ['/login', '/register', '/forgotpassword', '/newpassword', '/verifycode']
  if (hideFooterPages.includes(pathname)) return null

  return (
    <div className='bg-[#141A28] w-full py-8'>
      <div className='w-[90%] xl:w-[82%] mx-auto flex flex-col items-center'>
        <div className='relative flex flex-col items-center justify-center w-full px-4 text-center'>
          <h1 className='font-bold text-white leading-none text-gradient text-[60px] sm:text-[90px] md:text-[100px] lg:text-[120px] xl:text-[220px]'>
            NewsLetter
          </h1>

          <button className='bg-green-400 cursor-pointer text-white text-[14px] py-4 px-6 sm:px-10 sm:py-5 rounded-full 
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Subscribed To Get Updated
          </button>
        </div>

        <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-6 mt-12'>
          <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8'>
            {footerlinks.map((item, index) => (
              <Link href={item.path} key={index} className='text-white text-[14px]'>
                {item.name}
              </Link>
            ))}
          </div>

          <div className='flex gap-4 mt-6 lg:mt-0'>
            <Image src={instagram} alt='Instagram' height={26} width={26} className='cursor-pointer' />
            <Image src={twitter} alt='Twitter' height={26} width={26} className='cursor-pointer' />
            <Image src={facebook} alt='Facebook' height={26} width={26} className='cursor-pointer' />
            <Image src={youtube} alt='YouTube' height={26} width={26} className='cursor-pointer' />
          </div>

          <p className='text-[14px] text-white text-center mt-6 lg:mt-0'>
            Forum PakPassion.net™ © copyright 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
