const db = require('../config/db');

exports.getProfile = async (req, res) => {
  res.status(200).json(req.user);
};

exports.updateProfile = async (req, res) => {
  const { firstName, lastName, companyName, phone } = req.body;
  const userId = req.user.id;

  try {
    const updatedUser = await db.query(
      'UPDATE users SET first_name = $1, last_name = $2, company_name = $3, phone = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING id, email, first_name, last_name, company_name, phone, role, status',
      [firstName, lastName, companyName, phone, userId]
    );

    res.status(200).json(updatedUser.rows[0]);
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error during profile update' });
  }
};

exports.uploadDocument = async (req, res) => {
  const { documentType } = req.body;
  const { filename, path, size, mimetype } = req.file;
  const userId = req.user.id;

  if (!documentType || !req.file) {
    return res.status(400).json({ message: 'Please provide document type and file' });
  }

  try {
    await db.query(
      'INSERT INTO user_documents (user_id, document_type, file_name, file_path, file_size, mime_type) VALUES ($1, $2, $3, $4, $5, $6)',
      [userId, documentType, filename, path, size, mimetype]
    );
    res.status(201).json({ message: 'Document uploaded successfully' });
  } catch (error) {
    console.error('Document upload error:', error);
    res.status(500).json({ message: 'Server error during document upload' });
  }
};

exports.getDocuments = async (req, res) => {
  const userId = req.user.id;

  try {
    const documents = await db.query('SELECT * FROM user_documents WHERE user_id = $1', [userId]);
    res.status(200).json(documents.rows);
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ message: 'Server error while retrieving documents' });
  }
};

exports.deleteDocument = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    // Optional: Add logic to delete the file from the filesystem as well
    await db.query('DELETE FROM user_documents WHERE id = $1 AND user_id = $2', [id, userId]);
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Delete document error:', error);
    res.status(500).json({ message: 'Server error while deleting document' });
  }
};

// Admin
exports.getAllUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const users = await db.query('SELECT id, email, first_name, last_name, company_name, phone, role, status, created_at FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2', [limit, offset]);
    res.status(200).json(users.rows);
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error while retrieving users' });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.query('SELECT id, email, first_name, last_name, company_name, phone, role, status, created_at FROM users WHERE id = $1', [id]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error('Get user by ID error:', error);
    res.status(500).json({ message: 'Server error while retrieving user' });
  }
};

exports.approveUser = async (req, res) => {
  const { id } = req.params;
  const adminId = req.user.id;

  try {
    await db.query('UPDATE users SET status = $1, approved_at = CURRENT_TIMESTAMP, approved_by = $2 WHERE id = $3', ['approved', adminId, id]);
    res.status(200).json({ message: 'User approved successfully' });
  } catch (error) {
    console.error('Approve user error:', error);
    res.status(500).json({ message: 'Server error while approving user' });
  }
};

exports.rejectUser = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('UPDATE users SET status = $1 WHERE id = $2', ['rejected', id]);
    res.status(200).json({ message: 'User rejected successfully' });
  } catch (error) {
    console.error('Reject user error:', error);
    res.status(500).json({ message: 'Server error while rejecting user' });
  }
};

exports.suspendUser = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('UPDATE users SET status = $1 WHERE id = $2', ['suspended', id]);
    res.status(200).json({ message: 'User suspended successfully' });
  } catch (error) {
    console.error('Suspend user error:', error);
    res.status(500).json({ message: 'Server error while suspending user' });
  }
};

exports.getOnboardingStats = async (req, res) => {
  try {
    const stats = await db.query(
      "SELECT status, COUNT(*) as count FROM users GROUP BY status"
    );
    res.status(200).json(stats.rows);
  } catch (error) {
    console.error('Get onboarding stats error:', error);
    res.status(500).json({ message: 'Server error while retrieving onboarding stats' });
  }
};
