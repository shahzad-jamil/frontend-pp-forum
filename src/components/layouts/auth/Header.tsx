"use client"
import Image from "next/image"
import Link from "next/link"



const Header = ({classes}: any) => {
    return (
        <div className={`py-[20px] px-[15px] md:px-[60px] ${classes}`}>
            <Link href={"/"}>
                <Image
                    src='/logo.svg'
                    alt='logo image'
                    quality={100}
                    height={500}
                    width={200}
                />
            </Link>
        </div >
    )
}


export default Header