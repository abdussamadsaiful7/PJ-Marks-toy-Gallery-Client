import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebookSquare, FaPinterest, FaYoutube, FaInstagram } from "react-icons/fa";

const ToyDetails = () => {

    const loaderCard = useLoaderData();
    const { _id, toyName, photo, price, quantity, ratings, sellerEmail,
        sellerName, descriptions, category } = loaderCard;
    console.log(loaderCard);

    return (
        <div className='my-20'>
            <div className='lg:flex justify-center items-center p-4 py-4 shadow-2xl 
            md:mx-52 space-x-20'>
                <div><img className="w-full h-72 rounded-md mb-4" src={photo} alt="" /></div>
                <div className='space-y-2'>
                    <h1 className='text-xl font-semibold'>Name: {toyName}</h1>
                    <p>Price: ${price}</p>
                    <p>Quality: {quantity}</p>
                    <p>Category: {category}</p>
                    <div className="flex justify-between">
                        <div>
                            <p>Rating: {ratings}</p>
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
            <div className='text-center my-20'>
                <h1>Seller Name: {sellerName}</h1>
                <p>Email: {sellerEmail}</p>
                <div className='mt-5 md:px-24 text-xl'>
                    <p><span className='font-extrabold'>Description: </span>
                        <span className='text-gray-600'>{ descriptions}</span></p>
                </div>
            </div>
        </div>
    )
};

export default ToyDetails;