// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const products = [
    {
        name: 'Casio FX-991ES Plus Calculator',
        slug: 'casio-fx-991es-plus',
        description: 'The most popular scientific calculator for engineering and architecture students. Non-programmable with 417 functions.',
        price: 3500,
        category: 'Calculators',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 50,
        featured: true,
        tags: ['engineering', 'architecture', 'calculator'],
        specifications: {
            'Power': 'Solar + Battery',
            'Functions': '417',
            'Type': 'Scientific'
        }
    },
    {
        name: 'Safety Boots - Steel Toe',
        slug: 'safety-boots-steel-toe',
        description: 'Durable steel-toe safety boots for engineering and construction students. Comfortable and protective.',
        price: 4500,
        category: 'Footwear',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 30,
        featured: true,
        tags: ['safety', 'boots', 'engineering'],
        specifications: {
            'Material': 'Leather',
            'Toe Type': 'Steel',
            'Sole': 'Anti-slip'
        }
    },
    {
        name: 'Technical Drawing Set (9-piece)',
        slug: 'technical-drawing-set',
        description: 'Complete 9-piece drawing set with compass, divider, extension bar, and more. Perfect for engineering and architecture students.',
        price: 1200,
        category: 'Drawing Tools',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 40,
        featured: true,
        tags: ['drawing', 'compass', 'engineering'],
        specifications: {
            'Pieces': '9',
            'Case': 'Plastic Box',
            'Includes': 'Compass, Divider, Extension Bar, Pencil Holder, Clutch Pencil, Leads, Sharpener'
        }
    },
    {
        name: 'Lab Coat - Student Fit',
        slug: 'lab-coat-student-fit',
        description: 'Comfortable cotton lab coat for practical sessions. Available in multiple sizes.',
        price: 1200,
        category: 'Lab Safety',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 60,
        featured: true,
        tags: ['lab', 'coat', 'safety'],
        specifications: {
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL',
            'Washable': 'Machine washable'
        }
    },
    {
        name: 'Engineering Mathematics Textbook',
        slug: 'engineering-mathematics-textbook',
        description: 'Comprehensive engineering mathematics textbook covering all core topics for engineering students.',
        price: 2500,
        category: 'Books',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 20,
        featured: true,
        tags: ['book', 'textbook', 'engineering'],
        specifications: {
            'Pages': '800+',
            'Author': 'Multiple',
            'Edition': '6th Edition'
        }
    },
    {
        name: 'Set Square Set (30cm/60cm)',
        slug: 'set-square-set',
        description: 'Professional set squares with 30°/60°/90° and 45°/45°/90° angles. Clear plastic with black scale.',
        price: 400,
        category: 'Drawing Tools',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 80,
        featured: false,
        tags: ['drawing', 'set square', 'angles'],
        specifications: {
            'Angles': '30°/60°/90°, 45°/45°/90°',
            'Material': 'Clear Plastic',
            'Scale': 'Black'
        }
    },
    {
        name: 'Mechanical Pencil Set (0.5mm)',
        slug: 'mechanical-pencil-set',
        description: 'Professional mechanical pencil set with 0.5mm leads. Perfect for technical drawings and precise work.',
        price: 350,
        category: 'Stationery',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 100,
        featured: false,
        tags: ['pencil', 'mechanical', 'drawing'],
        specifications: {
            'Lead Size': '0.5mm',
            'Includes': 'Pencil + Lead Refills',
            'Material': 'Metal Barrel'
        }
    },
    {
        name: 'T-Square 60cm',
        slug: 't-square-60cm',
        description: 'Professional T-square for accurate technical drawings. Essential for engineering and architecture students.',
        price: 800,
        category: 'Drawing Tools',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 45,
        featured: false,
        tags: ['t-square', 'drawing', 'engineering'],
        specifications: {
            'Length': '60cm',
            'Material': 'Plastic',
            'Transparent': 'Yes'
        }
    },
    {
        name: 'Scale Ruler (Metric)',
        slug: 'scale-ruler-metric',
        description: 'Professional scale ruler with metric measurements. Essential for engineering and architecture drawings.',
        price: 350,
        category: 'Drawing Tools',
        images: ['https://images.unsplash.com/photo-1587145829266-a32a6ea59f58?w=400&h=400&fit=crop&crop=center'],
        stock: 70,
        featured: false,
        tags: ['ruler', 'scale', 'metric'],
        specifications: {
            'Length': '30cm',
            'Material': 'Plastic',
            'Type': 'Metric'
        }
    }
];

const seedDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Delete existing products
        const deleted = await Product.deleteMany({});
        console.log(`🗑️ Removed ${deleted.deletedCount} existing products`);

        // Insert new products
        const inserted = await Product.insertMany(products);
        console.log(`✅ ${inserted.length} products seeded successfully`);

        // Show sample of seeded products
        console.log('\n📦 Seeded Products:');
        inserted.forEach((p, i) => {
            console.log(`   ${i + 1}. ${p.name} - KES ${p.price.toLocaleString()}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Seed error:', error.message);
        process.exit(1);
    }
};

seedDB();