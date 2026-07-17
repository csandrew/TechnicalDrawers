const express = require('express');
const router = express.Router();
const { initiatePayment, handleCallback, checkPaymentStatus } = require('../controllers/mpesaController');
const auth = require('../middleware/auth');

router.post('/stk-push', auth, initiatePayment);
router.post('/callback', handleCallback);
router.get('/status/:orderId', auth, checkPaymentStatus);

module.exports = router;