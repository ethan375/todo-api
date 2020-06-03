const mongoose = require('mongoose');
const Task = require('./Tasks')

const ListSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    tasks: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
    ]
})

module.exports = mongoose.model('List', ListSchema);