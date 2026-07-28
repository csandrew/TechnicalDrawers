require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to Database
connectDB();

// CORS Configuration
const corsOptions = {
    origin: [
        'https://technicaldrawers.co.ke',
        'http://technicaldrawers.co.ke',
        'https://www.technicaldrawers.co.ke',
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Technical Drawers API is running' });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
