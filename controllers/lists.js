const express = require('express');
const router = express.Router();
const list = require('../models/Lists.js');

router.get('/', (req,res) => {
    list.find({}, (err, foundLists) => {
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


router.get('/', (req,res) => {
    list.find({}, (err, foundLists) => {
        if (err) {
            console.log(err);
        } else {
            res.send(foundLists);
        }
    })
})

//need to delete all the task in the lists!!!
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