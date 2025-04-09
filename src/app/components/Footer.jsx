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


import searchIcon from "../../../public/Search Icon.svg"

const Footer = () => {
  const footerlinks = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Spaces",
      path: "/spaces"
    },
    {
      name: "Direct Messages",
      path: "/directmessage"
    },
    {
      name: "Help Center",
      path: "/helpcenter"
    }
  ]


  const pathname = usePathname()

  const hideFooterPages = ['/login', '/register', '/forgotpassword', '/newpassword', '/verifycode']

  if (hideFooterPages.includes(pathname)) {
    return null
  }
  return (
    <>

      <div className='bg-[#141A28] '>

        <div className=' w-[82%] mx-auto  flex flex-col  justify-center '>

          <div className='   relative flex flex-col items-center justify-center '>
            <h1 className='text-[220px]     font-bold text-white text-gradient'>
              NewsLetter
            </h1>


            <button className='bg-green-400  cursor-pointer text-white text-[14px] py-5 px-12 rounded-[100px] absolute top-[50%]'>
              Subscribed To Get Updated
            </button>
          </div>


          <div className='flex w-[100%] my-[30px]  justify-between'>


            <div className='flex gap-[30px]'>
              {
                footerlinks.map((item, index) => {
                  return <Link href={item.path} key={index} className='text-white text-[14px]'> {item.name}</Link>
                })
              }
            </div>

            <div className='flex items-center gap-[20px]'>
              <Image
                src={instagram}
                alt='notification'
                height={26}
                width={26}

                className='cursor-pointer'
              />
              <Image
                src={twitter}
                alt='notification'
                height={26}
                width={26}

                className='cursor-pointer'
              />

              <Image
                src={facebook}
                alt='notification'
                height={26}
                width={26}

                className='cursor-pointer'
              />
              <Image
                src={youtube}
                alt='notification'
                height={26}
                width={26}

                className='cursor-pointer'
              />


            </div>


            <p className='text-[14px] text-white'>
              Forum PakPassion.net™ © copyright 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer