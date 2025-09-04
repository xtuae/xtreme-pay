require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
const { corsOptions } = require('./config/cors');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route - Server Status
app.get('/', (req, res) => {
  try {
    res.status(200).json({
      status: 'active and running',
      message: 'Xtreme Pay API is running!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'An unexpected error occurred.',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Routes (commented out for debugging)
const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/users.routes');
const gatewayRoutes = require('./routes/gateways.routes');
const transactionRoutes = require('./routes/transactions.routes');
const invoiceRoutes = require('./routes/invoices.routes');

app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/gateways', gatewayRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/invoices', invoiceRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    cors: 'enabled',
    origin: req.headers.origin
  });
});

// Export for Vercel
module.exports = app;
