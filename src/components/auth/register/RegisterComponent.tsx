"use client"

import Image from "next/image"
import Link from "next/link"
import InputField from "../../reuseable/Inputfield"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import PasswordField from "../../reuseable/PasswordField"
import CustomCheckbox from "../../reuseable/CheckBoxfield"


const RegisterComponent = () => {


    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCaptcha = () => {

    }

    return <>

        <div className=' flex flex-col justify-center lg:text-left text-center flex-grow'>
            <h1 className='text-[30px] md:text-[40px] primary-text-color font-semibold dark:text-backgroundTextColor montserrat-primary-font '>Register</h1>
            <p className='text-[14px] md:text-[16px] text-secondaryColor dark:text-darkSecondaryColor montserrat-smallweigh-font '>
                Create a account to use PakPassion
            </p>


            <form action="">

                <InputField
                    id="userName"
                    label="User Name"
                    placeholder="username"
                    register={register("userName", { required: "Email is required" })}
                    error={errors.email?.message}
                />

                <InputField
                    id="email"
                    label="Email"
                    placeholder="user@gmail.com"
                    register={register("email", { required: "Email is required" })}
                    error={errors.email?.message}
                />

                <PasswordField
                    id="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    register={register("password", { required: "Password is required" })}
                    error={errors.password?.message}
                />


                <div className="my-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <CustomCheckbox label="“By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.”" id="terms" register={register("terms")} />
                    </div>

                    <div className="flex items-center justify-between">
                        <CustomCheckbox label="I am human" id="human-confirmation" register={register("humanConfirmation")} />

                        <button type="button" onClick={handleCaptcha} className="flex items-center justify-center">
                            <Image alt="catcha-image" src='/captcha.svg 1.svg' objectFit="cover" height={50} width={50} />
                        </button>
                    </div>
                </div>



                <div>
                    <button type="submit" className='w-[100%] bg-primaryGreen transition duration-100 text-backgroundTextColor hover:bg-registerTextColor p-4 rounded-[100px]  text-[12px] md:text-[14px] text-openSans font-[600] cursor-pointer my-[30px]  '>
                        Register
                    </button>
                </div>


                <div className='text-center text-[12px] md:text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                    <h1 className='text-secondaryColor dark:text-darkSecondaryColor montserrat-secondary-font'>
                        Already have an account? <Link href="/register" className='text-[12px] md:text-[14px] register-text-color font-semibold'>
                            Login</Link>
                    </h1>
                </div>

                {/* or continue section fixed */}
                <div className='flex gap-3 mt-[30px] items-center montserrat-secondary-font whitespace-nowrap'>
                    <div className='flex-1 bg-neutral200 h-[1.5px]' />
                    <p className='text-[12px] md:text-[14px] text-secondaryColor  dark:text-darkSecondaryColor text-center tracking-[2px] px-2'>
                        or continue with
                    </p>
                    <div className='flex-1 bg-neutral200 h-[1.5px]' />
                </div>
            </form>

            <div className='w-[100%] flex gap-[30px] mt-[20px]'>
                <div className='flex items-center w-[100%] border-color cursor-pointer hover:bg-primaryColor/20 transition duration-100 dark:hover:bg-secondaryColor/30  rounded-[100px] justify-center'>
                    <Image
                        src='/icons8_google 1.svg'
                        height={34}
                        width={34}
                        alt='google'
                    />
                </div>
                <div className='flex items-center w-[100%] border-color  cursor-pointer hover:bg-primaryColor/20 transition duration-100 dark:hover:bg-secondaryColor/30 rounded-[100px] justify-center'>
                    <Image
                        src='/icons8_facebook_circled 1.svg'
                        height={34}
                        width={34}
                        alt='facebook'
                    />
                </div>
                <div className='flex items-center border-color w-[100%] p-3 cursor-pointer hover:bg-primaryColor/20 transition duration-100 dark:hover:bg-secondaryColor/30 rounded-[100px] justify-center'>
                    <Image
                        src='/icons8_Apple_Inc 1.svg'
                        height={34}
                        width={34}
                        alt='apple'

                    />
                </div>
            </div>

            <div className="flex flex-col justify-end flex-grow">
                <footer className="mt-12 text-secondaryColor text-center">Copyright © 2025 Pak Passion, LLC. All rights reserved.</footer>
            </div>
        </div>
    </>
}


export default RegisterComponent