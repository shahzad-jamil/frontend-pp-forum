"use client"

import Image from "next/image"
import Link from "next/link"
import InputField from "../../reuseable/Inputfield"
import { useForm } from "react-hook-form"
import PasswordField from "../../reuseable/PasswordField"
import CustomCheckbox from "../../reuseable/CheckBoxfield"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Routes, UtilRoutes } from "../../../utils/routes"
import FormTitle from "../Heading"
import { toast } from "sonner"
import { messages } from "../../../utils/messages"
import { useRouter } from "next/navigation"

const forgotSchema = z.object({

    email: z.string().email("Invalid email"),
    humanConfirmation: z.literal(true, {
        errorMap: () => ({ message: "Please confirm you're human." }),
    }),
})
type ForgotSchemaType = z.infer<typeof forgotSchema>


const ForgotPasswrodComponent = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotSchemaType>({
        resolver: zodResolver(forgotSchema),
    })

    const onSubmit = (data: ForgotSchemaType) => {
        console.log("Form Submitted:", data)
        success()
    }

    const success = () => {
        toast.success(messages.otpSent)
        setTimeout(() => { router.push(Routes.verifyCode) }, 1000)
    }

    const handleCaptcha = () => {

    }

    return <>



        <FormTitle
            title="Forgot Password"
            subtitle="Registered email is required to reset your password."
        />


        <form onSubmit={handleSubmit(onSubmit)}>

            <InputField
                id="email"
                label="Email"
                placeholder="user@gmail.com"
                register={register("email")}
                error={errors.email?.message}
            />


            <div className="my-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <CustomCheckbox error={errors.humanConfirmation?.message} label="I am human" id="human-confirmation" register={register("humanConfirmation")} />

                    <button type="button" onClick={handleCaptcha} className="flex items-center justify-center">
                        <Image alt="catcha-image" src='/captcha.svg 1.svg' objectFit="cover" height={50} width={50} />
                    </button>
                </div>
            </div>



            <div>
                <button type="submit" className='w-[100%] bg-primaryGreen transition duration-100 text-backgroundTextColor hover:bg-registerTextColor p-4 rounded-[100px]  text-[12px] md:text-[14px] text-openSans font-[600] cursor-pointer my-[30px]  '>
                    Reset
                </button>
            </div>


            <div className='text-center text-[12px] md:text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                <h1 className='text-secondaryColor dark:text-darkSecondaryColor montserrat-secondary-font'>
                    <Link href={Routes.helpAndSupport} className='text-[12px] md:text-[14px] text-secondaryColor dark:text-darkSecondaryColor font-semibold'>
                        Need help?</Link>
                </h1>
            </div>

        </form>




    </>
}


export default ForgotPasswrodComponent