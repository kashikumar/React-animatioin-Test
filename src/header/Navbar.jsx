import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="bg-white sticky top-0 z-50">
            <nav className="navbar navbar-expand-lg mx-4">
                <div className="container-fluid flex justify-between">
                    <a className="text-lg no-underline text-nowrap pt-1.5 pb-1.5 mr-4 font-medium text-orange-400 hover:text-orange-500 focus:text-orange-500" href="/">TouchWood</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 items-center">
                            <li className="nav-item ">
                                <NavLink to='/' className="text-slate-500 p-2 no-underline hover:underline-offset-2 hover:underline hover:text-orange-400 focus:font-medium focus:underline-offset-2 focus:underline focus:text-orange-500" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to='/about' className="text-slate-500 p-2 no-underline hover:underline-offset-2 hover:underline hover:text-orange-400 focus:font-medium focus:underline-offset-2 focus:underline focus:text-orange-500" >About</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to='/covid' className="text-slate-500 p-2 no-underline hover:underline-offset-2 hover:underline hover:text-orange-400 focus:font-medium focus:underline-offset-2 focus:underline focus:text-orange-500" >Covid-19</NavLink>
                            </li>
                            <li className="nav-item mr-2">
                                <NavLink to='/contact' className="text-slate-500 p-2 no-underline hover:underline-offset-2 hover:underline hover:text-orange-400 focus:font-medium focus:underline-offset-2 focus:underline focus:text-orange-500" >Contact-Us</NavLink>
                            </li>
                            <li className="nav-item mr-2">
                                <NavLink to='/search' className="text-slate-500 p-2 no-underline hover:underline-offset-2 hover:underline hover:text-orange-400 focus:font-medium focus:underline-offset-2 focus:underline focus:text-orange-500" >Search</NavLink>
                            </li>
                            
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
