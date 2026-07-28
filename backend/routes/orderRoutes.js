const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/Order');
const { sendResponse, sendError } = require('../utils/responseHandler');

// Create order
router.post('/', auth, async (req, res) => {
    try {
        const order = await Order.create({
            ...req.body,
            userId: req.userId
        });
        sendResponse(res, 201, order, 'Order created successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

// Get user orders
router.get('/my-orders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.userId })
            .sort({ createdAt: -1 });
        sendResponse(res, 200, orders);
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

// Get single order
router.get('/:id', auth, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return sendError(res, 404, 'Order not found');
        }
        sendResponse(res, 200, order);
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

// Update order status (admin only)
router.put('/:id/status', auth, async (req, res) => {
    try {
        const { orderStatus } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { orderStatus },
            { new: true }
        );
        if (!order) {
            return sendError(res, 404, 'Order not found');
        }
        sendResponse(res, 200, order, 'Order status updated');
    } catch (error) {
        sendError(res, 500, error.message);
    }
});

module.exports = router;
