const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: [
            'Engineering Drawing Equipment',
            'Scientific Calculators',
            'Measuring Instruments',
            'Hand Tools',
            'Electrical Tools',
            'Safety Equipment',
            'Stationery & Office Supplies',
            'Art & Drafting Supplies',
            'Textbooks & Reference'
        ],
        required: true
    },
    images: [{ type: String, required: true }],
    stock: { type: Number, required: true, default: 0 },
    featured: { type: Boolean, default: false },
    tags: [String],
    courses: [{ type: String }],
    specifications: { type: Map, of: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
