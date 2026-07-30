const cloudinary = require('../config/cloudinary');

// Upload single image
const uploadImage = async (filePath, options = {}) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'technical-drawers/products',
            transformation: [
                { width: 400, height: 400, crop: 'fit' },
                { quality: 'auto' },
                { fetch_format: 'auto' }
            ],
            ...options
        });
        return result;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw error;
    }
};

// Upload multiple images
const uploadMultipleImages = async (filePaths) => {
    try {
        const uploads = filePaths.map(async (filePath) => {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'technical-drawers/products'
            });
            return {
                url: result.secure_url,
                publicId: result.public_id
            };
        });
        return await Promise.all(uploads);
    } catch (error) {
        console.error('Cloudinary multiple upload error:', error);
        throw error;
    }
};

// Delete image
const deleteImage = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error('Cloudinary delete error:', error);
        throw error;
    }
};

// Get optimized image URL
const getOptimizedImage = (publicId, options = {}) => {
    const defaultOptions = {
        width: 400,
        height: 400,
        crop: 'fit',
        quality: 'auto',
        fetch_format: 'auto'
    };
    const mergedOptions = { ...defaultOptions, ...options };
    return cloudinary.url(publicId, mergedOptions);
};

module.exports = { 
    uploadImage, 
    uploadMultipleImages, 
    deleteImage, 
    getOptimizedImage 
};