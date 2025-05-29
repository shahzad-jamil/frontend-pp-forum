"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AuthComponent from './AuthComponent'
import Header from '../../layouts/auth/Header'


const MainLogin = () => {


    return (
        <>
            <div className="grid grid-cols-1 lg:gap-8 gap-2 lg:grid-cols-2 flex-grow">

                <div className='lg:order-1 order-2 lg:col-span-1 lg:px-0 md:px-12 sm:px-8 px-4 h-full flex flex-col'>
                    <Header classes="lg:block hidden"/>
                    <div className='2xl:ps-24 lg:ps-12 flex-grow flex flex-col xl:pt-12 sm:pt-6 pb-6'>
                        <AuthComponent />
                    </div>
                </div>



                <div className='lg:col-span-1 lg:order-2 order-1 lg:block hidden'>
                    <div className='lg:w-[50vw] w-full lg:fixed top-0 right-0 lg:h-screen flex items-center justify-center lg:py-24'>
                        <Image src='/loginImage.svg' alt='register' width={616} height={816} className="lg:max-h-[90vh] object-cover object-left-top  rounded-[20px] border-8 border-neutral50" />
                    </div>
                </div>

                <div className='lg:col-span-1 lg:order-2 order-1 block lg:hidden'>
                    <div className='lg:w-[50vw] w-full h-[80vh] lg:fixed relative top-0 right-0 lg:h-screen flex items-center justify-center lg:py-24'>
                        <Image src='/loginImage.svg' alt='register' fill className="lg:max-h-[90vh] object-cover object-top  lg:rounded-[20px] rounded-md" />
                    </div>
                </div>



            </div>
        </>
    )
}

export default MainLogin