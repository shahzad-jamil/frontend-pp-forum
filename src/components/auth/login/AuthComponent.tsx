"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "../../reuseable/Inputfield";
import { useForm } from "react-hook-form";
import PasswordField from "../../reuseable/PasswordField";
import CheckboxField from "../../reuseable/CheckBoxfield";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Routes } from "../../../utils/routes";
import FormTitle from "../Heading";
import AuthButton from "../AuthButton";
import FormLink from "../FormLink";
import SocialLoginButtons from "../SocialLogin";
import { toast } from "sonner";
import { messages } from "../../../utils/messages";

const loginSchema = z.object({
    email: z.string({ required_error: "Password is required" }).email("Invalid email"),
    password: z.string({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters"),
    remember: z.boolean()
})

type LoginFormValues = z.infer<typeof loginSchema>

const AuthComponent = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log("Login data:", data)
        logUserIn()
    }


    const logUserIn = () => {
        toast.success(messages.loginSuccess)
        setTimeout(() => { router.push(Routes.base) }, 1000)
    }

    return (

        <>


            <FormTitle
                title="Login"
                subtitle="Login to access your PakPassion account"
            />


            <form onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    id="email"
                    label="Email"
                    placeholder="Enter Your Email"
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

                <div className="flex mt-[20px] items-center justify-between mb-4">
                    <CheckboxField label="Remember me" id="remember" register={register("remember")} />

                    <FormLink href={Routes.forgotPassword}>
                        Forgot password?
                    </FormLink>

                </div>



                <div>
                    <AuthButton children="Login" />
                </div>


                <div className='text-center text-[12px] md:text-[14px] mt-[-20px] tracking-[1px] montserrat-secondary-font'>
                    <h1 className='text-secondaryColor montserrat-secondary-font'>
                        Don't have an account? <Link href={Routes.register} className='text-[12px] md:text-[14px] register-text-color font-semibold'>
                            Register now</Link>
                    </h1>
                </div>

                <div className='flex gap-3 mt-[30px] items-center montserrat-secondary-font whitespace-nowrap'>
                    <div className='flex-1 bg-neutral200 h-[1.5px]' />
                    <p className='text-[12px] md:text-[14px] secondary-text-color text-center tracking-[2px] px-2'>
                        or continue with
                    </p>
                    <div className='flex-1 bg-neutral200 h-[1.5px]' />
                </div>
            </form>

            <SocialLoginButtons />

        </>
    )
}

export default AuthComponent