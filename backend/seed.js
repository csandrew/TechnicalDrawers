require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

// ============================================
// CLOUDINARY BASE URL (Update with your cloud name)
// ============================================
const CLOUD_BASE = 'https://res.cloudinary.com/j2zcgbug/image/upload';

const getImage = (folder, filename) => {
    return `${CLOUD_BASE}/w_400,h_400,c_fit,f_auto,q_auto/technical-drawers/products/${folder}/${filename}`;
};

const products = [
    // ============================================
    // 1. SCIENTIFIC CALCULATORS (8)
    // ============================================
    {
        name: 'Casio FX-82MS Calculator',
        slug: 'casio-fx-82ms',
        description: 'Beginner-friendly scientific calculator with 240 functions. Perfect for high school and first-year university students.',
        price: 2500,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-82ms.png')],
        stock: 60,
        featured: false,
        tags: ['calculator', 'beginner', 'school'],
        specifications: {
            'Model': 'FX-82MS',
            'Functions': '240',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-82EX ClassWiz',
        slug: 'casio-fx-82ex-classwiz',
        description: 'Advanced scientific calculator with 274 functions and high-resolution display.',
        price: 2800,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-82ex-classwiz.png')],
        stock: 45,
        featured: false,
        tags: ['calculator', 'classwiz'],
        specifications: {
            'Model': 'FX-82EX ClassWiz',
            'Functions': '274',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-100MS Calculator',
        slug: 'casio-fx-100ms',
        description: 'Reliable scientific calculator with 240 functions. Ideal for engineering and science students.',
        price: 2700,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-100ms.png')],
        stock: 40,
        featured: false,
        tags: ['calculator', 'engineering'],
        specifications: {
            'Model': 'FX-100MS',
            'Functions': '240',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-570MS Calculator',
        slug: 'casio-fx-570ms',
        description: 'Multi-replay scientific calculator with 401 functions. Perfect for engineering and architecture students.',
        price: 2800,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-570ms.png')],
        stock: 35,
        featured: false,
        tags: ['calculator', 'multi-replay'],
        specifications: {
            'Model': 'FX-570MS',
            'Functions': '401',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-570ES Plus Calculator',
        slug: 'casio-fx-570es-plus',
        description: 'Advanced scientific calculator with 417 functions. Ideal for engineering and science students.',
        price: 3000,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-570es-plus.png')],
        stock: 35,
        featured: true,
        tags: ['calculator', 'engineering', 'best-seller'],
        specifications: {
            'Model': 'FX-570ES Plus',
            'Functions': '417',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-991MS Calculator',
        slug: 'casio-fx-991ms',
        description: 'Advanced scientific calculator with 417 functions. Ideal for engineering students.',
        price: 3200,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-991ms.png')],
        stock: 30,
        featured: false,
        tags: ['calculator', 'engineering'],
        specifications: {
            'Model': 'FX-991MS',
            'Functions': '417',
            'Power': 'Battery Only'
        }
    },
    {
        name: 'Casio FX-991ES Plus Calculator',
        slug: 'casio-fx-991es-plus',
        description: 'The most popular scientific calculator for engineering students. Features 417 functions with solar + battery power.',
        price: 3500,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-991es-plus.png')],
        stock: 50,
        featured: true,
        tags: ['calculator', 'engineering', 'best-seller'],
        specifications: {
            'Model': 'FX-991ES Plus',
            'Functions': '417',
            'Power': 'Solar + Battery'
        }
    },
    {
        name: 'Casio FX-991EX ClassWiz',
        slug: 'casio-fx-991ex-classwiz',
        description: 'The most advanced scientific calculator with spreadsheet functionality. Perfect for engineering and statistics students.',
        price: 4200,
        category: 'Scientific Calculators',
        images: [getImage('calculators', 'fx-991ex-classwiz.png')],
        stock: 30,
        featured: true,
        tags: ['calculator', 'classwiz', 'best-seller'],
        specifications: {
            'Model': 'FX-991EX ClassWiz',
            'Functions': '552',
            'Power': 'Solar + Battery'
        }
    },

    // ============================================
    // 2. ENGINEERING DRAWING EQUIPMENT (28)
    // ============================================
    {
        name: 'A2 Drawing Board (Wooden)',
        slug: 'a2-drawing-board-wooden',
        description: 'High-quality wooden A2 drawing board with smooth surface. Ideal for engineering and architecture students.',
        price: 3500,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/boards', 'a2-drawing-board-wooden.jpg')],
        stock: 20,
        featured: false,
        tags: ['drawing', 'board'],
        specifications: {
            'Size': 'A2',
            'Material': 'Wood'
        }
    },
    {
        name: 'A2 Drawing Board (Smart Board)',
        slug: 'a2-drawing-board-smart',
        description: 'Professional A2 smart drawing board with parallel motion.',
        price: 5500,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/boards', 'a2-drawing-board-smart.jpg')],
        stock: 15,
        featured: true,
        tags: ['drawing', 'board', 'smart'],
        specifications: {
            'Size': 'A2',
            'Material': 'Aluminum + Plastic'
        }
    },
    {
        name: 'Engineering Drawing Set',
        slug: 'engineering-drawing-set',
        description: 'Complete drawing set with compass, divider, and accessories.',
        price: 1200,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/sets', 'engineering-drawing-set.jpg')],
        stock: 40,
        featured: true,
        tags: ['drawing', 'set', 'compass', 'best-seller'],
        specifications: {
            'Pieces': '9',
            'Includes': 'Compass, Divider, Pencil Holder, Leads'
        }
    },
    {
        name: '60cm T-Square',
        slug: '60cm-t-square',
        description: 'Professional T-square for accurate technical drawings.',
        price: 800,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/t-squares', 't-square-60cm.jpg')],
        stock: 45,
        featured: true,
        tags: ['t-square', 'drawing', 'best-seller'],
        specifications: {
            'Length': '60cm',
            'Material': 'Plastic'
        }
    },
    {
        name: '90cm T-Square',
        slug: '90cm-t-square',
        description: 'Large T-square for larger paper sizes.',
        price: 1200,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/t-squares', 't-square-90cm.jpg')],
        stock: 30,
        featured: false,
        tags: ['t-square', 'drawing'],
        specifications: {
            'Length': '90cm',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Standard Set Squares',
        slug: 'standard-set-squares',
        description: 'Professional set squares with 30°/60°/90° and 45°/45°/90° angles.',
        price: 400,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/set-squares', 'standard-set-squares.jpg')],
        stock: 80,
        featured: true,
        tags: ['set-square', 'angles', 'best-seller'],
        specifications: {
            'Angles': '30°/60°/90°, 45°/45°/90°',
            'Material': 'Clear Plastic'
        }
    },
    {
        name: 'Adjustable Set Square',
        slug: 'adjustable-set-square',
        description: 'Adjustable set square with locking mechanism for custom angles.',
        price: 650,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/set-squares', 'adjustable-set-square.jpg')],
        stock: 40,
        featured: false,
        tags: ['set-square', 'adjustable'],
        specifications: {
            'Material': 'Plastic',
            'Angle Range': '0° - 360°'
        }
    },
    {
        name: 'Scale Ruler (Metric)',
        slug: 'scale-ruler-metric',
        description: 'Professional scale ruler with metric measurements.',
        price: 350,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'scale-ruler-metric.jpg')],
        stock: 70,
        featured: false,
        tags: ['ruler', 'scale'],
        specifications: {
            'Length': '30cm',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Protractor (360°)',
        slug: 'protractor-360',
        description: 'Clear plastic 360° protractor for accurate angle measurement.',
        price: 250,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'protractor-360.jpg')],
        stock: 60,
        featured: false,
        tags: ['protractor', 'angles'],
        specifications: {
            'Range': '360°',
            'Material': 'Clear Plastic'
        }
    },
    {
        name: 'French Curve Set',
        slug: 'french-curve-set',
        description: 'French curve set for smooth curved lines.',
        price: 450,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'french-curve-set.jpg')],
        stock: 50,
        featured: false,
        tags: ['french-curve', 'curves'],
        specifications: {
            'Pieces': '3',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Steel Ruler 30cm',
        slug: 'steel-ruler-30cm',
        description: 'Durable stainless steel ruler with metric markings.',
        price: 150,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'steel-ruler-30cm.jpg')],
        stock: 100,
        featured: false,
        tags: ['ruler', 'steel'],
        specifications: {
            'Length': '30cm',
            'Material': 'Stainless Steel'
        }
    },
    {
        name: 'Steel Ruler 50cm',
        slug: 'steel-ruler-50cm',
        description: 'Durable stainless steel ruler.',
        price: 250,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'steel-ruler-50cm.jpg')],
        stock: 80,
        featured: false,
        tags: ['ruler', 'steel'],
        specifications: {
            'Length': '50cm',
            'Material': 'Stainless Steel'
        }
    },
    {
        name: 'Steel Ruler 60cm',
        slug: 'steel-ruler-60cm',
        description: 'Durable stainless steel ruler.',
        price: 300,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'steel-ruler-60cm.jpg')],
        stock: 70,
        featured: false,
        tags: ['ruler', 'steel'],
        specifications: {
            'Length': '60cm',
            'Material': 'Stainless Steel'
        }
    },
    {
        name: 'Steel Ruler 100cm',
        slug: 'steel-ruler-100cm',
        description: 'Large stainless steel ruler for large-scale measurements.',
        price: 450,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'steel-ruler-100cm.jpg')],
        stock: 40,
        featured: false,
        tags: ['ruler', 'steel'],
        specifications: {
            'Length': '100cm',
            'Material': 'Stainless Steel'
        }
    },
    {
        name: 'Vernier Calipers (Analog)',
        slug: 'vernier-calipers-analog',
        description: 'Precision analog vernier calipers.',
        price: 1500,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'vernier-calipers-analog.jpg')],
        stock: 30,
        featured: false,
        tags: ['calipers', 'vernier'],
        specifications: {
            'Range': '150mm',
            'Accuracy': '0.05mm'
        }
    },
    {
        name: 'Vernier Calipers (Digital)',
        slug: 'vernier-calipers-digital',
        description: 'Precision digital vernier calipers with LCD display.',
        price: 2500,
        category: 'Engineering Drawing Equipment',
        images: [getImage('drawing/measuring', 'vernier-calipers-digital.jpg')],
        stock: 25,
        featured: true,
        tags: ['calipers', 'vernier', 'digital'],
        specifications: {
            'Range': '150mm',
            'Accuracy': '0.01mm'
        }
    },
    {
        name: 'Drawing Pad A3',
        slug: 'drawing-pad-a3',
        description: 'High-quality A3 drawing pad with smooth paper.',
        price: 450,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'drawing-pad-a3.jpg')],
        stock: 50,
        featured: true,
        tags: ['drawing', 'pad', 'paper'],
        specifications: {
            'Size': 'A3',
            'Sheets': '50'
        }
    },
    {
        name: 'Drawing Pad A4',
        slug: 'drawing-pad-a4',
        description: 'High-quality A4 drawing pad.',
        price: 300,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'drawing-pad-a4.jpg')],
        stock: 80,
        featured: false,
        tags: ['drawing', 'pad', 'paper'],
        specifications: {
            'Size': 'A4',
            'Sheets': '50'
        }
    },
    {
        name: 'Sketch Pad A3',
        slug: 'sketch-pad-a3',
        description: 'Premium A3 sketch pad with textured paper.',
        price: 500,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'sketch-pad-a3.jpg')],
        stock: 40,
        featured: false,
        tags: ['sketch', 'pad', 'paper'],
        specifications: {
            'Size': 'A3',
            'Sheets': '40'
        }
    },
    {
        name: 'Sketch Pad A5',
        slug: 'sketch-pad-a5',
        description: 'Compact A5 sketch pad for quick sketches.',
        price: 250,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'sketch-pad-a5.jpg')],
        stock: 60,
        featured: false,
        tags: ['sketch', 'pad'],
        specifications: {
            'Size': 'A5',
            'Sheets': '40'
        }
    },
    {
        name: 'Display Book A3',
        slug: 'display-book-a3',
        description: 'Professional A3 display book for portfolio presentation.',
        price: 600,
        category: 'Stationery & Office Supplies',
        images: [getImage('drawing/accessories', 'display-book-a3.jpg')],
        stock: 30,
        featured: false,
        tags: ['display', 'book', 'portfolio'],
        specifications: {
            'Size': 'A3',
            'Sheets': '20'
        }
    },
    {
        name: 'Display Book A4',
        slug: 'display-book-a4',
        description: 'Professional A4 display book.',
        price: 400,
        category: 'Stationery & Office Supplies',
        images: [getImage('drawing/accessories', 'display-book-a4.jpg')],
        stock: 50,
        featured: false,
        tags: ['display', 'book'],
        specifications: {
            'Size': 'A4',
            'Sheets': '20'
        }
    },
    {
        name: 'Drawing Book',
        slug: 'drawing-book',
        description: 'High-quality drawing book with thick paper.',
        price: 350,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'drawing-book.jpg')],
        stock: 60,
        featured: false,
        tags: ['drawing', 'book'],
        specifications: {
            'Sheets': '40',
            'Paper Weight': '120gsm'
        }
    },
    {
        name: 'Drawing Holder (Bazooka)',
        slug: 'drawing-holder-bazooka',
        description: 'Durable drawing holder for storing A2 and A3 drawings.',
        price: 800,
        category: 'Stationery & Office Supplies',
        images: [getImage('drawing/accessories', 'drawing-holder-bazooka.jpg')],
        stock: 25,
        featured: false,
        tags: ['drawing', 'holder'],
        specifications: {
            'Length': '75cm',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Cutting Mat A1',
        slug: 'cutting-mat-a1',
        description: 'Self-healing cutting mat for precision cutting.',
        price: 1500,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'cutting-mat-a1.jpg')],
        stock: 20,
        featured: false,
        tags: ['cutting', 'mat'],
        specifications: {
            'Size': 'A1',
            'Material': 'PVC'
        }
    },
    {
        name: 'Cutting Mat A2',
        slug: 'cutting-mat-a2',
        description: 'Self-healing cutting mat.',
        price: 1200,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'cutting-mat-a2.jpg')],
        stock: 30,
        featured: false,
        tags: ['cutting', 'mat'],
        specifications: {
            'Size': 'A2',
            'Material': 'PVC'
        }
    },
    {
        name: 'Cutting Mat A3',
        slug: 'cutting-mat-a3',
        description: 'Self-healing cutting mat.',
        price: 800,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'cutting-mat-a3.jpg')],
        stock: 40,
        featured: false,
        tags: ['cutting', 'mat'],
        specifications: {
            'Size': 'A3',
            'Material': 'PVC'
        }
    },
    {
        name: 'Cutting Mat A4',
        slug: 'cutting-mat-a4',
        description: 'Self-healing cutting mat.',
        price: 500,
        category: 'Art & Drafting Supplies',
        images: [getImage('drawing/accessories', 'cutting-mat-a4.jpg')],
        stock: 60,
        featured: false,
        tags: ['cutting', 'mat'],
        specifications: {
            'Size': 'A4',
            'Material': 'PVC'
        }
    },

    // ============================================
    // 3. MEASURING INSTRUMENTS (Add more)
    // ============================================
    {
        name: 'Digital Vernier Calipers',
        slug: 'digital-vernier-calipers',
        description: 'Precision digital vernier calipers with LCD display.',
        price: 2500,
        category: 'Measuring Instruments',
        images: [getImage('measuring', 'digital-vernier-calipers.jpg')],
        stock: 25,
        featured: true,
        tags: ['calipers', 'vernier', 'digital'],
        specifications: {
            'Range': '150mm',
            'Accuracy': '0.01mm'
        }
    },

    // ============================================
    // 4. HAND TOOLS (6)
    // ============================================
    {
        name: 'Pipe Wrench (14")',
        slug: 'pipe-wrench-14',
        description: 'Durable 14-inch pipe wrench.',
        price: 1200,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'pipe-wrench-14.jpg')],
        stock: 20,
        featured: false,
        tags: ['wrench', 'pipe'],
        specifications: {
            'Length': '14 inches',
            'Material': 'Steel'
        }
    },
    {
        name: 'Combination Spanner Set',
        slug: 'combination-spanner-set',
        description: 'Professional combination spanner set (8mm - 19mm).',
        price: 2500,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'combination-spanner-set.jpg')],
        stock: 30,
        featured: true,
        tags: ['spanner', 'set'],
        specifications: {
            'Sizes': '8mm - 19mm',
            'Pieces': '12'
        }
    },
    {
        name: 'Socket Spanner Set',
        slug: 'socket-spanner-set',
        description: 'Professional socket spanner set (6mm - 24mm).',
        price: 3500,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'socket-spanner-set.jpg')],
        stock: 20,
        featured: false,
        tags: ['socket', 'spanner'],
        specifications: {
            'Sizes': '6mm - 24mm',
            'Pieces': '20'
        }
    },
    {
        name: 'Combination Pliers',
        slug: 'combination-pliers',
        description: 'Professional combination pliers with gripping and cutting functions.',
        price: 800,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'combination-pliers.jpg')],
        stock: 40,
        featured: true,
        tags: ['pliers', 'combination'],
        specifications: {
            'Length': '200mm',
            'Material': 'Steel'
        }
    },
    {
        name: 'Long Nose Pliers',
        slug: 'long-nose-pliers',
        description: 'Professional long nose pliers for precision work.',
        price: 700,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'long-nose-pliers.jpg')],
        stock: 35,
        featured: false,
        tags: ['pliers', 'long-nose'],
        specifications: {
            'Length': '200mm',
            'Material': 'Steel'
        }
    },
    {
        name: 'Side Cutter',
        slug: 'side-cutter',
        description: 'Professional side cutter for cutting wires.',
        price: 600,
        category: 'Hand Tools',
        images: [getImage('hand-tools', 'side-cutter.jpg')],
        stock: 40,
        featured: false,
        tags: ['cutter', 'wire'],
        specifications: {
            'Length': '150mm',
            'Material': 'Steel'
        }
    },

    // ============================================
    // 5. ELECTRICAL TOOLS (5)
    // ============================================
    {
        name: 'Digital Multimeter DT9605',
        slug: 'digital-multimeter-dt9605',
        description: 'Professional digital multimeter for electrical testing.',
        price: 2500,
        category: 'Electrical Tools',
        images: [getImage('electrical', 'digital-multimeter-dt9605.jpg')],
        stock: 25,
        featured: true,
        tags: ['multimeter', 'digital', 'testing'],
        specifications: {
            'Model': 'DT9605',
            'Functions': 'Voltage, Current, Resistance'
        }
    },
    {
        name: 'Soldering Gun',
        slug: 'soldering-gun',
        description: 'Professional soldering gun for electronics work.',
        price: 1200,
        category: 'Electrical Tools',
        images: [getImage('electrical', 'soldering-gun.jpg')],
        stock: 30,
        featured: false,
        tags: ['soldering', 'electronics'],
        specifications: {
            'Power': '40W'
        }
    },
    {
        name: 'Solder Sucker',
        slug: 'solder-sucker',
        description: 'Professional solder sucker for removing solder.',
        price: 450,
        category: 'Electrical Tools',
        images: [getImage('electrical', 'solder-sucker.jpg')],
        stock: 35,
        featured: false,
        tags: ['solder', 'removal'],
        specifications: {
            'Type': 'Solder Sucker'
        }
    },
    {
        name: 'Electrical Screwdriver Set',
        slug: 'electrical-screwdriver-set',
        description: 'Professional insulated screwdriver set.',
        price: 1500,
        category: 'Electrical Tools',
        images: [getImage('electrical', 'electrical-screwdriver-set.jpg')],
        stock: 25,
        featured: false,
        tags: ['screwdriver', 'insulated'],
        specifications: {
            'Pieces': '6',
            'Type': 'Insulated'
        }
    },
    {
        name: 'Cable Stripper',
        slug: 'cable-stripper',
        description: 'Professional cable stripper for wire insulation removal.',
        price: 500,
        category: 'Electrical Tools',
        images: [getImage('electrical', 'cable-stripper.jpg')],
        stock: 45,
        featured: false,
        tags: ['cable', 'stripper', 'wire'],
        specifications: {
            'Type': 'Cable Stripper',
            'Adjustable': 'Yes'
        }
    },

    // ============================================
    // 6. SAFETY EQUIPMENT (10)
    // ============================================
    {
        name: 'Blue Dust Coat',
        slug: 'blue-dust-coat',
        description: 'Professional blue dust coat for lab and workshop. Durable and comfortable.',
        price: 1400,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785374933/assorted-dust-coats_m0fgd5.jpg'],
        stock: 40,
        featured: false,
        tags: ['dust-coat', 'blue', 'lab'],
        specifications: {
            'Color': 'Blue',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Cleaning Gloves',
        slug: 'cleaning-gloves',
        description: 'Durable rubber cleaning gloves for lab and workshop use.',
        price: 250,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785374949/cleaning-gloves_bwo0px.jpg'],
        stock: 80,
        featured: false,
        tags: ['gloves', 'cleaning', 'rubber'],
        specifications: {
            'Material': 'Rubber',
            'Type': 'Cleaning Gloves',
            'Sizes': 'M, L, XL'
        }
    },
    {
        name: 'Navy Blue Dust Coat',
        slug: 'navy-blue-dust-coat',
        description: 'Professional navy blue dust coat for lab and workshop. Stain-resistant and durable.',
        price: 1500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785374985/navy-blue-dustcoat_mw9zcw.jpg'],
        stock: 35,
        featured: false,
        tags: ['dust-coat', 'navy', 'lab'],
        specifications: {
            'Color': 'Navy Blue',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'White Lab Coat',
        slug: 'white-lab-coat',
        description: 'Classic white cotton lab coat for practical sessions. Professional and breathable.',
        price: 1200,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785374968/white-dust-coat_hwox4o.webp'],
        stock: 60,
        featured: true,
        tags: ['lab', 'coat', 'white'],
        specifications: {
            'Color': 'White',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Safety Overall/Coverall',
        slug: 'safety-overall-coverall',
        description: 'Durable overall/coverall for workshop and practical sessions. Essential for safety.',
        price: 1500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375175/safety-overalls_gacock.jpg'],
        stock: 30,
        featured: false,
        tags: ['overall', 'coverall', 'workshop'],
        specifications: {
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Ace Mamba Safety Boots',
        slug: 'ace-mamba-safety-boots',
        description: 'Durable steel-toe safety boots. Comfortable and protective for demanding environments.',
        price: 4500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375191/ace-mamba-safety-boots_rv6uzh.webp'],
        stock: 30,
        featured: true,
        tags: ['safety', 'boots', 'steel-toe', 'ace'],
        specifications: {
            'Material': 'Leather',
            'Toe Type': 'Steel',
            'Sole': 'Anti-slip'
        }
    },
    {
        name: 'Soldier Safety Boots',
        slug: 'soldier-safety-boots',
        description: 'Robust safety boots for demanding environments. Ideal for engineering students.',
        price: 3800,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375200/soldier-safety-boots_ux3vvr.jpg'],
        stock: 25,
        featured: false,
        tags: ['safety', 'boots', 'steel-toe', 'soldier'],
        specifications: {
            'Material': 'Leather',
            'Toe Type': 'Steel',
            'Sole': 'Heavy Duty'
        }
    },
    {
        name: 'Knicker Safety Boots',
        slug: 'knicker-safety-boots',
        description: 'Durable steel-toe safety boots with knicker design. Protective and comfortable.',
        price: 4000,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375241/knicker-safety-boots_xihy6p.png'],
        stock: 20,
        featured: false,
        tags: ['safety', 'boots', 'steel-toe', 'knicker'],
        specifications: {
            'Material': 'Leather',
            'Toe Type': 'Steel',
            'Sole': 'Anti-slip'
        }
    },
    {
        name: 'Welding Goggles',
        slug: 'welding-goggles',
        description: 'Protective welding goggles for workshop and practical sessions. Essential for safety.',
        price: 500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375222/welding-googles_q5vmpg.jpg'],
        stock: 50,
        featured: false,
        tags: ['goggles', 'safety', 'welding'],
        specifications: {
            'Material': 'Plastic',
            'Protection': 'Impact/UV'
        }
    },
    {
        name: 'Leather Safety Gloves',
        slug: 'leather-safety-gloves',
        description: 'Durable leather safety gloves for workshop. Provides excellent hand protection.',
        price: 800,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785375498/leather-safety-gloves_zxt3an.jpg'],
        stock: 40,
        featured: false,
        tags: ['gloves', 'leather', 'safety'],
        specifications: {
            'Material': 'Leather',
            'Type': 'Safety Gloves'
        }
    },

    // ============================================
    // 7. STATIONERY & OFFICE SUPPLIES (2)
    // ============================================
    {
        name: 'Mechanical Pencil',
        slug: 'mechanical-pencil',
        description: 'Professional mechanical pencil with 0.5mm leads.',
        price: 350,
        category: 'Stationery & Office Supplies',
        images: [getImage('stationery', 'mechanical-pencil.jpg')],
        stock: 100,
        featured: false,
        tags: ['pencil', 'mechanical'],
        specifications: {
            'Lead Size': '0.5mm',
            'Material': 'Metal Barrel'
        }
    },
    {
        name: 'SMP Advanced Tables',
        slug: 'smp-advanced-tables',
        description: 'Essential reference book with advanced mathematical tables.',
        price: 650,
        category: 'Stationery & Office Supplies',
        images: [getImage('stationery', 'smp-advanced-tables.jpg')],
        stock: 30,
        featured: false,
        tags: ['tables', 'reference'],
        specifications: {
            'Type': 'Reference Book',
            'Includes': 'Trigonometric, Logarithmic Tables'
        }
    },

    // ============================================
    // 8. TEXTBOOKS & REFERENCE (2)
    // ============================================
    {
        name: 'Engineering Mathematics — K.A. Stroud',
        slug: 'engineering-mathematics-stroud',
        description: 'Comprehensive engineering mathematics textbook by K.A. Stroud.',
        price: 4500,
        category: 'Textbooks & Reference',
        images: [getImage('textbooks', 'engineering-mathematics-stroud.jpg')],
        stock: 20,
        featured: true,
        tags: ['textbook', 'mathematics', 'stroud'],
        specifications: {
            'Author': 'K.A. Stroud',
            'Edition': '7th Edition',
            'Pages': '1300'
        }
    },
    {
        name: 'Engineering Mathematics — John Bird',
        slug: 'engineering-mathematics-bird',
        description: 'Comprehensive engineering mathematics textbook by John Bird.',
        price: 4000,
        category: 'Textbooks & Reference',
        images: [getImage('textbooks', 'engineering-mathematics-bird.jpg')],
        stock: 20,
        featured: false,
        tags: ['textbook', 'mathematics', 'bird'],
        specifications: {
            'Author': 'John Bird',
            'Edition': '8th Edition',
            'Pages': '1200'
        }
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        await Product.deleteMany({});
        console.log('🗑️ Removed existing products');

        const inserted = await Product.insertMany(products);
        console.log(`✅ ${inserted.length} products seeded successfully`);

        console.log('\n📦 Seeded Products by Category:');
        const categories = {};
        inserted.forEach(p => {
            if (!categories[p.category]) categories[p.category] = [];
            categories[p.category].push(p.name);
        });
        Object.keys(categories).forEach(cat => {
            console.log(`\n   ${cat}: ${categories[cat].length} products`);
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Seed error:', error.message);
        process.exit(1);
    }
};

seedDB();
