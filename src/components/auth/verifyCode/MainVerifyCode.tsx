"use client"
import AuthWrapper from "../AuthWrapper"
import VerifyCodeComponent from "./VerifyCodeComponent"


const MainVerifyCode = () => {
    return (
        <AuthWrapper image={"/verify-code.svg"}>

            <VerifyCodeComponent />

        </AuthWrapper>
    )
}

export default MainVerifyCode