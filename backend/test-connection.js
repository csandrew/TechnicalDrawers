require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
    console.log('🔍 Testing MongoDB connection...');
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected successfully!');
        console.log('📁 Database:', mongoose.connection.db.databaseName);
        await mongoose.disconnect();
        console.log('✅ Disconnected');
        process.exit(0);
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        process.exit(1);
    }
};

testConnection();
