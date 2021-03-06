const express = require('express');
const router = express.Router();
const task = require('../models/Tasks.js');
const list = require('../models/Lists');
const Tasks = require('../models/Tasks.js');

router.get('/:id', (req, res)=> {
    task.find({_id: req.params.id}, (err, foundTasks) => {
        if (err) {
            res.send(err)
        } else {
            res.send(foundTasks);
        }
    })
})


router.get('/nested-tasks', (req, res) => {
    const taskIds = req.body.tasksArray;

    task.find({id: taskIds}, (err, foundTasks) => {
        if ( err ) {
            console.error("some shit done fucked up!", err)
        } else {
            res.send('check the console')
        }
    })
})


router.post('/new', (req, res) => {
    const newTask = new task({
        name: req.body.name,
        list: req.body.list,
        completed: false
    });

    newTask.save(newTask, (err, createdTask) => {
        if (err) {
            console.error(err)
            res.send(`There was an issue creating the new task`)
        } else {
            list.findById(req.body.list, (err, foundList) => {
                if ( err ) {
                    console.error(`something went wrong in finding the list that the task is going to be saved to`);
                } else {
                    foundList.tasks.push(newTask['_id'])
                    foundList.save()
                    res.send(createdTask)
                }
            })
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

//need to delete the task id from the list array!!!!
router.delete('/delete/:id', (req, res) => {
    task.findByIdAndDelete({_id: req.params.id}, (err, deletedTask) => {
        if (err) {
            console.error( err )
        } else {
            list.find({_id: deletedTask.list}, (err, foundList) => {
                if (err) {
                    console.error(err)
                } else {
                    foundList = foundList[0]
                    deletedTaskPosition = foundList.tasks.indexOf(deletedTask.id)

                    foundList.tasks.splice(deletedTaskPosition, 1)
                    foundList.save()
                }
            })
            res.send(`task deleted: ${deletedTask}`)
        }
    })

})


router.delete('/delete-completed?:ids', ( req,res ) => {
    const taskIds = req.query.id;

    Tasks.deleteMany({_id: { $in: taskIds } },
    (err, result) => {
        if ( err ) {
            console.error(err)
        } else {
            res.send(result)
        }
    })
})



router.post('/bulk-tasks', (req,res) => {
    const tasks = req.body.tasks

    task.find({_id: tasks}, (err, foundTasks) => {
        if (err) {
            console.error(err)
        } else {
            res.send(foundTasks);
        }
    })

})


module.exports = router;