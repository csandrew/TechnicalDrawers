const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendResponse, sendError } = require('../utils/responseHandler');

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, password, institution, isInstitution } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return sendError(res, 400, 'Email already registered');
        }

        const user = await User.create({
            name,
            email,
            phone,
            password,
            institution,
            isInstitution: isInstitution || false
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        sendResponse(res, 201, {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                isInstitution: user.isInstitution
            }
        }, 'User registered successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return sendError(res, 401, 'Invalid credentials');
        }

        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return sendError(res, 401, 'Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        sendResponse(res, 200, {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                isInstitution: user.isInstitution
            }
        }, 'Login successful');
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

// Get profile
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        sendResponse(res, 200, user);
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

module.exports = router;
