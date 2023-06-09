import React, { useContext } from 'react';
import { FaFacebookSquare, FaPinterest, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const Luxury = ({ luxury }) => {
    const { user } = useContext(AuthContext);
    const { name, picture, price, rating, producer, quality, details } = luxury;

    const notify = () => {

        if (user) {
            toast.success('Your favorite toy details is showed!');
        }
        else {
            toast.error('Sorry at first login, please!')
        }
    }

    return (
        <div className="p-4 shadow-2xl">
            <img className="w-full h-72 transition cursor-pointer ease-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md mb-4" src={picture} alt="" />
            <h1>Name: {name}</h1>
            <p>Quality: {quality}</p>
            <p>Price: $ {price}</p>
            {
                user && <Link to={`/luxuryDetails/${luxury._id}`}><button onClick={notify} className="btn btn-outline btn-warning btn-sm mt-4">View Details
                </button></Link>
            }
            {
                !user && <Link to={`/luxuryDetails/${luxury._id}`}><button onClick={notify} className="btn btn-outline btn-warning btn-sm mt-4">View Details
                </button></Link>
            }
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