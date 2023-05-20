import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys);
    useTitle('My Toys')
    const { _id, toyName, photo, price, quantity, ratings, email,
        sellerName, descriptions, category } = myToys;

    const url = `https://fantasy-toy-server.vercel.app/alltoys?email=${user?.email}&${myToys?.price}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleDelete = id => {
        const process = confirm("Are You sure?")
        if (process) {
            fetch(`https://fantasy-toy-server.vercel.app/alltoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Delete successful!')
                        const remaining = myToys.filter(myToy => myToy._id !== id)
                        setMyToys(remaining);
                    }
                })
        }
    }

    return (
        <div className='bg-gradient-to-r from-fuchsia-950 to-rgb(254, 249, 231)'>
            <h1 className='text-center text-xl font-extrabold'>THIS IS MY TOY: {myToys.length} </h1>
            <div className="overflow-x-auto md:mx-20">
                <table className="table w-full my-10 border">
                    {
                        myToys.map(myToy =>
                            <tbody myToy={myToy} key={myToy._id}>
                                <tr className='my-4'>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={myToy.photo} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{myToy.sellerName}</td>
                                    <td>{myToy.toyName}</td>
                                    <td>{myToy.category}</td>
                                    <td>{myToy.quantity}</td>
                                    <td>${myToy.price}</td>
                                    <td><Link to={`/updateToy/${myToy._id}`}>
                                        <button className="btn btn-ghost btn-xs">Update</button>
                                    </Link></td>
                                    <th>
                                        <label>
                                            <button onClick={() => handleDelete(myToy._id)} className="btn btn-circle btn-outline btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </label>
                                    </th>
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

export default MyToy;