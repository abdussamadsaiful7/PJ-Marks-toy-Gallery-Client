import React from 'react';
import { FaFacebookSquare, FaPinterest, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Luxury = ({ luxury }) => {
    const { name, picture, price, rating, producer, quality, details } = luxury;

    return (
        <div className="p-4 shadow-2xl">
            <img className="w-full h-72 rounded-md mb-4" src={picture} alt="" />
            <h1>Name: {name}</h1>
            <p>Quality: {quality}</p>
            <p>Price: $ {price}</p>
            <Link to={`/luxuryDetails/${luxury._id}`}><button className="btn btn-outline btn-warning btn-sm mt-4">View Details</button></Link>
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
            <div className='grid grid-cols-4 gap-2 text-xl mt-4 px-14'>
                <p><FaFacebookSquare /></p>
                <p><FaYoutube /></p>
                <p><FaInstagram /></p>
                <p><FaPinterest /></p>
            </div>
        </div>


    );
};

export default Luxury;