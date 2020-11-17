const express = require('express');
const router = express.Router();
const task = require('../models/Tasks');
const list = require('../models/Lists');

router.get('/', (req,res) => {
    let allTasks = null;
    let allLists = null;

    task.find({}, (err, foundTasks) => {
        if (err) {
            console.error(err);
        } else { 
            allTasks = foundTasks
        } 
    })

    list.find({}, (err, foundLists) => {
        if (err) {
            console.error(err);
        } else {
            allLists = foundLists
            console.log(allLists);
        }
        console.log(allTasks);
        console.log(allLists)
    })
    console.log(allLists);

    const stats = {}
    stats.lists = {}
    stats.lists.total = 0;
    stats.lists.completed = 0;
    stats.tasks = {}
    stats.tasks.total = 0;
    stats.tasks.finished = 0;
    stats.tasks.remaining = 0;

    // for (let i = 0; i < allLists; i++) {
    //     stats.lists.total ++;
    //     let list = allLists[i];
    // }

    // for(let i = 0; i < this.allTasks.length; i++) {
    //     stats.tasks.total ++;
    //     let task = allTasks[i]
    //     if (task.completed) {
    //         stats.tasks.finished ++
    //     } else {
    //         stats.task.remaining ++
    //     }
    // }

    // res.body = stats;
    // res.send(body)
})


module.exports = router