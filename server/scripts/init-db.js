const fs = require('fs');
const path = require('path');
const db = require('../config/db');

const init = async () => {
  try {
    console.log('Dropping all tables...');
    await db.query(`
      DO $$ DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
          EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
        END LOOP;
      END $$;
    `);
    console.log('All tables dropped.');

    const sql = fs.readFileSync(path.join(__dirname, '../config/database.sql'), 'utf8');
    console.log('Initializing database...');
    await db.query(sql);
    console.log('Database initialization complete.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

init();
