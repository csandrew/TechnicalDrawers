require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

// ============================================
// CLOUDINARY BASE URL
// ============================================
const getImage = (folder, filename) => {
    return `https://res.cloudinary.com/gaovndvn/image/upload/v1785410818/${folder}/${filename}`;
};

const products = [

    // ============================================
    // SCIENTIFIC CALCULATORS (5)
    // ============================================
    {
        name: 'Casio FX-991MS Calculator',
        slug: 'casio-fx-991ms',
        description: 'Advanced scientific calculator with 417 functions. Ideal for engineering students.',
        price: 3200,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409605/fx-991-ms_r2a3kp.png'],
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
        name: 'Casio FX-991EX ClassWiz',
        slug: 'casio-fx-991ex-classwiz',
        description: 'The most advanced scientific calculator with spreadsheet functionality. Perfect for engineering and statistics students.',
        price: 4200,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409591/fx-991-ex_itewbq.png'],
        stock: 30,
        featured: true,
        tags: ['calculator', 'classwiz', 'best-seller'],
        specifications: {
            'Model': 'FX-991EX ClassWiz',
            'Functions': '552',
            'Power': 'Solar + Battery'
        }
    },
    {
        name: 'Casio FX-991ES Plus',
        slug: 'casio-fx-991es-plus',
        description: 'The most popular scientific calculator for engineering students. Features 417 functions with solar + battery power.',
        price: 3500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785408750/fx-991-es-plus_kk08zh.png'],
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
        name: 'Casio FX-82MS Calculator',
        slug: 'casio-fx-82ms',
        description: 'Beginner-friendly scientific calculator with 240 functions. Perfect for high school and first-year university students.',
        price: 2500,
        category: 'Scientific Calculators',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785408746/fx-82-ms_tuumzk.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785408746/fx-82-ex_e010bc.png'],
        stock: 45,
        featured: false,
        tags: ['calculator', 'classwiz'],
        specifications: {
            'Model': 'FX-82EX ClassWiz',
            'Functions': '274',
            'Power': 'Battery Only'
        }
    },

    // ============================================
    // ENGINEERING DRAWING EQUIPMENT
    // ============================================
    {
        name: 'A2 Drawing Board',
        slug: 'a2-drawing-board-wooden',
        description: 'High-quality wooden A2 drawing board with smooth surface. Ideal for engineering and architecture students.',
        price: 3500,
        category: 'Engineering Drawing Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412697/a2-drawing-board-smart_ds5pyf.webp'],
        stock: 20,
        featured: false,
        tags: ['drawing', 'board'],
        specifications: {
            'Size': 'A2',
            'Material': 'Wood'
        }
    },
    {
        name: 'Drawing Board (Smart Board)',
        slug: 'drawing-board-smart',
        description: 'Professional A2 smart drawing board with parallel motion.',
        price: 5500,
        category: 'Engineering Drawing Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412866/drawing-board_czaryd.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410818/engineering-drawing-set_tb2nzd.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410745/60cm-t-square_ot2fsr.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410749/90cm-t-square_olhhpe.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412777/standard-set-squares_kq8vua.jpg'],
        stock: 80,
        featured: true,
        tags: ['set-square', 'angles', 'best-seller'],
        specifications: {
            'Angles': '30°/60°/90°, 45°/45°/90°',
            'Material': 'Clear Plastic'
        }
    },
    {
        name: 'Digital Vernier Calipers',
        slug: 'digital-vernier-calipers',
        description: 'Precision digital vernier calipers with LCD display.',
        price: 2500,
        category: 'Engineering Drawing Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413771/digital-vernier-calipers_r3bks5.jpg'],
        stock: 25,
        featured: true,
        tags: ['calipers', 'vernier', 'digital'],
        specifications: {
            'Range': '150mm',
            'Accuracy': '0.01mm'
        }
    },
    {
        name: 'Drawing Holder (Bazooka)',
        slug: 'drawing-holder-bazooka',
        description: 'Durable drawing holder for storing A2 and A3 drawings.',
        price: 800,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412913/drawing-holder-bazooka_kml0ci.jpg'],
        stock: 25,
        featured: false,
        tags: ['drawing', 'holder'],
        specifications: {
            'Length': '75cm',
            'Material': 'Plastic'
        }
    },

    // ============================================
    // ART & DRAFTING SUPPLIES
    // ============================================
    {
        name: 'Cutting Mat A1',
        slug: 'cutting-mat-a1',
        description: 'Self-healing cutting mat for precision cutting.',
        price: 1500,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413739/cutting-mat_gbamou.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413739/cutting-mat_gbamou.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413739/cutting-mat_gbamou.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413739/cutting-mat_gbamou.jpg'],
        stock: 60,
        featured: false,
        tags: ['cutting', 'mat'],
        specifications: {
            'Size': 'A4',
            'Material': 'PVC'
        }
    },
    {
        name: 'Water Colour Tubes (12 Colours)',
        slug: 'water-colour-tubes-12',
        description: 'Professional water colour paint set with 12 vibrant colours. Perfect for design and art projects.',
        price: 450,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410385/water-colour-tubes-12_ismim1.jpg'],
        stock: 30,
        featured: false,
        tags: ['water-colour', 'paint', 'art'],
        specifications: {
            'Colours': '12',
            'Type': 'Water Colour',
            'Format': 'Tubes'
        }
    },
    {
        name: 'Water Colour Paper',
        slug: 'water-colour-paper',
        description: 'Professional water colour paper for painting and design. Textured surface for water colour techniques.',
        price: 400,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410381/water-colour-paper_doz3sk.jpg'],
        stock: 40,
        featured: false,
        tags: ['water-colour', 'paper', 'art'],
        specifications: {
            'Sheets': '10',
            'Type': 'Water Colour Paper'
        }
    },
    {
        name: 'Water Colour Pad',
        slug: 'water-colour-pad',
        description: 'Professional water colour pad with textured paper. Perfect for water colour painting and design.',
        price: 500,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410378/water-colour-pad_bcni5t.jpg'],
        stock: 30,
        featured: false,
        tags: ['water-colour', 'pad', 'paper', 'art'],
        specifications: {
            'Size': 'A3',
            'Sheets': '20',
            'Type': 'Water Colour Pad'
        }
    },
    {
        name: 'Painting Palette',
        slug: 'painting-palette',
        description: 'Professional painting palette for mixing colours. Perfect for art and design projects.',
        price: 200,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410374/painting-palette_zvr1yc.jpg'],
        stock: 50,
        featured: false,
        tags: ['palette', 'painting', 'art'],
        specifications: {
            'Type': 'Painting Palette',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Paint Brushes Set',
        slug: 'paint-brushes-set',
        description: 'Professional paint brush set for art and design work. Various sizes for different techniques.',
        price: 350,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410371/paint-brushes_ertmoz.jpg'],
        stock: 40,
        featured: false,
        tags: ['paint', 'brushes', 'art', 'design'],
        specifications: {
            'Pieces': '6',
            'Types': 'Round, Flat, Detail',
            'Material': 'Synthetic Bristles'
        }
    },
    {
        name: 'Colour Pencils (12 Colours)',
        slug: 'colour-pencils-12',
        description: 'Professional colour pencil set with 12 vibrant colours. Perfect for design and art projects.',
        price: 350,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410364/colour-pencils-12_pqcoua.jpg'],
        stock: 60,
        featured: false,
        tags: ['colour', 'pencils', 'art', 'design'],
        specifications: {
            'Colours': '12',
            'Type': 'Colour Pencils',
            'Packaging': 'Tin Box'
        }
    },
    {
        name: 'Crayons (24 Colours)',
        slug: 'crayons-24',
        description: 'High-quality crayons for art and design projects. Bright colours for creative work.',
        price: 250,
        category: 'Art & Drafting Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410367/crayons_rjcp8c.jpg'],
        stock: 50,
        featured: false,
        tags: ['crayons', 'art', 'colouring'],
        specifications: {
            'Colours': '24',
            'Type': 'Crayons'
        }
    },

    // ============================================
    // MEASURING INSTRUMENTS
    // ============================================
    {
        name: 'Mason Tape Measure',
        slug: 'mason-tape-measure',
        description: 'Durable measuring tape for masonry and construction work.',
        price: 300,
        category: 'Measuring Instruments',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412391/tape-measure-mason_njlg8o.jpg'],
        stock: 60,
        featured: false,
        tags: ['tape', 'measuring', 'mason'],
        specifications: {
            'Length': '5m',
            'Material': 'Steel'
        }
    },

    // ============================================
    // HAND TOOLS
    // ============================================
    {
        name: 'Pipe Wrench (14")',
        slug: 'pipe-wrench-14',
        description: 'Durable 14-inch pipe wrench.',
        price: 1200,
        category: 'Hand Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410598/pipe-wrench-14_oe2j1n.jpg'],
        stock: 20,
        featured: false,
        tags: ['wrench', 'pipe'],
        specifications: {
            'Length': '14 inches',
            'Material': 'Steel'
        }
    },
    {
        name: 'Long Nose Pliers',
        slug: 'long-nose-pliers',
        description: 'Professional long nose pliers for precision work.',
        price: 700,
        category: 'Hand Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410595/long-nose-pliers_t4yk8o.jpg'],
        stock: 35,
        featured: false,
        tags: ['pliers', 'long-nose'],
        specifications: {
            'Length': '200mm',
            'Material': 'Steel'
        }
    },
    {
        name: 'Ball Pein Hammer',
        slug: 'ball-pein-hammer',
        description: 'Professional ball pein hammer for engineering work.',
        price: 500,
        category: 'Hand Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413548/ball-pein-hammer_w0g9ck.jpg'],
        stock: 30,
        featured: false,
        tags: ['hammer', 'ball-pein'],
        specifications: {
            'Weight': '0.75kg',
            'Material': 'Steel + Wood'
        }
    },
    {
        name: 'Tack Hammer',
        slug: 'tack-hammer',
        description: 'Professional tack hammer for workshop use.',
        price: 400,
        category: 'Hand Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410602/tack-hammer_qj2teb.jpg'],
        stock: 35,
        featured: false,
        tags: ['hammer', 'tack'],
        specifications: {
            'Weight': '0.5kg',
            'Material': 'Steel + Wood'
        }
    },

    // ============================================
    // ELECTRICAL TOOLS
    // ============================================
    {
        name: 'Digital Multimeter DT9605',
        slug: 'digital-multimeter-dt9605',
        description: 'Professional digital multimeter for electrical testing.',
        price: 2500,
        category: 'Electrical Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785421085/digital-multimeter_dptslc.jpg'],
        stock: 25,
        featured: true,
        tags: ['multimeter', 'digital', 'testing'],
        specifications: {
            'Model': 'DT9605',
            'Functions': 'Voltage, Current, Resistance'
        }
    },
    {
        name: 'Solder Sucker',
        slug: 'solder-sucker',
        description: 'Professional solder sucker for removing solder.',
        price: 450,
        category: 'Electrical Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412959/solder-sucker_q44suu.jpg'],
        stock: 35,
        featured: false,
        tags: ['solder', 'removal'],
        specifications: {
            'Type': 'Solder Sucker'
        }
    },
    {
        name: 'Cable Stripper',
        slug: 'cable-stripper',
        description: 'Professional cable stripper for wire insulation removal.',
        price: 500,
        category: 'Electrical Tools',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410592/cable-stripper_sviur3.jpg'],
        stock: 45,
        featured: false,
        tags: ['cable', 'stripper', 'wire'],
        specifications: {
            'Type': 'Cable Stripper',
            'Adjustable': 'Yes'
        }
    },

    // ============================================
    // SAFETY EQUIPMENT
    // ============================================
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785412355/safety-boots_hz2ahm.jpg'],
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
    {
        name: 'Safety Goggles',
        slug: 'safety-goggles',
        description: 'Protective safety goggles for lab and workshop.',
        price: 500,
        category: 'Safety Equipment',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785376474/safety-goggles_whwno5.jpg'],
        stock: 50,
        featured: false,
        tags: ['goggles', 'safety'],
        specifications: {
            'Material': 'Plastic',
            'Protection': 'Impact/UV'
        }
    },

    // ============================================
    // STATIONERY & OFFICE SUPPLIES
    // ============================================
    {
        name: 'Technical Drawing Pen',
        slug: 'technical-drawing-pen',
        description: 'Precision technical drawing pen for fine line work.',
        price: 350,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413732/technical-drawing-pen_qf6pck.jpg'],
        stock: 40,
        featured: false,
        tags: ['pen', 'drawing', 'technical'],
        specifications: {
            'Tip Size': '0.3mm',
            'Type': 'Technical Pen'
        }
    },
    {
        name: 'Highlighter Set',
        slug: 'highlighter-set',
        description: 'Bright fluorescent highlighters for marking important text.',
        price: 300,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413583/highlighter_izdlgd.jpg'],
        stock: 60,
        featured: false,
        tags: ['highlighter', 'marker'],
        specifications: {
            'Pack Size': '6',
            'Colors': 'Assorted'
        }
    },
    {
        name: 'Oxford Geometrical Set',
        slug: 'oxford-geometrical-set',
        description: 'Professional geometry set for mathematics and technical drawing.',
        price: 450,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410865/oxford-geometrical-set_rqxynp.jpg'],
        stock: 50,
        featured: false,
        tags: ['geometry', 'set', 'oxford'],
        specifications: {
            'Includes': 'Ruler, Protractor, Compass',
            'Material': 'Plastic'
        }
    },
    {
        name: 'Classmate Clear Geometrical Set',
        slug: 'classmate-clear-geometrical-set',
        description: 'Clear plastic geometry set with essential drawing tools.',
        price: 350,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410845/classmate-clear-geometrical-set_oqfqi2.jpg'],
        stock: 60,
        featured: false,
        tags: ['geometry', 'clear', 'set'],
        specifications: {
            'Includes': 'Ruler, Protractor, Compass',
            'Material': 'Clear Plastic'
        }
    },
    {
        name: 'Wood Glue',
        slug: 'wood-glue',
        description: 'Strong wood glue for woodworking and repairs.',
        price: 200,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410673/wood-glue_fzm7fw.jpg'],
        stock: 40,
        featured: false,
        tags: ['glue', 'wood', 'adhesive'],
        specifications: {
            'Size': '100ml',
            'Type': 'Wood Glue'
        }
    },
    {
        name: 'HB Pencils (Pack)',
        slug: 'hb-pencils-pack',
        description: 'High-quality HB pencils for everyday writing and drawing.',
        price: 150,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410234/hb-pencils_j7nszz.jpg'],
        stock: 100,
        featured: false,
        tags: ['pencils', 'hb', 'writing'],
        specifications: {
            'Pack Size': '12',
            'Grade': 'HB'
        }
    },
    {
        name: 'Duct Tape',
        slug: 'duct-tape',
        description: 'Heavy-duty duct tape for repairs and projects.',
        price: 350,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410193/duck-tape_bjrug4.jpg'],
        stock: 40,
        featured: false,
        tags: ['tape', 'duct', 'heavy-duty'],
        specifications: {
            'Length': '50m',
            'Width': '50mm'
        }
    },
    {
        name: 'Compressed Charcoal Stick Set',
        slug: 'compressed-charcoal-stick-set',
        description: 'Professional compressed charcoal sticks for art and sketching.',
        price: 250,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410109/compressed-charcoal-stick-set_c6iwzc.jpg'],
        stock: 30,
        featured: false,
        tags: ['charcoal', 'art', 'sketching'],
        specifications: {
            'Pack Size': '12',
            'Type': 'Compressed Charcoal'
        }
    },
    {
        name: 'Araldite Adhesive',
        slug: 'araldite-adhesive',
        description: 'Strong two-part epoxy adhesive for heavy-duty bonding.',
        price: 450,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410100/araldite-adhesive_e8xdmn.jpg'],
        stock: 30,
        featured: false,
        tags: ['araldite', 'adhesive', 'epoxy'],
        specifications: {
            'Size': '35ml',
            'Type': 'Epoxy'
        }
    },
    {
        name: 'All Purpose Adhesive',
        slug: 'all-purpose-adhesive',
        description: 'Versatile all-purpose adhesive for various materials.',
        price: 180,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410093/all-purpose-adhesive_maoudt.jpg'],
        stock: 50,
        featured: false,
        tags: ['adhesive', 'glue', 'all-purpose'],
        specifications: {
            'Size': '50ml',
            'Type': 'General Purpose'
        }
    },
    {
        name: 'A4 Hardcover Books',
        slug: 'a4-hardcover-books',
        description: 'High-quality A4 hardcover notebooks for note-taking.',
        price: 450,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410070/a4-hardcover-books_myvkpi.jpg'],
        stock: 50,
        featured: false,
        tags: ['notebook', 'hardcover', 'a4'],
        specifications: {
            'Size': 'A4',
            'Pages': '200',
            'Binding': 'Hardcover'
        }
    },
    {
        name: 'A4 Brown Envelops (Pack)',
        slug: 'a4-brown-envelops',
        description: 'Durable A4 brown envelopes for mailing and filing.',
        price: 200,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410061/a4-brown-envelops_psimeo.jpg'],
        stock: 80,
        featured: false,
        tags: ['envelops', 'a4', 'brown'],
        specifications: {
            'Pack Size': '10',
            'Size': 'A4'
        }
    },
    {
        name: 'Whiteboard Marker Set',
        slug: 'whiteboard-marker-set',
        description: 'Dry erase markers for whiteboards. Easy to erase and long-lasting.',
        price: 350,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409766/whiteboard-maker_scbqap.jpg'],
        stock: 40,
        featured: false,
        tags: ['whiteboard', 'marker', 'dry-erase'],
        specifications: {
            'Pack Size': '4',
            'Colors': 'Assorted'
        }
    },
    {
        name: 'Super Glue',
        slug: 'super-glue',
        description: 'Strong instant adhesive for quick repairs and bonding.',
        price: 150,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409763/super-glue_jc4oyy.jpg'],
        stock: 80,
        featured: false,
        tags: ['glue', 'super', 'adhesive'],
        specifications: {
            'Size': '20ml',
            'Type': 'Cyanoacrylate'
        }
    },
    {
        name: 'Office Glue',
        slug: 'office-glue',
        description: 'Reliable office glue for paper and light bonding.',
        price: 120,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409754/office-glue_os7f4s.jpg'],
        stock: 100,
        featured: false,
        tags: ['glue', 'office', 'adhesive'],
        specifications: {
            'Size': '50ml',
            'Type': 'PVA'
        }
    },
    {
        name: 'Nataraj Erasers (Pack)',
        slug: 'nataraj-erasers-pack',
        description: 'High-quality erasers that cleanly remove pencil marks without smudging.',
        price: 150,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409751/nataraj-erasers_xe5fda.jpg'],
        stock: 150,
        featured: false,
        tags: ['eraser', 'nataraj', 'stationery'],
        specifications: {
            'Pack Size': '5',
            'Type': 'Soft Eraser'
        }
    },
    {
        name: 'Lithium Battery CR2032',
        slug: 'lithium-battery-cr2032',
        description: 'High-performance lithium battery for calculators and electronic devices.',
        price: 100,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785409748/lithium-battery_dpj24s.jpg'],
        stock: 150,
        featured: false,
        tags: ['battery', 'lithium', 'cr2032'],
        specifications: {
            'Type': 'CR2032',
            'Voltage': '3V'
        }
    },
    {
        name: 'SMP Advanced Tables',
        slug: 'smp-advanced-tables',
        description: 'Essential reference book with advanced mathematical tables.',
        price: 650,
        category: 'Stationery & Office Supplies',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785413173/smp-advanced-tables_ejv1qj.jpg'],
        stock: 30,
        featured: false,
        tags: ['tables', 'reference'],
        specifications: {
            'Type': 'Reference Book',
            'Includes': 'Trigonometric, Logarithmic Tables'
        }
    },

    // ============================================
    // TEXTBOOKS & REFERENCE
    // ============================================
    {
        name: 'Engineering Mathematics — K.A. Stroud',
        slug: 'engineering-mathematics-stroud',
        description: 'Comprehensive engineering mathematics textbook by K.A. Stroud.',
        price: 4500,
        category: 'Textbooks & Reference',
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410818/engineering-drawing-set_tb2nzd.jpg'],
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
        images: ['https://res.cloudinary.com/gaovndvn/image/upload/v1785410818/engineering-drawing-set_tb2nzd.jpg'],
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