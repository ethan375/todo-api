const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/create', ( req, res ) => {
    let body = req.body
    
    let newUser = new User({
        username: body.username,
        password: body.password,
        email: body.email,
        lists: body.lists,
    })


    newUser.save( newUser, (err, createdUser) => {
        if ( err ) {
            console.error(err)
        } else {
            res.send(createdUser)
        }
    })
})



module.exports = router;