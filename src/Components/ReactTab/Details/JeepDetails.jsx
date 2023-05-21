import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebookSquare, FaPinterest, FaYoutube, FaInstagram } from "react-icons/fa";
import useTitle from '../../../Hook/useTitle';

const JeepDetails = () => {
    const loaderCard = useLoaderData();
    console.log(loaderCard);
    useTitle('Jeep Details')
    const { _id, name, picture, price, rating, producer, quality, details } = loaderCard;
    return (
        <div className='my-20'>
            <div className='lg:flex justify-center items-center p-4 py-4 shadow-2xl 
        md:mx-52 space-x-20'>
                <div><img className="w-full h-72 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md mb-4" src={picture} alt="" /></div>
                <div className='space-y-2'>
                    <h1 className='text-xl font-semibold'>Name: {name}</h1>
                    <p>Price: ${price}</p>
                    <p>Made in: {producer} Company Ltd</p>
                    <p>Quality: {quality}</p>
                    <div className="flex justify-between">
                        <div>
                            <p>Rating: {rating}</p>
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-xl mt-4 px-10'>
                        <p><FaFacebookSquare /></p>
                        <p><FaYoutube /></p>
                        <p><FaInstagram /></p>
                        <p><FaPinterest /></p>
                    </div>
                </div>
            </div>
            <div className='mt-14 md:px-24 text-xl'>
                <p><span className='font-extrabold'>Description: </span>
                    <span className='text-gray-600'>{details}</span></p>
            </div>
        </div>
    );
};

export default JeepDetails;