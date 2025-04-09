"use client"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from "../../../public/PP-Logo 1.svg"
import lightmode from "../../../public/Vector.svg"
import darkmode from "../../../public/icons8_light_on 2.svg"
import notificationImage from "../../../public/notification-03.svg"
import searchIcon from "../../../public/Search Icon.svg"

const Navbar = () => {
  const pathname = usePathname()

  const hideNavbarPages = ['/login', '/register', '/forgotpassword', '/newpassword', '/verifycode']

  if (hideNavbarPages.includes(pathname)) {
    return null
  }

  const navlinks = [
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

  return (
    <>
      <div className='bg-[#141A28] flex justify-around items-center p-3'>
        <Image
          src={LogoImage}
          alt='logo'
          height={57.75}
          width={151}
          className='cursor-pointer'
        />

        <div className='flex gap-[50px]'>
          {navlinks.map((item, index) => (
            <Link href={item.path} key={index} className='text-white text-[14px]'>
              {item.name}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-[20px]'>
          <Image
            src={searchIcon}
            alt='search'
            height={18}
            width={18}
            className='cursor-pointer'
          />
          <Image
            src={notificationImage}
            alt='notification'
            height={18}
            width={18}
            className='cursor-pointer'
          />
          <div className='bg-white py-3 px-4 gap-[10px] text-[14px] rounded-[100px] flex'>
            <div className='bg-green-400 cursor-pointer rounded-[100%]'>
              <Image
                src={lightmode}
                alt='lightmode'
                height={18}
                width={18}
                className='cursor-pointer'
              />
            </div>
            <Image
              src={darkmode}
              alt='darkmode'
              height={18}
              width={18}
              className='cursor-pointer'
            />
          </div>

          <button className='bg-white py-3 px-8 cursor-pointer text-[14px] rounded-[100px]'>
            Login/Register
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
