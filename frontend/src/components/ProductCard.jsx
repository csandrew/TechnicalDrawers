import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to={`/product/${product._id}`}>
                <div className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center p-4">
                    <img 
                        src={product.images?.[0] || '/placeholder.jpg'} 
                        alt={product.name} 
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[48px]">
                        {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-accent font-bold text-lg">
                            KES {product.price.toLocaleString()}
                        </span>
                        {product.stock > 0 ? (
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                In Stock
                            </span>
                        ) : (
                            <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                                Out of Stock
                            </span>
                        )}
                    </div>
                </div>
            </Link>
            <div className="px-4 pb-4">
                <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className={`w-full py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                        product.stock > 0 
                            ? 'bg-primary text-white hover:bg-primary-dark' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    <i className="fas fa-shopping-cart"></i>
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;