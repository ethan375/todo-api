const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    tasks: []
})

module.exports = mongoose.model('List', ListSchema);