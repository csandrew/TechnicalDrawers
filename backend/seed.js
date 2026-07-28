require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const products = [
    // ============================================
    // SCIENTIFIC CALCULATORS
    // ============================================
    {
        name: 'Casio FX-991ES Plus Calculator',
        slug: 'casio-fx-991es-plus',
        description: 'The most popular scientific calculator for engineering students. Features 417 functions with solar + battery power.',
        price: 3500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785159337/fx991esplus_ukvpge.png'],
        stock: 50,
        featured: true,
        tags: ['engineering', 'calculator', 'fx-991es'],
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Chemical & Petroleum Engineering', 'Aeronautical Engineering', 'Mechatronics Engineering', 'Geospatial Engineering', 'Automotive Engineering'],
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
        price: 4500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785159438/fx991ex_r737p3.png'],
        stock: 30,
        featured: true,
        tags: ['advanced', 'actuarial', 'statistics', 'calculator'],
        courses: ['Mechatronics Engineering', 'Chemical & Petroleum Engineering', 'Aeronautical Engineering'],
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
        price: 3300,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785159446/fx570esplus_ltqe2n.png'],
        stock: 35,
        featured: false,
        tags: ['engineering', 'science', 'calculator'],
        courses: ['Civil Engineering', 'Mechanical Engineering', 'Automotive Engineering', 'Quantity Survey', 'Building Construction Technology', 'Construction Management'],
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
        price: 1850,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785159350/fx82ms_v84bnc.png'],
        stock: 60,
        featured: false,
        tags: ['beginner', 'school', 'calculator'],
        courses: ['Urban & Regional Planning', 'Architecture', 'Architectural Studies', 'Geospatial Engineering'],
        specifications: {
            'Power': 'Battery Only',
            'Functions': '240',
            'Type': 'Scientific',
            'Model': 'FX-82MS'
        }
    },

    // ============================================
    // ENGINEERING & DRAWING
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
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Aeronautical Engineering', 'Architecture', 'Architectural Studies', 'Building Construction Technology', 'Automotive Engineering'],
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
        courses: ['Architecture', 'Architectural Studies', 'Urban & Regional Planning', 'Building Construction Technology', 'Quantity Survey', 'Geospatial Engineering'],
        specifications: {
            'Angles': '30°/60°/90°, 45°/45°/90°',
            'Material': 'Clear Plastic',
            'Scale': 'Black'
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
        courses: ['Architecture', 'Architectural Studies', 'Building Construction Technology', 'Quantity Survey', 'Urban & Regional Planning', 'Geospatial Engineering'],
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
        category: 'Engineering & Drawing',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550233/drawingset_kqba5n.jpg'],
        stock: 70,
        featured: false,
        tags: ['ruler', 'scale', 'metric'],
        courses: ['Architecture', 'Architectural Studies', 'Urban & Regional Planning', 'Quantity Survey', 'Building Construction Technology', 'Geospatial Engineering', 'Civil Engineering'],
        specifications: {
            'Length': '30cm',
            'Material': 'Plastic',
            'Type': 'Metric'
        }
    },

    // ============================================
    // LABORATORY SUPPLIES
    // ============================================
    {
        name: 'White Lab Coat - Student Fit',
        slug: 'white-lab-coat-student-fit',
        description: 'Classic white cotton lab coat for practical sessions. Professional and breathable. Available in multiple sizes.',
        price: 1200,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550678/white-dustcoat_ghtyii.jpg'],
        stock: 60,
        featured: true,
        tags: ['lab', 'coat', 'safety', 'white'],
        courses: ['Chemical & Petroleum Engineering', 'Mechatronics Engineering', 'Aeronautical Engineering', 'Mechanical Engineering'],
        specifications: {
            'Color': 'White',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Navy Blue Lab Coat',
        slug: 'navy-blue-lab-coat',
        description: 'Professional navy blue lab coat for laboratory use. Durable and stain-resistant.',
        price: 1400,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550677/navy-blue-dustcoat_o6tphh.jpg'],
        stock: 40,
        featured: false,
        tags: ['lab', 'coat', 'safety', 'navy'],
        courses: ['Chemical & Petroleum Engineering', 'Mechatronics Engineering', 'Aeronautical Engineering'],
        specifications: {
            'Color': 'Navy Blue',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },
    {
        name: 'Assorted Lab Coat',
        slug: 'assorted-lab-coat',
        description: 'Colorful lab coat available in assorted colors. Perfect for practical sessions.',
        price: 1300,
        category: 'Laboratory Supplies',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550677/assorted-dustcoat_dr8xrr.jpg'],
        stock: 50,
        featured: false,
        tags: ['lab', 'coat', 'assorted'],
        courses: ['Chemical & Petroleum Engineering', 'Mechatronics Engineering', 'Aeronautical Engineering'],
        specifications: {
            'Color': 'Assorted',
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL'
        }
    },

    // ============================================
    // SAFETY EQUIPMENT
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
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Building Construction Technology', 'Construction Management', 'Automotive Engineering', 'Aeronautical Engineering'],
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
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Building Construction Technology', 'Construction Management', 'Automotive Engineering'],
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
        courses: ['Mechanical Engineering', 'Automotive Engineering', 'Mechatronics Engineering', 'Aeronautical Engineering'],
        specifications: {
            'Type': 'Welding',
            'Material': 'Plastic',
            'Protection': 'UV/IR'
        }
    },

    // ============================================
    // MATHEMATICS EQUIPMENT
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
        courses: ['Quantity Survey', 'Building Construction Technology', 'Construction Management', 'Civil Engineering', 'Geospatial Engineering'],
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
        courses: [],
        specifications: {
            'Length': '150cm',
            'Material': 'Fiberglass',
            'Type': 'Flexible'
        }
    },

    // ============================================
    // NOTEBOOKS & BOOKS
    // ============================================
    {
        name: 'Engineering Mathematics Textbook',
        slug: 'engineering-mathematics-textbook',
        description: 'Comprehensive engineering mathematics textbook covering all core topics for engineering students.',
        price: 2500,
        category: 'Notebooks & Books',
        images: ['https://res.cloudinary.com/j2zcgbug/image/upload/v1784550221/a4-hardcover-books_mbvxvs.jpg'],
        stock: 20,
        featured: true,
        tags: ['book', 'textbook', 'engineering'],
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Aeronautical Engineering', 'Chemical & Petroleum Engineering', 'Mechatronics Engineering', 'Automotive Engineering', 'Geospatial Engineering'],
        specifications: {
            'Pages': '800+',
            'Author': 'Multiple',
            'Edition': '6th Edition'
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
        courses: ['Mechanical Engineering', 'Civil Engineering', 'Aeronautical Engineering', 'Chemical & Petroleum Engineering', 'Mechatronics Engineering', 'Automotive Engineering', 'Geospatial Engineering', 'Architecture'],
        specifications: {
            'Pages': '300',
            'Includes': 'Trigonometric, Logarithmic Tables',
            'Type': 'Reference'
        }
    },

    // ============================================
    // WRITING INSTRUMENTS
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
        courses: [],
        specifications: {
            'Lead Size': '0.5mm',
            'Includes': 'Pencil + Lead Refills',
            'Material': 'Metal Barrel'
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
