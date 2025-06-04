"use client"

import Image from "next/image"
import Link from "next/link"
import InputField from "../../reuseable/Inputfield"
import { useForm } from "react-hook-form"
import PasswordField from "../../reuseable/PasswordField"
import CustomCheckbox from "../../reuseable/CheckBoxfield"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Routes } from "../../../utils/routes"
import FormTitle from "../Heading"
import AuthButton from "../AuthButton"
import SocialLoginButtons from "../SocialLogin"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { messages } from "../../../utils/messages"

const registerSchema = z.object({
    userName: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    humanConfirmation: z.literal(true, {
        errorMap: () => ({ message: "Please confirm you're human." }),
    }),
    agreeToTerms: z.literal(true, {
        errorMap: () => ({ message: "You must agree to the terms." }),
    }),
})
type RegisterFormValues = z.infer<typeof registerSchema>


const RegisterComponent = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = (data: RegisterFormValues) => {
        console.log("Form Submitted:", data)
        registerUser()
    }

    const registerUser = () => {
        toast.success(messages.registerSuccess)
        setTimeout(() => { router.push(`${Routes.verifyCode}?registered=true`) }, 1000)
    }

    const handleCaptcha = () => {

    }

    return <>



        <FormTitle
            title="Register"
            subtitle="Create a account to use PakPassion"
        />


        <form onSubmit={handleSubmit(onSubmit)}>

            <InputField
                id="userName"
                label="User Name"
                placeholder="username"
                register={register("userName")}
                error={errors.userName?.message}
            />

            <InputField
                id="email"
                label="Email"
                placeholder="user@gmail.com"
                register={register("email")}
                error={errors.email?.message}
            />

            <PasswordField
                id="password"
                label="Password"
                placeholder="Enter Your Password"
                register={register("password")}
                error={errors.password?.message}
            />


            <div className="my-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <CustomCheckbox
                        error={errors.agreeToTerms?.message}
                        label="“By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.”"
                        id="terms"
                        register={register("agreeToTerms")}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <CustomCheckbox error={errors.humanConfirmation?.message} label="I am human" id="human-confirmation" register={register("humanConfirmation")} />

                    <button type="button" onClick={handleCaptcha} className="flex items-center justify-center">
                        <Image alt="catcha-image" src='/captcha.svg 1.svg' objectFit="cover" height={50} width={50} />
                    </button>
                </div>
            </div>




            <AuthButton children={"Register"} />



            <div className='text-center text-[12px] md:text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                <h1 className='text-secondaryColor dark:text-darkSecondaryColor montserrat-secondary-font'>
                    Already have an account? <Link href={Routes.login} className='text-[12px] md:text-[14px] register-text-color font-semibold'>
                        Login</Link>
                </h1>
            </div>

            <div className='flex gap-3 mt-[30px] items-center montserrat-secondary-font whitespace-nowrap'>
                <div className='flex-1 bg-neutral200 h-[1.5px]' />
                <p className='text-[12px] md:text-[14px] text-secondaryColor  dark:text-darkSecondaryColor text-center tracking-[2px] px-2'>
                    or continue with
                </p>
                <div className='flex-1 bg-neutral200 h-[1.5px]' />
            </div>
        </form>

        <SocialLoginButtons />




    </>
}


export default RegisterComponent