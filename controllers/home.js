const express = require('express');
const router = express.Router();
const Lists = require('../models/Lists.js')

router.get('/', (req,res) => {
    Lists.find({}, (err, foundLists) => {
        if (err) {
            console.error(err)
        } else {
            foundLists = JSON.stringify(foundLists)
            res.send(foundLists)   
        }
    })
    
})


router.post('/', (req,res) => {
    const newList = new Lists({
        title: req.body.title,
        tasks: req.body.tasks
    })

    newList.save(newList, (err, createdList) => {
        if (err) {
            console.error(err)
        } else {
            res.send(createdList)
        }
    })
})
module.exports = router;
