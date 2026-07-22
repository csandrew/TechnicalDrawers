import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const fetchFeaturedProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products/featured`);
        return response.data;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const url = category ? `${API_URL}/api/products?category=${encodeURIComponent(category)}` : `${API_URL}/api/products`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
};

export const getProductsByCourse = async (course) => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        const products = response.data;
        return products.filter(p => p.courses && p.courses.includes(course));
    } catch (error) {
        console.error('Error fetching products by course:', error);
        return [];
    }
};
