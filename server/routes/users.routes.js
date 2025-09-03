const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth.middleware');
const userController = require('../controllers/users.controller');
const upload = require('../middleware/file.middleware');

// GET /api/users/profile
router.get('/profile', protect, userController.getProfile);

// PUT /api/users/profile
router.put('/profile', protect, userController.updateProfile);

// POST /api/users/upload-document
router.post('/upload-document', protect, upload, userController.uploadDocument);

// GET /api/users/documents
router.get('/documents', protect, userController.getDocuments);

// DELETE /api/users/documents/:id
router.delete('/documents/:id', protect, userController.deleteDocument);

// Admin routes
// GET /api/admin/users
router.get('/admin/users', protect, admin, userController.getAllUsers);

// GET /api/admin/users/:id
router.get('/admin/users/:id', protect, admin, userController.getUserById);

// PUT /api/admin/users/:id/approve
router.put('/admin/users/:id/approve', protect, admin, userController.approveUser);

// PUT /api/admin/users/:id/reject
router.put('/admin/users/:id/reject', protect, admin, userController.rejectUser);

// PUT /api/admin/users/:id/suspend
router.put('/admin/users/:id/suspend', protect, admin, userController.suspendUser);

// GET /api/admin/onboarding-stats
router.get('/admin/onboarding-stats', protect, admin, userController.getOnboardingStats);

module.exports = router;
