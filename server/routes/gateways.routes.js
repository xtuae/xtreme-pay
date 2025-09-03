const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const gatewayController = require('../controllers/gateways.controller');

// GET /api/gateways
router.get('/', protect, gatewayController.getGateways);

// POST /api/gateways
router.post('/', protect, gatewayController.addGateway);

// PUT /api/gateways/:id
router.put('/:id', protect, gatewayController.updateGateway);

// DELETE /api/gateways/:id
router.delete('/:id', protect, gatewayController.removeGateway);

// POST /api/gateways/:id/test
router.post('/:id/test', protect, gatewayController.testGateway);

// PUT /api/gateways/:id/toggle
router.put('/:id/toggle', protect, gatewayController.toggleGateway);

module.exports = router;
