import React from 'react';
import { HiClock,  } from "react-icons/hi2";
import { FaCalendarAlt, FaCommentDots, FaMapMarkerAlt, FaPhoneAlt, FaRegCircle } from "react-icons/fa";

const Address = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 px-10 py-20 bg-black text-white rounded mb-10'>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className='text-4xl'> <FaCalendarAlt /></span>
                        <span className="absolute text-red-500 right-0 -bottom-0.5 text-xl"> <HiClock /></span>
                    </div>
                    <div>
                        <p className='font-bold'>We are open Saturday-Thursday</p>
                        <h1 className='text-2xl font-bold'>8:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className='absolute text-red-500 text-xl left-4 bottom-5'> <FaCommentDots /></span>
                        <span className='text-4xl'><FaPhoneAlt /></span>
                    </div>
                    <div>
                        <p className='font-bold'>Have a question?</p>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className="text-3xl absolute bottom-3 text-red-500"> <FaMapMarkerAlt /></span>
                        <span className='text-2xl bg-white'><FaRegCircle /></span>
                    </div>
                    <div>
                        <p className='font-bold'>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold'>Dhanmondi 32, Dhaka, <br/> Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;