const mongoose = require('mongoose');
const List = require('./Lists')

const TaskSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
    completed: {
        type: Boolean,
        default: false
    }

})


module.exports = mongoose.model('Task', TaskSchema);