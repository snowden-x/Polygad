import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    

    return (

        <header className="sticky bg-white inset-x-0 top-0 z-10 w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <NavLink
                        to="/"
                        onClick={() => {
                            window.scrollTo(0, 0); 
                        }}
                        >
                            <h3 className="w-auto h-8 font-bold text-red-500">POLYGAD</h3>

                        </NavLink>
    
                    </div>

                    <button 
                    type="button" 
                    className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}
                    >

                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>


                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div className={`${isMenuOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}  absolute top-full left-0 w-full p-2 space-y-1 bg-white border border-gray-200 shadow-lg lg:static lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0 lg:mt-0 lg:space-y-0 lg:flex lg:items-center lg:justify-end lg:space-x-10 transform transition-transform duration-200 lg:translate-x-0`}>
                        <NavLink
                            to="/"
                            onClick={() => {
                                closeMenu();
                                window.scrollTo(0, 0); 
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 text-lg font-semibold transition-all duration-200 hover:text-opacity-80 text-indigo-600 lg:border-b-2 lg:border-indigo-600"
                                    : "block py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            onClick={() => {
                                closeMenu();
                                window.scrollTo(0, 0); 
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 text-lg font-semibold transition-all duration-200 hover:text-opacity-80 text-indigo-600 lg:border-b-2 lg:border-indigo-600"
                                    : "block py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={() => {
                                closeMenu();
                                window.scrollTo(0, 0); 
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 text-lg font-semibold transition-all duration-200 hover:text-opacity-80 text-indigo-600 lg:border-b-2 lg:border-indigo-600"
                                    : "block py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/contactus"
                            onClick={() => {
                                closeMenu();
                                window.scrollTo(0, 0); 
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 text-lg font-semibold transition-all duration-200 hover:text-opacity-80 text-indigo-600 lg:border-b-2 lg:border-indigo-600"
                                    : "block py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                            }
                        >
                            Contact Us
                        </NavLink>

                        <div className="items-center flex flex-col justify-center px-5 py-2.5 text-xs font-semibold transition-all duration-200 rounded-full bg-red-500 text-white hover:bg-red-600 focus:bg-red-600">
                            MON-FRI
                            <p className="text-xs">8:00am - 5:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>



    );
}

export default Header;