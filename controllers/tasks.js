const express = require('express');
const router = express.Router();
const task = require('../models/Tasks.js');
const list = require('../models/Lists')

router.get('/:id', (req, res)=> {
    task.findOne({id: req.param.id}, (err, foundTasks) => {
        if (err) {
            console.error(err);
        } else {
            res.send(foundTasks);
        }
    })
})


router.post('/new', (req, res) => {
    const newTask = new task({
        name: req.body.name,
        list: req.body.list,
        compelted: false,
    });

    newTask.save(newTask, (err, createdTask) => {
        if (err) {
            console.error(err)
            res.send(`There was an issue creating the new task`)
        } else {
            // res.send(createdTask)
        }
    })
})




router.patch('/toggle-completed/:id', (req, res) => {
    let id = req.body['_id']
    task.findById(id, (err, foundTask) => {
        if (err) {
            console.error(err)
        } else {
            if ( foundTask.completed == true ) {
                foundTask.completed = false
            } else {
                foundTask.completed = true
            }
            foundTask.save()
            res.send(foundTask)
        }
    })
})


module.exports = router;