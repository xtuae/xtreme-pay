const db = require('../config/db');

exports.getTransactions = async (req, res) => {
  const userId = req.user.id;
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const transactions = await db.query(
      'SELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3',
      [userId, limit, offset]
    );
    res.status(200).json(transactions.rows);
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({ message: 'Server error while retrieving transactions' });
  }
};

exports.getTransactionById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const transaction = await db.query('SELECT * FROM transactions WHERE id = $1 AND user_id = $2', [id, userId]);
    if (transaction.rows.length === 0) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction.rows[0]);
  } catch (error) {
    console.error('Get transaction by ID error:', error);
    res.status(500).json({ message: 'Server error while retrieving transaction' });
  }
};

exports.createTransaction = async (req, res) => {
  // This would involve interacting with a payment gateway API
  res.status(201).json({ message: 'Transaction created successfully' });
};

exports.refundTransaction = async (req, res) => {
  // This would involve interacting with a payment gateway API
  res.status(200).json({ message: 'Transaction refunded successfully' });
};

exports.getTransactionStats = async (req, res) => {
  const userId = req.user.id;

  try {
    const stats = await db.query(
      'SELECT SUM(amount) as total_revenue, COUNT(*) as total_transactions FROM transactions WHERE user_id = $1 AND status = $2',
      [userId, 'completed']
    );
    res.status(200).json(stats.rows[0]);
  } catch (error) {
    console.error('Get transaction stats error:', error);
    res.status(500).json({ message: 'Server error while retrieving transaction stats' });
  }
};

exports.handleWebhook = async (req, res) => {
  res.status(200).json({ message: 'Webhook handled successfully' });
};
