import React from 'react';
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'
import car4 from '../../assets/car/car4.jpg'
import car7 from '../../assets/car/car7.jpg'
import car6 from '../../assets/car/car6.jpg'

const Gallery = () => {
    return (
        <div className='lg:mx-20 mx-5 my-20'>
            <h1 className='text-center text-4xl font-extrabold mb-5'>TOY CARS GALLERY</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72 rounded-md' src={car1} alt="" />
                </div>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72  rounded-md' src={car2} alt="" />
                </div>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72  rounded-md' src={car3} alt="" />
                </div>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72  rounded-md' src={car4} alt="" />
                </div>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72  rounded-md' src={car7} alt="" />
                </div>
                <div className='p-4 shadow-2xl'>
                    <img className='w-full h-72  rounded-md' src={car6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;