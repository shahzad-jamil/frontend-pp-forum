import Image from "next/image"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setThemeAs } from "../../store/themeSlice";
import MainNavLinks from "./MainNavLinks";
import Notifications from "./Notifications";






const MainHeader = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch()
    const setTheme = (val: string) => {
        dispatch(setThemeAs(val));

    }

    

    return (
        <div className="flex justify-between xl:justify-around items-center relative z-50">
            <Link href={"/"}>
                <Image
                    src='/PP-Logo 1.svg'
                    alt="logo"
                    height={57.75}
                    width={151}
                    className="cursor-pointer"
                />
            </Link>

            <MainNavLinks />

            <div className="hidden xl:flex items-center gap-[20px]">
                <Notifications />

                <div className="navbar-button-background dark:bg-backgroundTextColor/20 dark:border dark:border-secondaryColor/60 py-3 px-5 gap-[10px] rounded-[100px] flex">
                    <Image
                        src={theme === 'light' ? 'lightmodeactive.svg' : 'lightmodeoff.svg'}
                        alt="lightmode-toggle"
                        height={20}
                        width={26}
                        onClick={() => setTheme('light')}
                        className="cursor-pointer transition-all duration-200"
                    />
                    <Image
                        src={theme !== 'light' ? '/darkmodeactive.svg' : '/darkmodeoff.svg'}
                        alt="darkmode-toggle"
                        height={20}
                        width={26}
                        onClick={() => setTheme('dark')}
                        className="cursor-pointer"
                    />
                </div>

                {/* <div className="relative" ref={profileRef}>
                    <Image
                        src='/Ellipse 443.svg'
                        alt="profile"
                        height={42}
                        width={42}
                        onClick={() => setIsProfile(prev => !prev)}
                        className="cursor-pointer"
                    />

                    {isProfile && (
                        <div className="absolute top-full right-0 mt-3 w-[350px] p-6 rounded-[20px] shadow-2xl card-background-color dark:bg-primaryColor z-[100]">
                            <div className='flex flex-col gap-4 pb-10 justify-center border-b border-searchBorderColor dark:border-secondaryColor/20'>
                                {[
                                    { text: 'My Profile', href: '/', icon: '/icons8_account 1.svg' },
                                    { text: 'Settings', href: '/', icon: '/setting.svg' },
                                    { text: 'Subscription Plans', href: '/subscriptions', icon: '/icons8_pay_wall 1.svg' },
                                    { text: 'Community Guidelines', href: '/communityguidelines', icon: '/icons8_user_manual 1.svg' },
                                    // { text: 'Community Guidelines', href: '/', icon: },

                                ].map((link, index) => (
                                    <div className='flex gap-3 items-center  ' key={index}  >
                                        <Image src={link.icon} alt="icon" height={18} width={18} className="cursor-pointer" />
                                        <Link href={link.href} onClick={() => setIsProfile(false)}>
                                            <h1 className='text-secondaryColor hover:text-registerTextColor text-[14px] sm:text-[16px] font-Montserrat font-[500]'>
                                                {link.text}
                                            </h1>
                                        </Link>

                                    </div>
                                ))}
                            </div>

                            <div className='flex gap-3 py-4 items-center '  >
                                <Image src='/icons8_logout 1.svg' alt="icon" height={18} width={18} className="cursor-pointer hover:fill-registerTextColor" />
                                <Link href="/" onClick={() => setIsProfile(false)}>
                                    <h1 className='text-secondaryColor hover:text-registerTextColor text-[14px] sm:text-[16px] font-Montserrat font-[500]'>
                                        Logout
                                    </h1>
                                </Link>

                            </div>
                        </div>
                    )}
                </div> */}
            </div>
{/* 
            <button className="xl:hidden background-text-color" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button> */}
        </div>
    )
}

export default MainHeader