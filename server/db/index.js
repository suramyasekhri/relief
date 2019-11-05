const { Pool } = require('pg');

const connectionString = process.env.NODE_ENV ? 'postgres://thdlprys:yXB-PdWjfDPjw4EEKMfEy12ZaprlvcMp@salt.db.elephantsql.com:5432/thdlprys' : '';

const pool = new Pool({
  connectionString,
});

module.exports = pool;
