"use client"
import AuthWrapper from "../AuthWrapper"
import NewPasswordComponent from "./NewPasswordComponent"


const MainNewPassword = () => {
    return (
        <AuthWrapper image={"/new-Password.svg"}>

            <NewPasswordComponent />

        </AuthWrapper>
    )
}

export default MainNewPassword