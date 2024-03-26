
import React from 'react'
import axios from 'axios'
import googleLogo from '../../assets/images/icon_Google.svg'


const GoogleAuth = ({ setUserdata }) => {
    ////////////////////////////////////Google Login ////////////////////////

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:3001/login/sucess", { withCredentials: true });
            setUserdata(response.data.user)
            // console.log('response', response.data.user)
        } catch (error) {
            console.log("error", error)
        } 
    }
    // login
    const googleLogin = async () => {
        window.open("http://localhost:3001/auth/google/callback", "_self")
        getUser()
    }
    /////////////////////////////////end module//////////////////////////////////

    return (
        <div className='social-btn'>
            <img src={googleLogo} alt="Google Logo" width={50} height={50} className='bg-white' />
            <p onClick={googleLogin} >Continue with Google</p></div>
    )
}

export default GoogleAuth







