import React from 'react';
import banner from '../../assets/car/banner.jpg'
import car5 from '../../assets/car/car5.jpg'
import doll from '../../assets/car/doll_.jpg'

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-fuchsia-900 to-rgb(254, 249, 231) 
         py-5 lg:px-20'>
            <div className='lg:flex items-center justify-between my-10  bg-[url("")] bg-no-repeat w-full'>
                <div className='px-5'>
                    <h1 className='text-4xl font-extrabold'>Welcome to <span className='text-yellow-500'>
                        PJM</span><span className='text-green-500'>ARKS-GALL</span><span className='text-yellow-500'>ERY</span></h1>
                    <p className='pt-4 text-lg text-white md:pr-20'>At Fantasy Gallery Cars, we have a rich history rooted in a deep passion for toys and a love for automotive adventures. Our journey began over [insert number of years] years ago when our founder Saife Saifullah embarked on a mission to create a toy store that would bring joy, excitement, and imagination to children and car enthusiasts alike.

                        Since our humble beginnings, we have grown into a beloved destination for car enthusiasts and collectors, offering a wide range of high-quality car toys that capture the essence of speed, creativity, and endless possibilities. We take pride in curating a collection that sparks the imagination, encourages play, and fosters a sense of wonder.</p>
                    <div className='lg:ml-10 mt-4'>
                        <button className="btn btn-success mr-5 text-white">Explore</button>
                        <button className="btn btn-outline btn-warning">Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className=' rounded shadow-xl absolute w-40 h-40 top-60 right-96 p-2'
                     src={doll} />
                    <img className=' rounded shadow-xl' src={car5} />
                </div>
            </div>
        </div>
    );
};

export default Banner;