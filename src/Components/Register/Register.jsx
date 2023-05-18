import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError]=useState([]);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
            setError(error)
        })
    }

    return (
        <div className='md:mx-96 my-20 shadow-2xl p-10'>
                <h1 className='text-center text-2xl font-bold'>Please Registration!</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <p className='text-xl'>Name</p>
                    <input type="text" name="name" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-6'>
                    <p className='text-xl'>Email</p>
                    <input type="text" name="email" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-6'>
                    <p className='text-xl'>Password</p>
                    <input type="password" name="password" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-6'>
                    <p className='text-xl'>Photo URL</p>
                    <input type="text" name="photo" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-4'>
                    <input type="submit" value="Sign Up" className=' btn btn-block' />
                </div>
            </form>
            <p className='text-center my-4'>Already have an account? <Link to='/login' className='text-red-500 
                    font-semibold'>Sign Up</Link></p>
        </div>
    );
};

export default Register;