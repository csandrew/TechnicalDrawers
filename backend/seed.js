require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const products = [
    // ============================================
    // SCIENTIFIC CALCULATORS (4)
    // ============================================
    {
        name: 'Casio FX-991ES Plus Calculator',
        slug: 'casio-fx-991es-plus',
        description: 'The most popular scientific calculator for engineering students. Features 417 functions with solar + battery power.',
        price: 3500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784483314/fx991esplus_n7gacz.png'],
        stock: 50,
        featured: true,
        tags: ['engineering', 'calculator', 'fx-991es'],
        specifications: {
            'Power': 'Solar + Battery',
            'Functions': '417',
            'Type': 'Scientific',
            'Model': 'FX-991ES Plus'
        }
    },
    {
        name: 'Casio FX-991EX Classwiz',
        slug: 'casio-fx-991ex-classwiz',
        description: 'Advanced scientific calculator with spreadsheet functionality. Perfect for actuarial science and statistics students.',
        price: 4200,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784483313/fx991ex_yyjbmq.png'],
        stock: 30,
        featured: true,
        tags: ['advanced', 'actuarial', 'statistics', 'calculator'],
        specifications: {
            'Power': 'Solar + Battery',
            'Functions': '552',
            'Type': 'Scientific',
            'Model': 'FX-991EX Classwiz'
        }
    },
    {
        name: 'Casio FX-570ES Plus Calculator',
        slug: 'casio-fx-570es-plus',
        description: 'Reliable scientific calculator with 417 functions. Ideal for engineering and science students.',
        price: 3000,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784483313/fx570esplus_o8vqev.png'],
        stock: 35,
        featured: false,
        tags: ['engineering', 'science', 'calculator'],
        specifications: {
            'Power': 'Battery Only',
            'Functions': '417',
            'Type': 'Scientific',
            'Model': 'FX-570ES Plus'
        }
    },
    {
        name: 'Casio FX-82MS Calculator',
        slug: 'casio-fx-82ms',
        description: 'Beginner-friendly scientific calculator with 240 functions. Perfect for high school and first-year students.',
        price: 2500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784483312/fx82ms_x10aqw.png'],
        stock: 60,
        featured: false,
        tags: ['beginner', 'school', 'calculator'],
        specifications: {
            'Power': 'Battery Only',
            'Functions': '240',
            'Type': 'Scientific',
            'Model': 'FX-82MS'
        }
    },

    // ============================================
    // ENGINEERING & DRAWING (6)
    // ============================================
    {
        name: 'Technical Drawing Set',
        slug: 'technical-drawing-set',
        description: 'Complete drawing set with compass, divider, and accessories. Essential for engineering students.',
        price: 1200,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550233/drawingset_kqba5n.jpg'],
        stock: 40,
        featured: true,
        tags: ['drawing', 'compass', 'engineering'],
        specifications: {
            'Pieces': '9',
            'Case': 'Plastic Box',
            'Includes': 'Compass, Divider, Pencil Holder, Leads'
        }
    },
    {
        name: 'Oxford Set Square Set',
        slug: 'oxford-set-square',
        description: 'Professional set squares with 30°/60°/90° and 45°/45°/90° angles. Clear plastic with black scale.',
        price: 400,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550270/oxford-set_dzechy.jpg'],
        stock: 80,
        featured: false,
        tags: ['set square', 'angles', 'drawing'],
        specifications: {
            'Angles': '30°/60°/90°, 45°/45°/90°',
            'Material': 'Clear Plastic',
            'Scale': 'Black'
        }
    },
    {
        name: 'Classmate Clear Set',
        slug: 'classmate-clear-set',
        description: 'Clear plastic geometry set with essential drawing tools. Perfect for students.',
        price: 350,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550228/classmate-clear-set_nereez.jpg'],
        stock: 100,
        featured: false,
        tags: ['geometry', 'clear', 'set'],
        specifications: {
            'Includes': 'Ruler, Protractor, Set Squares',
            'Material': 'Clear Plastic',
            'Type': 'Geometry Set'
        }
    },
    {
        name: 'T-Square 60cm',
        slug: 't-square-60cm',
        description: 'Professional T-square for accurate technical drawings. Essential for engineering and architecture students.',
        price: 800,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550274/t-square_laoawn.jpg'],
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
        name: 'Technical Drawing Pen Set',
        slug: 'technical-drawing-pen',
        description: 'Precision technical drawing pens for fine line work. Perfect for drafting and design.',
        price: 650,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550274/technical-drawing-pen_fc2t6h.jpg'],
        stock: 30,
        featured: false,
        tags: ['pen', 'drawing', 'technical'],
        specifications: {
            'Tip Sizes': '0.1mm - 0.8mm',
            'Includes': '6 Pens',
            'Type': 'Technical Drawing'
        }
    },
    {
        name: 'A4 Hardcover Books',
        slug: 'a4-hardcover-books',
        description: 'High-quality A4 hardcover notebooks. Perfect for note-taking and assignments.',
        price: 450,
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550221/a4-hardcover-books_mbvxvs.jpg'],
        stock: 50,
        featured: false,
        tags: ['notebook', 'hardcover', 'a4'],
        specifications: {
            'Size': 'A4',
            'Pages': '200',
            'Binding': 'Hardcover'
        }
    },

    // ============================================
    // WRITING INSTRUMENTS (6)
    // ============================================
    {
        name: 'Mechanical Pencil Set',
        slug: 'mechanical-pencil-set',
        description: 'Professional mechanical pencil set with 0.5mm leads. Perfect for technical drawings.',
        price: 350,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550271/pencils_hmxxdn.png'],
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
        name: 'Bic Fine Point Pens (Pack)',
        slug: 'bic-fine-point-pens',
        description: 'Reliable fine point pens for everyday writing. Smooth ink flow.',
        price: 250,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550228/bic-fine-point_gpedxb.jpg'],
        stock: 80,
        featured: false,
        tags: ['pen', 'bic', 'fine-point'],
        specifications: {
            'Pack Size': '10',
            'Tip': 'Fine Point',
            'Color': 'Black'
        }
    },
    {
        name: 'Bic Blue Pens (Pack)',
        slug: 'bic-blue-pens',
        description: 'Classic blue pens for everyday writing. Smooth and reliable.',
        price: 250,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550227/bic-blue_ketswq.png'],
        stock: 80,
        featured: false,
        tags: ['pen', 'bic', 'blue'],
        specifications: {
            'Pack Size': '10',
            'Color': 'Blue',
            'Type': 'Ballpoint'
        }
    },
    {
        name: 'Nataraj Erasers',
        slug: 'nataraj-erasers',
        description: 'High-quality erasers that cleanly remove pencil marks without smudging.',
        price: 150,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550269/nataraj-erasers_cyxdt7.jpg'],
        stock: 150,
        featured: false,
        tags: ['eraser', 'nataraj', 'stationery'],
        specifications: {
            'Pack Size': '5',
            'Type': 'Soft Eraser',
            'Color': 'White'
        }
    },
    {
        name: 'Highlighter Set',
        slug: 'highlighter-set',
        description: 'Bright fluorescent highlighters for marking important text. Assorted colors.',
        price: 300,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550253/highlighter_onuf6z.jpg'],
        stock: 60,
        featured: false,
        tags: ['highlighter', 'marker', 'stationery'],
        specifications: {
            'Pack Size': '6',
            'Colors': 'Assorted',
            'Type': 'Fluorescent'
        }
    },
    {
        name: 'Whiteboard Markers',
        slug: 'whiteboard-markers',
        description: 'Dry erase markers for whiteboards. Easy to erase and long-lasting.',
        price: 350,
        category: 'Writing Instruments',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550275/whiteboard-maker_qzuy9m.jpg'],
        stock: 40,
        featured: false,
        tags: ['whiteboard', 'marker', 'dry-erase'],
        specifications: {
            'Pack Size': '4',
            'Colors': 'Assorted',
            'Type': 'Dry Erase'
        }
    },

    // ============================================
    // NOTEBOOKS & BOOKS (4)
    // ============================================
    {
        name: 'Shorthand Notebook',
        slug: 'shorthand-notebook',
        description: 'Compact shorthand notebook for quick notes and lectures. Perfect for students.',
        price: 180,
        category: 'Notebooks & Books',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550272/shorthand-notebook_rbpxwj.jpg'],
        stock: 120,
        featured: false,
        tags: ['notebook', 'shorthand', 'lecture'],
        specifications: {
            'Size': 'A5',
            'Pages': '80',
            'Binding': 'Spiral'
        }
    },
    {
        name: 'Exercise Book - Hardcover',
        slug: 'exercise-book-hardcover',
        description: 'Durable hardcover exercise book for assignments and notes. High-quality paper.',
        price: 350,
        category: 'Notebooks & Books',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550234/exercise_book-hardcover_hy0nrg.jpg'],
        stock: 80,
        featured: false,
        tags: ['exercise', 'book', 'hardcover'],
        specifications: {
            'Size': 'A4',
            'Pages': '160',
            'Binding': 'Hardcover'
        }
    },
    {
        name: 'A4 Softcover Books',
        slug: 'a4-softcover-books',
        description: 'Lightweight A4 softcover notebooks for everyday use. Great value.',
        price: 280,
        category: 'Notebooks & Books',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550222/a4-softcover-books_iv5dhs.jpg'],
        stock: 100,
        featured: false,
        tags: ['notebook', 'softcover', 'a4'],
        specifications: {
            'Size': 'A4',
            'Pages': '120',
            'Binding': 'Softcover'
        }
    },
    {
        name: 'Advanced Tables Book',
        slug: 'advanced-tables-book',
        description: 'Essential reference book with advanced mathematical tables. A must-have for engineering students.',
        price: 650,
        category: 'Notebooks & Books',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550222/advanced-tables_qe1j3y.jpg'],
        stock: 30,
        featured: false,
        tags: ['tables', 'reference', 'engineering'],
        specifications: {
            'Pages': '300',
            'Includes': 'Trigonometric, Logarithmic Tables',
            'Type': 'Reference'
        }
    },

    // ============================================
    // LABORATORY SUPPLIES (4)
    // ============================================
    {
        name: 'White Dustcoat - Laboratory',
        slug: 'white-dustcoat',
        description: 'High-quality white dustcoat for laboratory and workshop use. Professional and breathable.',
        price: 1200,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550678/white-dustcoat_ghtyii.jpg'],
        stock: 60,
        featured: true,
        tags: ['dustcoat', 'lab', 'white'],
        specifications: {
            'Color': 'White',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Navy Blue Dustcoat',
        slug: 'navy-blue-dustcoat',
        description: 'Professional navy blue dustcoat for laboratory use. Durable and stain-resistant.',
        price: 1400,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550677/navy-blue-dustcoat_o6tphh.jpg'],
        stock: 40,
        featured: false,
        tags: ['dustcoat', 'lab', 'navy'],
        specifications: {
            'Color': 'Navy Blue',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Assorted Dustcoat',
        slug: 'assorted-dustcoat',
        description: 'Colorful dustcoat available in assorted colors. Perfect for practical sessions.',
        price: 1300,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550677/assorted-dustcoat_dr8xrr.jpg'],
        stock: 50,
        featured: false,
        tags: ['dustcoat', 'lab', 'assorted'],
        specifications: {
            'Color': 'Assorted',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Cleaning Gloves',
        slug: 'cleaning-gloves',
        description: 'Durable rubber gloves for laboratory cleaning and chemical handling.',
        price: 250,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550230/cleaning-gloves_vlkdbs.jpg'],
        stock: 80,
        featured: false,
        tags: ['gloves', 'cleaning', 'lab'],
        specifications: {
            'Material': 'Rubber',
            'Size': 'Universal',
            'Type': 'Cleaning'
        }
    },

    // ============================================
    // SAFETY EQUIPMENT (4)
    // ============================================
    {
        name: 'Ace Mamba Safety Boots',
        slug: 'ace-mamba-safety-boots',
        description: 'Durable steel-toe safety boots for construction and engineering students. Comfortable and protective.',
        price: 4500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550222/ace-mamba-safety-boot_z3ngl9.webp'],
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
        name: 'Soldier Safety Boots',
        slug: 'soldier-safety-boots',
        description: 'Robust safety boots for demanding environments. Ideal for engineering students.',
        price: 3800,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550273/soldier-safety-boots_vysocg.jpg'],
        stock: 25,
        featured: false,
        tags: ['safety', 'boots', 'soldier'],
        specifications: {
            'Material': 'Leather',
            'Toe Type': 'Steel',
            'Sole': 'Heavy Duty'
        }
    },
    {
        name: 'Welding Goggles',
        slug: 'welding-goggles',
        description: 'Protective welding goggles for workshop and practical sessions. Essential for engineering students.',
        price: 500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550274/welding-googles_yc5ezw.jpg'],
        stock: 40,
        featured: false,
        tags: ['welding', 'goggles', 'safety'],
        specifications: {
            'Type': 'Welding',
            'Material': 'Plastic',
            'Protection': 'UV/IR'
        }
    },
    {
        name: 'Cutting Mat',
        slug: 'cutting-mat',
        description: 'Self-healing cutting mat for precision work. Protects surfaces during cutting.',
        price: 650,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550230/cutting-mat_ccb7jq.jpg'],
        stock: 35,
        featured: false,
        tags: ['cutting', 'mat', 'workshop'],
        specifications: {
            'Size': 'A3',
            'Type': 'Self-healing',
            'Material': 'PVC'
        }
    },

    // ============================================
    // MATHEMATICS EQUIPMENT (3)
    // ============================================
    {
        name: 'Mason Tape Measure 5m',
        slug: 'mason-tape-measure',
        description: 'Durable measuring tape for masonry and construction work. Metric markings.',
        price: 300,
        category: 'Mathematics Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550273/tape-measure-mason_xtapoc.jpg'],
        stock: 60,
        featured: false,
        tags: ['tape', 'measuring', 'mason'],
        specifications: {
            'Length': '5m',
            'Material': 'Steel',
            'Type': 'Metric'
        }
    },
    {
        name: 'Tailor\'s Tape Measure',
        slug: 'tailors-tape-measure',
        description: 'Flexible tape measure for taking body and fabric measurements.',
        price: 150,
        category: 'Mathematics Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550273/tape-measure-tailors_cyg4hn.jpg'],
        stock: 80,
        featured: false,
        tags: ['tape', 'measuring', 'tailor'],
        specifications: {
            'Length': '150cm',
            'Material': 'Fiberglass',
            'Type': 'Flexible'
        }
    },
    {
        name: 'Download Geometry Set',
        slug: 'download-geometry-set',
        description: 'Essential geometry set for mathematics and technical drawing.',
        price: 450,
        category: 'Mathematics Equipment',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550231/download_be37xj.jpg'],
        stock: 50,
        featured: false,
        tags: ['geometry', 'set', 'mathematics'],
        specifications: {
            'Includes': 'Ruler, Protractor, Compass',
            'Material': 'Plastic',
            'Type': 'Geometry Set'
        }
    },

    // ============================================
    // EXAM ESSENTIALS (1)
    // ============================================
    {
        name: 'Exam Essentials Kit',
        slug: 'exam-essentials-kit',
        description: 'Complete exam essentials kit including calculator, pens, and geometry set.',
        price: 5000,
        category: 'Exam Essentials',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550231/download_be37xj.jpg'],
        stock: 15,
        featured: true,
        tags: ['exam', 'kit', 'essentials'],
        specifications: {
            'Includes': 'Calculator, Pens, Ruler, Eraser',
            'Case': 'Pencil Case',
            'Type': 'Exam Kit'
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
        
        console.log('\n📦 Seeded Products:');
        inserted.forEach((p, i) => {
            console.log(`   ${i + 1}. ${p.name} - KES ${p.price.toLocaleString()} (${p.category})`);
        });
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Seed error:', error.message);
        process.exit(1);
    }
};

seedDB();
