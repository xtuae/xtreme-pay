const fs = require('fs');
const path = require('path');
const db = require('../config/db');

const init = async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, '../config/database.sql'), 'utf8');
    console.log('Initializing database...');
    await db.query(sql);
    console.log('Database initialization complete.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

init();
