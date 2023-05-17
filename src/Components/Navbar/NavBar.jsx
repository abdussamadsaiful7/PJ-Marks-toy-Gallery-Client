import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
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
                                <ul className="p-2 text-green-500">
                                    <li><a>All Toys</a></li>
                                    <li><a>Add Toy</a></li>
                                    <li><a>My Toy</a></li>
                                </ul>
                            </li>
                            <li><a>Login</a></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl text-yellow-500">
                        FAN<span className='text-green-600'>tasy-gall</span>ERY</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-green-500 font-bold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>Add Toy</Link></li>
                        <li><Link>My Toy</Link></li>
                        <li><Link>Login</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
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

