import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductsByCategory, fetchProducts } from '../data/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const { addToCart } = useCart();
    const categoryFilter = searchParams.get('category');

    useEffect(() => {
        const loadProducts = async () => {
            let data;
            if (categoryFilter) {
                data = await getProductsByCategory(categoryFilter);
            } else {
                data = await fetchProducts();
            }
            setProducts(data);
            setLoading(false);
        };
        loadProducts();
    }, [categoryFilter]);

    const categories = ['All', 'Calculators', 'Drawing Tools', 'Lab Safety', 'Stationery', 'Books', 'Footwear'];

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
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Our Products</h1>
                    <p className="text-text-light mt-2">Quality equipment for Kenya's future professionals</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map(cat => (
                        <Link
                            key={cat}
                            to={cat === 'All' ? '/products' : `/products?category=${encodeURIComponent(cat)}`}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                (!categoryFilter && cat === 'All') || categoryFilter === cat
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-600 hover:bg-primary/10'
                            }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No products found in this category.</p>
                        <Link to="/products" className="btn btn-primary mt-4 inline-block">View All Products</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {products.map(product => (
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
                )}
            </div>
        </section>
    );
};

export default Products;
