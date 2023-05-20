import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const AddToy = () => {

    const {user}=useContext(AuthContext);

    useTitle('Add Toy')

    const handleAddToy =(event)=>{
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const category = form.category.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const descriptions = form.descriptions.value;
        const photo = form.photo.value;
        
        const newToy = {toyName, price, sellerName, email, category, ratings, quantity, descriptions, photo};

        console.log(newToy);

        //send to the server;
        fetch('https://fantasy-toy-server.vercel.app/alltoys',{
            method:'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset();
        })
    }

    return (
        <div>
            <form onSubmit={handleAddToy} className="form-control px-20 py-20 bg-gradient-to-r from-green-600 to-yellow-300">
                <h1 className='text-center font-extrabold text-4xl'>Add Toy Cars</h1>

                {/* name, price section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" name="toyName" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="$Price" name="price" className="input 
                            input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* seller name, seller email section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="seller name" name="sellerName" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* sub-category, ratings section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <p className='mb-1'>Sub-Category</p>
                        <select className="select select-bordered w-96" name="category">
                            <option disabled selected>Select Category</option>
                            <option>Classic</option>
                            <option>Luxury</option>
                            <option>Jeep Style</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Ratings" name="ratings" className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* available quantity and descriptions */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text"> Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="available quantity" name="quantity" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="descriptions" name="descriptions" className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>
                {/* photo section */}
                <div className=' md:px-44 text-center w-full'>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <input className="btn btn-wide" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;