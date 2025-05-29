"use client"

import AuthWrapper from "../AuthWrapper"
import RegisterComponent from "./RegisterComponent"


const MainRegister = () => {
    return (
        <AuthWrapper image={"/register.svg"}>

            <RegisterComponent />

        </AuthWrapper>
    )
}

export default MainRegister