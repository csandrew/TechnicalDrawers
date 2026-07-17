// src/components/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="relative text-gray-700 hover:text-primary">
            <i className="fas fa-shopping-cart text-lg"></i>
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{totalItems}</span>
            )}
        </Link>
    );
};

export default Cart;