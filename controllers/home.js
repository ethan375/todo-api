const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', (req,res) => {
    res.send('ayy you made it lmao');
})

module.exports = router;