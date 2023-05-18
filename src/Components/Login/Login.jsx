import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { logIn, user, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState([]);
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                  navigate(from, { replace: true })
                form.reset()
                // toast.success('Successfully login!')
                //setError();

            })
            .catch(error => {
                console.log(error)
                setError(error);
            })
    }

    const handleGoogleSignIn= ()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }


    return (
        <div className='md:mx-96 my-20 shadow-2xl p-10'>
            <h1 className='text-center text-2xl font-bold'>Login!</h1>
            <form onSubmit={handleLogin} >
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
                <p className='text-red-500 p-2 '>
                    {error.message}
                </p>
            </form>
            <p className='text-center my-4'>Don't have an account? <Link to='/register' className='text-red-500 
                    font-semibold'>Sign Up</Link></p>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn  btn-circle btn-outline">
                    <img src={google} />
                </button>
            </div>
        </div>
    );
};

export default Login;