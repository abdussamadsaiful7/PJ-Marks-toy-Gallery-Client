import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import details from '../../assets/details.png'
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const AllToys = () => {
    const loadAllToy = useLoaderData();
    const [toys, setToys] = useState(loadAllToy)
    console.log(toys);
    const { _id, toyName, photo, price, quantity, ratings, email,
        sellerName, descriptions, category } = toys;

    const { user } = useContext(AuthContext);
    const notify = () => {

        if (user) {
            toast.success('Your favorite toy details is showed!');
        }
        else {
            toast.error('Sorry at first login, please!')
        }
    }

    return (
        <div className=' bg-gradient-to-r from-fuchsia-900 to-rgb(254, 249, 231)'>
            <div className='text-center'>
                <input type="text" placeholder="Search product category" className=" input input-bordered input-warning w-full max-w-xs" />
                <h1 className='text-2xl mt-4 font-extrabold'>ALL THE TOYS</h1>
            </div>
            <div className="overflow-x-auto md:mx-20">
                <table className="table w-full my-10 border ">
                    {
                        toys.map(toy =>

                            <tbody toy={toy} key={toy._id} >
                                <tr className='my-4'>
                                    <td>

                                        <div className="avatar">
                                            <div className=" w-14 h-14">
                                                <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.quantity}</td>
                                    <td>${toy.price}</td>

                                    <td>
                                        {
                                            user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <img className='w-8 h-8' src={details} alt="" />
                                            </Link>
                                        }
                                        {
                                            !user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <img className='w-8 h-8' src={details} alt="" />
                                            </Link>
                                        }
                                    </td>
                                </tr>
                                <tr />
                            </tbody>

                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AllToys;

