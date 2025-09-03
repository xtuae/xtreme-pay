const db = require('../config/db');

exports.getInvoices = async (req, res) => {
  const userId = req.user.id;
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const invoices = await db.query(
      'SELECT * FROM invoices WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3',
      [userId, limit, offset]
    );
    res.status(200).json(invoices.rows);
  } catch (error) {
    console.error('Get invoices error:', error);
    res.status(500).json({ message: 'Server error while retrieving invoices' });
  }
};

exports.createInvoice = async (req, res) => {
  const { customerEmail, customerName, billingAddress, amount, taxAmount, totalAmount, currency, dueDate, paymentTerms, notes, lineItems } = req.body;
  const userId = req.user.id;

  if (!customerEmail || !customerName || !totalAmount) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newInvoice = await db.query(
      'INSERT INTO invoices (user_id, invoice_number, customer_email, customer_name, billing_address, amount, tax_amount, total_amount, currency, due_date, payment_terms, notes, line_items) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
      [userId, `INV-${Date.now()}`, customerEmail, customerName, billingAddress, amount, taxAmount, totalAmount, currency, dueDate, paymentTerms, notes, lineItems]
    );
    res.status(201).json(newInvoice.rows[0]);
  } catch (error) {
    console.error('Create invoice error:', error);
    res.status(500).json({ message: 'Server error while creating invoice' });
  }
};

exports.updateInvoice = async (req, res) => {
  const { id } = req.params;
  const { customerEmail, customerName, billingAddress, amount, taxAmount, totalAmount, currency, dueDate, paymentTerms, notes, lineItems, status } = req.body;
  const userId = req.user.id;

  try {
    const updatedInvoice = await db.query(
      'UPDATE invoices SET customer_email = $1, customer_name = $2, billing_address = $3, amount = $4, tax_amount = $5, total_amount = $6, currency = $7, due_date = $8, payment_terms = $9, notes = $10, line_items = $11, status = $12, updated_at = CURRENT_TIMESTAMP WHERE id = $13 AND user_id = $14 RETURNING *',
      [customerEmail, customerName, billingAddress, amount, taxAmount, totalAmount, currency, dueDate, paymentTerms, notes, lineItems, status, id, userId]
    );
    res.status(200).json(updatedInvoice.rows[0]);
  } catch (error) {
    console.error('Update invoice error:', error);
    res.status(500).json({ message: 'Server error while updating invoice' });
  }
};

exports.deleteInvoice = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await db.query('DELETE FROM invoices WHERE id = $1 AND user_id = $2', [id, userId]);
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error('Delete invoice error:', error);
    res.status(500).json({ message: 'Server error while deleting invoice' });
  }
};

exports.sendInvoice = async (req, res) => {
  // This would involve sending an email with the invoice
  res.status(200).json({ message: 'Invoice sent successfully' });
};

exports.generatePdf = async (req, res) => {
  res.status(200).json({ message: 'PDF generated successfully' });
};
