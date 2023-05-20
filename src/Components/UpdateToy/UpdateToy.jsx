import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const updateToy = useLoaderData();
    const { _id, toyName, photo, price, quantity, ratings, email,
        sellerName, descriptions, category } = updateToy;

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const descriptions = form.descriptions.value;


        const updatedToy = { toyName, price, category, quantity, descriptions };

        console.log(updatedToy);

        //send to the server;
        fetch(`https://fantasy-toy-server.vercel.app/alltoys/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy updated successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                        
                    })
                }
               
                
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleUpdateToy} className="form-control px-20 py-20 bg-gradient-to-r from-yellow-700 to-green-500">
                    <h1 className='text-center font-extrabold text-4xl'>Update Toy Cars: {toyName}</h1>

                    {/* name, price section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Toy Name" defaultValue={toyName} name="toyName" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="$Price" name="price" defaultValue={price} className="input 
                            input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* sub-category, quantity section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Sub-Category" name="category"
                                    defaultValue={category} className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text"> Available quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="available quantity" name="quantity"
                                    defaultValue={quantity} className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* details section */}
                    <div className=' md:px-44 text-center w-full'>
                        <div>
                            <label className="label">
                                <span className="label-text">Details descriptions</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="descriptions" name="descriptions"
                                    defaultValue={descriptions} className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    <div className='text-center my-4'>
                        <input className="btn btn-wide" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;