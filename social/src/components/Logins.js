import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { client } from '../client'
import { useNavigate } from 'react-router-dom';
// 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

const Logins = () => {
    const navigate = useNavigate();

    const responseMessage = (response) => {
        console.log(response);
        const yello = jwt_decode(response.credential)
        console.log(yello.picture)
        console.log(yello)
        const { name, aud, picture } = yello;
        localStorage.setItem('user', JSON.stringify(yello))


        const doc = {
            _id: aud,
            _type: 'user',
            userName: name,
            image: picture,

        }
        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', { replace: true })


            })

    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div className='flex justify-start items center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'

                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt="logo" />
                    </div>

                    <div className='shadow-2xl'>
                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} cookiePolicy={'single_host_origin'} >
                            <button
                                type='button'
                                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'


                            >
                                <FcGoogle className='mr-4' /> Sign in with Google


                            </button>


                        </GoogleLogin>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default Logins
