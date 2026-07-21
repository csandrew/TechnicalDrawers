import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductsByCategory, fetchProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams] = useSearchParams();
    const { addToCart } = useCart();
    const categoryFilter = searchParams.get('category');

    const categories = [
        'All',
        'Engineering & Drawing',
        'Scientific Calculators',
        'Mathematics Equipment',
        'Writing Instruments',
        'Notebooks & Books',
        'Filing & Organization',
        'Laboratory Supplies',
        'Safety Equipment',
        'Exam Essentials',
        'Gifts & Accessories'
    ];

    useEffect(() => {
        const loadProducts = async () => {
            let data;
            if (categoryFilter && categoryFilter !== 'All') {
                data = await getProductsByCategory(categoryFilter);
            } else {
                data = await fetchProducts();
            }
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        };
        loadProducts();
    }, [categoryFilter]);

    // Search filter effect
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchTerm, products]);

    // Add to the useEffect
useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
        setSearchTerm(searchQuery);
    }
}, [searchParams]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Search is handled by the useEffect above
    };

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
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    
                    <h1 className="text-2xl md:text-2xl font-extrabold text-secondary">Our Products</h1>
                    <p className="text-text-light mt-2">Quality equipment for Kenya's future professionals</p>
                </div>

                {/* Search Bar - Added to Products Page */}
                <div className="max-w-2xl mx-auto mb-8">
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products by name, category, or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-12 px-4 pr-12 bg-white rounded-lg outline-none focus:ring-2 focus:ring-accent/50 transition shadow-sm"
                        />
                        <button 
                            type="submit"
                            className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-gray-500 hover:text-primary-dark transition"
                        >
                            <i className="fas fa-search text-xl"></i>
                        </button>
                    </form>
                    {searchTerm && (
                        <p className="text-sm text-gray-500 mt-2">
                            Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    )}
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

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No products found matching "{searchTerm}".</p>
                        <button 
                            onClick={() => setSearchTerm('')}
                            className="btn btn-primary mt-4 inline-block"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;