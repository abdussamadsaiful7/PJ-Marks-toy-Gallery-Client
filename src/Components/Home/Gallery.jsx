import React from 'react';
import car12 from '../../assets/car/car12.jpg'
import car14 from '../../assets/car/car14.jpg'
import car3 from '../../assets/car/car3.jpg'
import car13 from '../../assets/car/car13.jpg'
import car7 from '../../assets/car/car7.jpg'
import car6 from '../../assets/car/car6.jpg'
import car8 from '../../assets/car/car8.jpg'
import car9 from '../../assets/car/car9.jpg'
import car10 from '../../assets/car/car10.jpg'
import car11 from '../../assets/car/car11.jpg'
import Lottie from "lottie-react";
import animation1 from "../../assets/animation/79797-car-lottie-animation.json";

const Gallery = () => {
    return (
        <div className='lg:mx-20 mx-5 my-20'>
            <div className='w-64 h-48 mx-auto' ><Lottie animationData={animation1} loop={true} /></div>
            <h1 className='text-center text-4xl font-extrabold mb-5 text-fuchsia-900'>
                TOY CARS GALLERY</h1>
            <div className='grid md:grid-cols-2 gap-4 lg:mx-14'>
                <div className='p-2 border shadow-md ' data-aos="fade-right">
                    <img className=' transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 w-full h-96 rounded-md' src={car12} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span> Jeep cars toy</h1>
                </div>


                <div className='grid grid-cols-2 gap-2 mx-10'>
                    <div className='p-2 border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car10} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'> Classic cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car6} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'> Luxury cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car13} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'> Jeep cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car14} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'> Luxury cars toy</h1>
                    </div>
                </div>



                <div className='grid grid-cols-2 gap-2 mx-10'>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car11} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'>
                            Luxury cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car3} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'>
                            Classic cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car7} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'>
                            Classic cars toy</h1>
                    </div>
                    <div className='p-2 galPhoto border shadow-md'>
                        <img className='w-36 h-36 mx-auto transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car9} alt="" />
                        <div className="divider"></div>
                        <h1 className='text-center'>
                            Luxury cars toy</h1>
                    </div>
                </div>

                    {/* last card */}
                <div className='p-2 border shadow-md' data-aos="fade-left">
                    <img className='w-full h-96 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md' src={car8} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span> Luxury cars toy</h1>
                </div>



                {/* <div className='p-2 galPhoto border shadow-md '>
                    <img className='w-full h-52 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300  rounded-md' src={car7} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span>
                        Classic cars toy</h1>
                </div> */}
                {/* <div className='p-2 galPhoto border shadow-md '>
                    <img className='w-full h-52 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300  rounded-md' src={car6} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span>
                        Luxury cars toy</h1>
                </div> */}
                {/* <div className='p-2 galPhoto border shadow-md '>
                    <img className='w-full h-52 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300  rounded-md' src={car8} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span>
                        Luxury cars toy</h1>
                </div> */}
                {/* <div className='p-2 galPhoto border shadow-md '>
                    <img className='w-full h-52 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300  rounded-md' src={car9} alt="" />
                    <div className="divider"></div>
                    <h1 className='text-center'><span className='font-semibold'>Category: </span>
                        Luxury cars toy</h1>
                </div> */}
            </div>
        </div>
    );
};

export default Gallery;