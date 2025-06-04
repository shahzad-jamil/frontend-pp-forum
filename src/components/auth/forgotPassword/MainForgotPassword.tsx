"use client"
import AuthWrapper from "../AuthWrapper"
import ForgotPasswrodComponent from "./ForgotPasswordComponent.tsx"


const MainForgotPassword = () => {
    return (
        <AuthWrapper image={"/forgotpassword.svg"}>

            <ForgotPasswrodComponent />

        </AuthWrapper>
    )
}

export default MainForgotPassword