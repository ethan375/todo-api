const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const Lists = require('../models/Lists.js')

router.get('/', (req,res) => {
    db = Lists();
    console.log(db);
    res.send('this is a response, look in the console')
})

module.exports = router;