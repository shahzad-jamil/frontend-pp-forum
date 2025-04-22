"use client"
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoImage from "../../../public/PP-Logo 1.svg"
import lightmode from "../../../public/icons8_light_on 1.svg"
import darkmode from "../../../public/icons8_light_on 2.svg"
import notificationImage from "../../../public/notification-03.svg"
import searchIcon from "../../../public/Search Icon.svg"
import navImage from "../../../public/Rectangle 100.svg"
import profileImage from "../../../public/Ellipse 443.svg"


import lightModeActive from "../../../public/lightmodeactive.svg"
import lightModeOff from "../../../public/lightmodeoff.svg"
import darkModeActive from "../../../public/darkmodeactive.svg"
import darkModeOff from "../../../public/darkmodeoff.svg"

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light'); // ✅ now always called

  const hideNavbarPages = ['/login', '/register', '/forgotpassword', '/newpassword', '/verifycode']

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const navlinks = [
    {
      name: "Home",
      path: "/"
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
  // ✅ Only return null after all hooks have been called
  if (hideNavbarPages.includes(pathname)) {
    return null
  }
  return (
    <>
      <div className='relative navbar-background-color p-3 overflow-hidden'>
        <Image
          src={navImage}
          alt='navbar background'
          fill
          priority
          className='object-cover  opacity-70'
        />
        <div className='flex justify-between xl:justify-around items-center'>
          <Image
            src={LogoImage}
            alt='logo'
            height={57.75}
            width={151}
            className='cursor-pointer z-50'
          />
          <div className=' z-50 hidden xl:flex gap-[50px]'>
            {navlinks.map((item, index) => (
              <Link href={item.path} key={index} className='background-text-color  text-[14px]'>
                {item.name}
              </Link>
            ))}
          </div>
          <div className=' z-50 hidden xl:flex items-center gap-[20px]'>
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
            <div className='navbar-button-background dark:bg-backgroundTextColor/20 dark:border dark:border-secondaryColor/60 py-3 px-5 gap-[10px] rounded-[100px] flex'>
              <Image
                src={theme === 'light' ? lightModeActive : lightModeOff}
                alt='lightmode-toggle'
                height={20}
                width={26}
                className='cursor-pointer transition-all duration-200'
                onClick={() => setTheme('light')}
              />

              <Image
                src={theme === 'dark' ? darkModeActive : darkModeOff}
                alt='darkmode-toggle'
                height={20}
                width={26}
                className='cursor-pointer transition-all duration-200'
                onClick={() => setTheme('dark')}
              />
            </div>



            <Link href="/profile">
              {/* <button className='navbar-button-background py-3 px-8 cursor-pointer text-[14px] rounded-[100px]'>
                Login/Register
              </button> */}

              <Image src={profileImage}
                alt="profileImage"
                height={42}
                width={42} />
            </Link>
          </div>


          <button className='xl:hidden z-50 background-text-color' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>


        {menuOpen && (
          <div className='xl:hidden z-50 mt-4 flex items-center flex-col gap-4'>
            {navlinks.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className='background-text-color text-[14px] z-50 border-b w-[100%] text-center sport-border-color pb-6'
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className='flex items-center z-50 gap-[20px] mt-2'>
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
            </div>

            <div className='navbar-button-background z-50 py-3 px-4 gap-[10px] text-[14px] rounded-[100px] flex mt-2'>
              <Image
                src={theme === 'light' ? lightModeActive : lightModeOff}
                alt='lightmode-toggle'
                height={20}
                width={18}
                className='cursor-pointer transition-all duration-200'
                onClick={() => setTheme('light')}
              />

              <Image
                src={theme === 'dark' ? darkModeActive : darkModeOff}
                alt='darkmode-toggle'
                height={20}
                width={18}
                className='cursor-pointer transition-all duration-200'
                onClick={() => setTheme('dark')}
              />
            </div>


            {/* <button className='navbar-button-background z-50 py-3 px-8 cursor-pointer text-[14px] rounded-[100px] mt-2'>
              Login/Register
            </button> */}


            <Image src={profileImage}
              alt="profileImage"
              height={42}
              width={42} />
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
