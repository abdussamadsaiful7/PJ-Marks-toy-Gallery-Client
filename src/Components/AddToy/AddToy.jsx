import React from 'react';

const AddToy = () => {
    return (
        <div>
            <form className="form-control px-20 py-20 bg-gradient-to-r from-green-700 to-yellow-100">
                <h1 className='text-center font-extrabold text-4xl'>Add Toy Cars</h1>

                {/* name, price section */}
                <div className='lg:flex items-center justify-center space-x-8'>
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
                <div className='lg:flex items-center justify-center space-x-8'>
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
                            <input type="text" placeholder="seller email" name="sellerEmail" className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* sub-category, ratings section */}
                <div className='lg:flex items-center justify-center space-x-8'>
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
                <div className='lg:flex items-center justify-center space-x-8'>
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