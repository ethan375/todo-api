const { Client, Pool } = require('pg');
const client = new Client();
const pool = new Pool();

pool.query('SELECT NOW()', (err, res)=> {
    console.log(err, res)
    pool.end()
});

(async function connect() {
    await client.connect()
}())