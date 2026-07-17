// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Technical Drawers" className="h-8 w-auto" />
                        <span className="text-lg font-semibold text-white">
                            Technical<span className="text-golden font-semibold">Drawers</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    `font-medium transition-all duration-300 relative 
                                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                    after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                    hover:after:w-full ${
                                        isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/products" 
                                className={({ isActive }) => 
                                    `font-medium transition-all duration-300 relative 
                                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                    after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                    hover:after:w-full ${
                                        isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                    }`
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    `font-medium transition-all duration-300 relative 
                                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                    after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                    hover:after:w-full ${
                                        isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                    }`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    `font-medium transition-all duration-300 relative 
                                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                    after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                    hover:after:w-full ${
                                        isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right Side - Cart & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <Cart />
                        <button
                            className="md:hidden text-white hover:text-golden transition"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <ul className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-4 pb-4 border-t border-primary/20`}>
                    <li className="pt-4">
                        <NavLink 
                            to="/" 
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => 
                                `font-medium transition-all duration-300 relative 
                                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                hover:after:w-full ${
                                    isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products" 
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => 
                                `font-medium transition-all duration-300 relative 
                                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                hover:after:w-full ${
                                    isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                }`
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => 
                                `font-medium transition-all duration-300 relative 
                                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                hover:after:w-full ${
                                    isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                }`
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => 
                                `font-medium transition-all duration-300 relative 
                                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                                after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 
                                hover:after:w-full ${
                                    isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-golden'
                                }`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;