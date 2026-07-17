import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchFeaturedProducts } from '../data/products';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const loadProducts = async () => {
            const products = await fetchFeaturedProducts();
            setFeaturedProducts(products);
            setLoading(false);
        };
        loadProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-cover bg-center min-h-[600px] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80')" }}>
                <div className="absolute inset-0 bg-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-8 border border-white/20 rounded-xl shadow-lg">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                                Essentials for the next generation of<br />
                                <span className="text-accent">professionals</span>
                            </h1>
                            <p className="text-white/85 text-lg mt-4 max-w-lg">
                                We've been in that drawing hall at 2am. We know the panic of a broken compass. That's why we exist.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link to="/products" className="btn bg-white text-primary hover:bg-accent hover:text-white shadow-sm">
                                    Shop Now
                                </Link>
                                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <i className="fab fa-whatsapp"></i> Make an Enquiry
                                </a>
                            </div>
                            <div className="flex items-center gap-6 mt-12">
                                <div>
                                    <span className="text-white text-2xl font-bold">50+</span>
                                    <p className="text-white/70 text-sm">Partner institutions</p>
                                </div>
                                <div className="w-px h-10 bg-white/20"></div>
                                <div>
                                    <span className="text-white text-2xl font-bold">10,000+</span>
                                    <p className="text-white/70 text-sm">Students targeted</p>
                                </div>
                                <div className="w-px h-10 bg-white/20"></div>
                                <div>
                                    <span className="text-white text-2xl font-bold">100%</span>
                                    <p className="text-white/70 text-sm">Genuine products</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="hidden md:flex justify-center">
                            <img src="/logo.png" alt="Technical Drawers" className="w-full max-w-md" />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        {/*<span className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-4 py-1.5 rounded-full">Top Picks</span> */}
                        <h2 className="text-2xl md:text-4xl font-extrabold text-primary mt-3">What students are buying</h2>
                        <p className="text-text-light mt-2">Trusted by students at KU, UoN, JKUAT, and TUK</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.slice(0, 4).map(product => (
                            <div key={product._id} className="bg-white rounded-custom p-4 shadow-custom hover:shadow-custom-hover transition-all hover:-translate-y-1">
                                <Link to={`/product/${product._id}`}>
                                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden mb-3">
                                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-primary text-sm md:text-base">{product.name}</h3>
                                    <p className="text-accent font-bold">KES {product.price.toLocaleString()}</p>
                                </Link>
                                <button className="w-full mt-3 bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2" onClick={() => addToCart(product)}>
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/products" className="btn btn-outline">
                            View All Products <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
