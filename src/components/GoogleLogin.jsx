import React, { useContext } from 'react';
import { UserContext } from '../Context/ContextData';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const GoogleLogin = () => {
    const { googleSignin } = useContext(UserContext)
    const navigate = useNavigate()

    const handelGoogleLogin = () => {
        googleSignin()
            .then((res) => {
                toast.success(`${res.user.displayName} Successfully login`)
                navigate('/')
            }).catch((error) => {
                toast.error("Login failed !")

            })
    }

    return (
        <div>
            <button className='btn w-full bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize' onClick={handelGoogleLogin}>Google Login</button>
        </div>
    );
};

export default GoogleLogin;