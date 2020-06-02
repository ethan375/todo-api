const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const Lists = require('../models/Lists.js')

router.get('/', (req,res) => {
    console.log(Lists[0])
    let allLists = Lists();
    console.log(allLists)
    // allLists = res.json(allLists)
    res.send({allLists: allLists});
})

module.exports = router;