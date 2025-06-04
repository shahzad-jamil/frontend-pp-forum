"use client"
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setThemeAs } from '../../store/themeSlice'
import MainHeader from './MainHeader'
import { navlinks } from './MainNavLinks'



const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();



  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // setSpacePopUp(false);

      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const setTheme = (val: string) => {
    dispatch(setThemeAs(val))
  }


  return (
    <div className="relative navbar-background-color p-3 z-50">
      <Image
        src='/Rectangle 100.svg'
        alt="navbar background"
        fill
        priority
        className="object-cover opacity-70 z-0"
      />

      
      <MainHeader />

      {menuOpen && (
        <div className="xl:hidden mt-4 flex items-center flex-col gap-4 z-[1000]">
          {navlinks.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className="background-text-color text-[14px] border-b w-full text-center sport-border-color z-20 pb-6"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-[20px] mt-2 z-20">
            <Image src='/notification-03.svg' alt="notification" height={18} width={18} className="cursor-pointer" />
          </div>

          <div className="navbar-button-background py-3 px-4 gap-[10px] text-[14px] rounded-[100px] flex mt-2 z-20">
            <Image
              src={theme === 'light' ? 'lightmodeactive.svg' : 'lightmodeoff.svg'}
              alt="lightmode-toggle"
              height={20}
              width={18}
              onClick={() => setTheme('light')}
              className="cursor-pointer transition-all duration-200"
            />
            <Image
              src={theme !== 'light' ? '/darkmodeactive.svg' : '/darkmodeoff.svg'}
              alt="darkmode-toggle"
              height={20}
              width={18}
              onClick={() => setTheme('dark')}
              className="cursor-pointer transition-all duration-200"
            />
          </div>

          <div className="relative xl:hidden" ref={profileRef}>
            <Image
              src='/Ellipse 443.svg'
              alt="profile"
              height={42}
              width={42}
              onClick={() => setIsProfile(prev => !prev)}
              className="cursor-pointer"
            />

            {isProfile && (
              <div className=" mt-3 w-[250px] p-5 rounded-[20px] shadow-2xl card-background-color dark:bg-primaryColor z-[100]">
                <div className='flex flex-col gap-4 pb-10 justify-center border-b border-searchBorderColor dark:border-secondaryColor/20'>
                  {[
                    { text: 'My Profile', href: '/', icon: '/icons8_account 1.svg' },
                    { text: 'Settings', href: '/', icon: '/setting.svg' },
                    { text: 'Subscription Plans', href: '/subscriptions', icon: '/icons8_pay_wall 1.svg' },
                    { text: 'Community Guidelines', href: '/communityguidelines', icon: '/icons8_user_manual 1.svg' },
                    // { text: 'Community Guidelines', href: '/', icon: },

                  ].map((link, index) => (
                    <div className='flex gap-3 items-center ' key={index} >
                      <Image src={link.icon} alt="icon" height={18} width={18} className="cursor-pointer" />
                      <Link href={link.href} onClick={() => setIsProfile(false)}>
                        <h1 className='text-secondaryColor text-[14px] sm:text-[16px] font-Montserrat font-[500]'>
                          {link.text}
                        </h1>
                      </Link>

                    </div>
                  ))}
                </div>

                <div className='flex gap-3 py-4 items-center hover:text-registerTextColor'  >
                  <Image src='/icons8_logout 1.svg' alt="icon" height={18} width={18} className="cursor-pointer" />
                  <Link href="/" onClick={() => setIsProfile(false)}>
                    <h1 className='text-secondaryColor text-[14px] sm:text-[16px] font-Montserrat font-[500]'>
                      Logout
                    </h1>
                  </Link>

                </div>
              </div>
            )}
          </div>
        </div>
      )}


    </div>
  );
};

export default Navbar;
