const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        required: true,
        type: Sring
    },
    
    tasks: []
})