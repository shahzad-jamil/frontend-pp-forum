"use client"

import AuthWrapper from "../AuthWrapper"
import AuthComponent from "./AuthComponent"


const MainLogin = () => {
    return (
        <AuthWrapper image={"/loginImage.svg"}>

            <AuthComponent />

        </AuthWrapper>
    )
}

export default MainLogin