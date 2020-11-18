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

    lists: {
        type: mongoose.Schema.Types.ObjectId,
        ref: List
    }
})


module.exports = mongoose.model(User, UserSchema)