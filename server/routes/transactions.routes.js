const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const transactionController = require('../controllers/transactions.controller');

// GET /api/transactions
router.get('/', protect, transactionController.getTransactions);

// GET /api/transactions/:id
router.get('/:id', protect, transactionController.getTransactionById);

// POST /api/transactions
router.post('/', protect, transactionController.createTransaction);

// POST /api/transactions/:id/refund
router.post('/:id/refund', protect, transactionController.refundTransaction);

// GET /api/transactions/stats
router.get('/stats', protect, transactionController.getTransactionStats);

// POST /api/webhooks/:gateway
router.post('/webhooks/:gateway', transactionController.handleWebhook);

module.exports = router;
