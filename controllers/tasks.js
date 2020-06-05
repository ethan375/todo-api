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
        list: req.body.list
    });

    newTask.save(newTask, (err, createdTask) => {
        if (err) {
            console.error(err)
            res.send(`There was an issue creating the new task`)
        } else {
            // res.send(createdTask)
        }
    })

    list.findById(req.body.list, (err, foundList) => {
        if (err) {
            console.error(err)
            res.send(`There was a problem saving the task to the list`)
        } else {
            foundList.tasks.push(newTask)
            foundList.save()
            res.send(newTask)
        }
    })
})


module.exports = router;