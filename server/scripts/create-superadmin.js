require('dotenv').config({ path: '../.env' });
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createSuperAdmin = async () => {
  const email = 'hello@hmhlabz.com';
  const password = 'C@rdlm4283';
  const firstName = 'Super';
  const lastName = 'Admin';

  try {
    // Check if user already exists
    const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      console.log('Superadmin with this email already exists.');
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert new superadmin user
    await db.query(
      "INSERT INTO users (email, password_hash, first_name, last_name, role, status, approved_at, approved_by) VALUES ($1, $2, $3, $4, 'superadmin', 'approved', CURRENT_TIMESTAMP, (SELECT id FROM users WHERE role = 'superadmin' LIMIT 1))",
      [email, passwordHash, firstName, lastName]
    );

    console.log('Superadmin user created successfully.');
  } catch (error) {
    console.error('Error creating superadmin user:', error);
  }
};

createSuperAdmin();
