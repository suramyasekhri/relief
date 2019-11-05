/**
 * ************************************
 *
 * @module  server.js
 * @author Benjamin Morrison/Timothy Mai
 * @date 11/5/19
 * @description creates pool instance that connects to PostGreSQL database
 *
 * ************************************
 */

const { Pool } = require('pg');

const connectionString = process.env.NODE_ENV ? 'postgres://thdlprys:yXB-PdWjfDPjw4EEKMfEy12ZaprlvcMp@salt.db.elephantsql.com:5432/thdlprys' : '';

const pool = new Pool({
  connectionString,
});

// database has three tables:
// user (columns: username, password, id, email)
// charity (columns: a bunch of stuff)
// donation (columns: id, user_id, charity_id)

module.exports = pool;
