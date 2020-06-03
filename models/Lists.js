const mongoose = require('mongoose');
const Task = require('./Tasks')

const ListSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    tasks: [
    {
        default: null,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }
    ]
})

module.exports = mongoose.model('List', ListSchema);