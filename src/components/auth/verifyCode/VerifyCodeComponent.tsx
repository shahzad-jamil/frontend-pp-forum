"use client"
import InputField from "../../reuseable/Inputfield"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import FormTitle from "../Heading"
import { toast } from "sonner"
import { messages } from "../../../utils/messages"
import { useRouter } from "next/navigation"
import { Routes } from "../../../utils/routes"

const verifySchema = z.object({
    otp: z.string().min(1, "OTP is required"),
})
type verifySchemaType = z.infer<typeof verifySchema>


const VerifyCodeComponent = () => {
    const router = useRouter()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<verifySchemaType>({
        resolver: zodResolver(verifySchema),
    })

    const onSubmit = (data: verifySchemaType) => {
        console.log("Form Submitted:", data)
        success()
    }

    const success = () => {
        toast.success(messages.otpVerified)
        setTimeout(() => { router.push(Routes.base) }, 1000)
    }

    return <>



        <FormTitle
            title="Verify Code"
            subtitle="Enter the code that was sent to your registered email"
        />


        <form onSubmit={handleSubmit(onSubmit)}>

            <InputField
                id="OTP Code"
                label="OTP Code"
                placeholder=""
                register={register("otp")}
                error={errors.otp?.message}
            />


            <div>
                <button type="submit" className='w-[100%] bg-primaryGreen transition duration-100 text-backgroundTextColor hover:bg-registerTextColor p-4 rounded-[100px]  text-[12px] md:text-[14px] text-openSans font-[600] cursor-pointer my-[30px]  '>
                    Verify
                </button>
            </div>



        </form>




    </>
}


export default VerifyCodeComponent