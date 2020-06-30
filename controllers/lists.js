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

router.delete('/delete/:id', (req,res) => {
    list.findByIdAndDelete( {_id: req.params.id}, (err, deletedList ) => {
        if ( err ) {
            console.error(err);
        } else {
            res.send(deletedList)
        }
    })
})


module.exports = router;