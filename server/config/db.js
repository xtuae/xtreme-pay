const { Pool } = require('pg');
require('dotenv').config();

let pool;

const getPool = () => {
  if (!pool) {
    try {
      pool = new Pool({
        user: 'postgres',
        host: 'db.foozzcxmfjsvnapyzwgy.supabase.co',
        database: 'postgres',
        password: 'C@rdlm4283',
        port: 5432,
        ssl: {
          rejectUnauthorized: false
        },
        max: 10, // Increased pool size for serverless environment
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      });

      pool.on('connect', () => {
        console.log('Connected to the database');
      });

      pool.on('error', (err) => {
        console.error('Unexpected error on idle client', err);
        process.exit(-1);
      });
    } catch (error) {
      console.error('Failed to create database pool:', error);
      throw new Error('Failed to connect to the database.');
    }
  }
  return pool;
};

module.exports = {
  query: (text, params) => {
    const start = Date.now();
    const pool = getPool();
    return pool.query(text, params).then(res => {
      const duration = Date.now() - start;
      console.log('executed query', { text, duration, rows: res.rowCount });
      return res;
    });
  },
};
