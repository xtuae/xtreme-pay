const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const invoiceController = require('../controllers/invoices.controller');

// GET /api/invoices
router.get('/', protect, invoiceController.getInvoices);

// POST /api/invoices
router.post('/', protect, invoiceController.createInvoice);

// PUT /api/invoices/:id
router.put('/:id', protect, invoiceController.updateInvoice);

// DELETE /api/invoices/:id
router.delete('/:id', protect, invoiceController.deleteInvoice);

// POST /api/invoices/:id/send
router.post('/:id/send', protect, invoiceController.sendInvoice);

// GET /api/invoices/:id/pdf
router.get('/:id/pdf', protect, invoiceController.generatePdf);

module.exports = router;
