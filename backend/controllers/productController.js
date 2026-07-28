const Product = require('../models/Product');
const { sendResponse, sendError } = require('../utils/responseHandler');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const { category, search, limit = 50 } = req.query;
        const query = {};

        if (category) query.category = category;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const products = await Product.find(query)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        sendResponse(res, 200, products);
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

// Get featured products
exports.getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ featured: true }).limit(8);
        sendResponse(res, 200, products);
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

// Get single product
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return sendError(res, 404, 'Product not found');
        }
        sendResponse(res, 200, product);
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

// Create product (admin only)
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        sendResponse(res, 201, product, 'Product created successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!product) {
            return sendError(res, 404, 'Product not found');
        }
        sendResponse(res, 200, product, 'Product updated successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return sendError(res, 404, 'Product not found');
        }
        sendResponse(res, 200, null, 'Product deleted successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
};
