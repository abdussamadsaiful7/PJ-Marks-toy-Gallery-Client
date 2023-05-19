import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/PJMARKS.png'
import { AuthContext } from '../Provider/AuthProvider';


const NavBar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const notify = () => toast.error('Successfully logout!');


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
        if (loading) {
            return <progress className="progress progress-error w-56" value="100" max="100"></progress>
        }
        notify();
    }
    return (
        <div className=''>
            <div className="navbar bg-base-100 bg-gradient-to-r from-fuchsia-900 to-rgb(254, 249, 231) lg:px-20 pt-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 font-bold shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Toys
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 text-white">
                                    <li><Link>All Toys</Link></li>
                                    <li><Link to='/addToy'>Add Toy</Link></li>
                                    <li><Link>My Toy</Link></li>
                                </ul>
                            </li>
                            {user && <li><Link onClick={handleLogout}>Log out</Link></li>}
                            {!user && <li><Link to='/login'>Login</Link></li>}
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <img className='w-20 h-20' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-3xl lg:mr-20 text-yellow-500">
                        PJM<span className='text-green-600 font-extrabold'>ARKS</span> <br/></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-bold">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link>ALL TOYS</Link></li>
                        {
                            user && <>
                                <li><Link to='/addToy'>ADD TOY</Link></li>
                                <li><Link>MY TOY</Link></li>
                            </>
                        }
                        {user && <li><Link onClick={handleLogout}>LOG OUT</Link></li>}
                        {!user && <li><Link to='/login'>LOGIN</Link></li>}
                        <li><Link to='/blog'>BLOG</Link></li>
                        <div className="tooltip lg:ml-10" data-tip=" PJMARKS-GALLERY">
                            {
                                user && user?.email ? <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" /> : null
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link><a className="lg:btn lg:btn-outline btn-success hidden">About Us</a></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

