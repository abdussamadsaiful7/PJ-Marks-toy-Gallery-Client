import React from 'react';
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'
import car4 from '../../assets/car/car4.jpg'
import car7 from '../../assets/car/car7.jpg'
import car6 from '../../assets/car/car6.jpg'
import car8 from '../../assets/car/car8.jpg'
import car9 from '../../assets/car/car9.jpg'
import Lottie from "lottie-react";
import animation1 from "../../assets/animation/79797-car-lottie-animation.json";

const Gallery = () => {
    return (
        <div className='lg:mx-20 mx-5 my-20'>
            <div className='w-64 h-52 mx-auto' ><Lottie animationData={animation1} loop={true} /></div>
            <h1 className='text-center text-4xl font-extrabold mb-5 text-fuchsia-900'>
                TOY CARS GALLERY</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64 rounded-md' src={car1} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car2} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car3} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car4} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car7} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car6} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car8} alt="" />
                </div>
                <div className='p-2 shadow-2xl'>
                    <img className='w-full h-64  rounded-md' src={car9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;