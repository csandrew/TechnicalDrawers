const { stkPush } = require('../config/mpesa');
const Order = require('../models/Order');

// Initiate Payment
exports.initiatePayment = async (req, res) => {
    try {
        const { orderId, phoneNumber, amount } = req.body;
        
        // Get order
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Ensure amount matches order total
        if (amount !== order.totalAmount) {
            return res.status(400).json({ message: 'Amount does not match order total' });
        }

        // Clean phone number (format: 2547XXXXXXXX)
        let cleanPhone = phoneNumber.replace(/\s/g, '');
        if (cleanPhone.startsWith('0')) {
            cleanPhone = '254' + cleanPhone.slice(1);
        }
        if (!cleanPhone.startsWith('254')) {
            cleanPhone = '254' + cleanPhone;
        }

        // Initiate STK Push
        const accountReference = `TD-${orderId.slice(-6)}`;
        const response = await stkPush(cleanPhone, amount, accountReference, 'Technical Drawers Order');

        // Save M-Pesa request data
        order.mpesa = {
            phoneNumber: cleanPhone,
            amount: amount,
            transactionId: response.CheckoutRequestID,
            callbackData: response
        };
        order.paymentStatus = 'pending';
        await order.save();

        res.json({
            success: true,
            message: 'STK Push sent successfully',
            checkoutRequestId: response.CheckoutRequestID,
            response
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Handle M-Pesa Callback
exports.handleCallback = async (req, res) => {
    try {
        const callbackData = req.body;
        console.log('M-Pesa Callback Received:', JSON.stringify(callbackData, null, 2));

        const { Body } = callbackData;
        const { stkCallback } = Body;

        const { CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

        // Find order by CheckoutRequestID
        const order = await Order.findOne({ 'mpesa.transactionId': CheckoutRequestID });
        if (!order) {
            console.error('Order not found for CheckoutRequestID:', CheckoutRequestID);
            return res.status(404).json({ message: 'Order not found' });
        }

        // Update order based on result
        if (ResultCode === 0) {
            // Payment successful
            const metadata = CallbackMetadata.Item;
            let amount = 0;
            let transactionId = '';

            metadata.forEach(item => {
                if (item.Name === 'Amount') amount = item.Value;
                if (item.Name === 'MpesaReceiptNumber') transactionId = item.Value;
            });

            order.paymentStatus = 'paid';
            order.orderStatus = 'processing';
            order.mpesa.callbackData = callbackData;
            order.mpesa.transactionId = transactionId || CheckoutRequestID;
            await order.save();

            console.log(`✅ Payment successful for order ${order._id}`);
        } else {
            // Payment failed
            order.paymentStatus = 'failed';
            order.mpesa.callbackData = callbackData;
            await order.save();

            console.log(`❌ Payment failed for order ${order._id}: ${ResultDesc}`);
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Callback error:', error.message);
        res.status(500).json({ message: error.message });
    }
};

// Check Payment Status
exports.checkPaymentStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json({
            orderId: order._id,
            paymentStatus: order.paymentStatus,
            orderStatus: order.orderStatus
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};