const { Client, Pool } = require('pg');
const client = new Client();
const pool = new Pool();

const res = await pool.query('SELECT NOW()')
await pool.end

await client.connect()

