
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="relative text-primary hover:text-primary-dark">
            <i className="fas fa-shopping-cart text-lg"></i>
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};

export default Cart;
