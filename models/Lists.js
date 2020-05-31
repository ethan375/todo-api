const { Pool } = require('pg');
pool = new Pool();

function getAllLists() {
    pool.query('SELECT * FROM lists', (err, res) => {
        if (err) {
            throw(err);
        } else {
            console.log(res);
            return 'this is a response at the moment'
        }
    });
}

module.exports = getAllLists;