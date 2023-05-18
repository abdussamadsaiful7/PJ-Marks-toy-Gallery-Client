import React from 'react';
import { FaFacebookSquare, FaPinterest, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Luxury = ({luxury}) => {
    //const {name, picture, price, rating, producer, quality, details}= classic;
    const {LuxuryCars} = luxury;
    console.log(luxury)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5 lg:px-20'>
            {
                LuxuryCars?.map(car =>
                    <div className="p-4 shadow-2xl" key={car.id} car={car}>
                        <img className="w-full h-72 rounded-md mb-4" src={car.picture} alt="" />
                        <h1>Name: {car.name}</h1>
                        <p>Quality: {car.quality}</p>
                        <p>Price: $ {car.price}</p>
                        <Link><button className="btn btn-outline btn-warning btn-sm mt-4">View Details</button></Link>
                        <div className="flex justify-between">
                            <div>
                                <p>Rating: {car.rating}</p>
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
                )
            }
        </div>
    );
};

export default Luxury;