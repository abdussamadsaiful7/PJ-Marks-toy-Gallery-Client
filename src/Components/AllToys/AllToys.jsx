import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import details from '../../assets/details.png'
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const AllToys = () => {
    const loadAllToy = useLoaderData();
    const [toys, setToys] = useState(loadAllToy);
    const [search, setSearch] = useState('');
    console.log(search);


    //console.log(toys);
    useTitle('All Toys')
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
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..." className=" input input-bordered input-warning w-full max-w-xs" />
            </div>


            <div className="overflow-x-auto md:mx-20">
                <h1 className='text-2xl mt-4 font-extrabold text-center'>ALL THE TOYS</h1>
                <table  className="table w-full my-10 border">
                    {
                        toys.filter((item)=>{
                            return search.toLowerCase() === '' ? item : item.toyName.toLowerCase().includes(search)
                        }).map(toy =>

                            <tbody toy={toy} key={toy._id} >
                                <tr className='my-4' data-aos="flip-up">
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

