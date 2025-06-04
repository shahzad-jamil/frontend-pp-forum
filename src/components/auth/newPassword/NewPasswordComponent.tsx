"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { PasswordSchema } from "../../../utils/schemas"
import PasswordField from "../../reuseable/PasswordField"
import AuthButton from "../AuthButton"
import FormTitle from "../Heading"

const newPasswordSchema = z.object({
    password: PasswordSchema,
    confirmPassword: z.string().min(1, "Confirm password is required")
}).superRefine((data, ctx) => {
    if (data.password != data.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["confirmPassword"]
        })
    }
})


type newPasswordSchemaType = z.infer<typeof newPasswordSchema>


const NewPasswordComponent = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<newPasswordSchemaType>({
        resolver: zodResolver(newPasswordSchema),
    })

    const onSubmit = (data: newPasswordSchemaType) => {
        console.log("Form Submitted:", data)
    }

    return <>


        <FormTitle title="New Password" subtitle="Create a new and strong password" />


        <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordField
                id="password"
                label="Password"
                placeholder=""
                register={register("password")}
                error={errors.password?.message}
            />
            <PasswordField
                id="confirm-password"
                label="Confirm password"
                placeholder=""
                register={register("confirmPassword")}
                error={errors.confirmPassword?.message}
            />

            <div>
                <AuthButton children={"Confirm new password"} />
            </div>

        </form>
    </>
}


export default NewPasswordComponent