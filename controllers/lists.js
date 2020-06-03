const express = require('express');
const router = express.Router();
const list = require('../models/Lists.js');

router.get('/', (req,res) => {
    list.find({}, (err, foundLists) => {
        if (err) {
            console.log(err);
        } else {
            res.send(foundLists);
        }
    })
})


module.exports = router;