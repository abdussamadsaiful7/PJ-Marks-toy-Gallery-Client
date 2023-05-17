import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png'

const Login = () => {
    return (
        <div className='md:mx-96 my-20 shadow-2xl p-10'>
            <form>
                <h1 className='text-center text-2xl font-bold'>Login!</h1>
                <div>
                    <p className='text-xl'>Email</p>
                    <input type="text" name="email" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-6'>
                    <p className='text-xl'>Password</p>
                    <input type="password" name="password" placeholder='Enter your email'
                        className='w-full border-2 p-2 rounded' required />
                </div>
                <div className='pt-4'>
                    <input type="submit" value="Login" className=' btn btn-block' />
                </div>
            </form>
            <p className='text-center my-4'>Don't have an account? <Link to='/register' className='text-red-500 
                    font-semibold'>Sign Up</Link></p>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button className="btn  btn-circle btn-outline">
                   <img src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Login;