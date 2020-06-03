const express = require('express');
const router = express.Router();
const task = require('../models/Tasks.js');

router.get('/', (req, res)=> {
    task.find({}, (err, foundTasks) => {
        if (err) {
            console.error(err);
        } else {
            res.send(foundTasks);
        }
    })
})


module.exports = router;