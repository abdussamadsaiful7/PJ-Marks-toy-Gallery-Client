import React from 'react';

const ExtraOne = () => {
    return (
        <div className='extraOne px-20 py-20'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-fuchsia-600 mb-4'>Subscribe</h1>
                <input type="email" name="email" className=' bg-none w-1/2 py-4 rounded-md p-4 border-4 border-fuchsia-600' placeholder='Enter your Email & Subscribe' />
                <br/>
                <button className='btn btn-lg bg-fuchsia-600 mt-4'>Subscribe</button>
            </div>
        </div>
    );
};

export default ExtraOne;