const mongoose = require('mongoose')
const List = require('./Lists');


const UserSchema = new mongoose.Schema({

    username: {
        unique: true,
        required: true,
        type: String,
    },

    email: {
        required: true,
        unique: true,
        type: String,
    },

    password: {
        require: true,
        type: String
    },

    lists: []
})


module.exports = mongoose.model('User', UserSchema)