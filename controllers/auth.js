const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/Users')
const Lists = require('../models/Lists.js')

router.post('/login', ( req, res ) => {
    body = req.body

    User.find( { username: body.username }, (err, foundUser) => {
        if ( err ) {
            res.statusCode = 300;
            res.send( {
                error: true,
                message: `username or password not found`
            })
        } else {
            bcrypt.compare( body.password, foundUser.password, ( err, res ) => {
                if ( err ) {
                    res.statusCode = 300;
                    res.send({
                        error: true,
                        message: `username or password not found`
                    })
                } else {
                    res.statusCode = 200;
                    res.send({
                        body: {
                            status: `user found next step is to setup the session!`
                        }
                    })
                }
            })
        }
    })

})



module.exports = router;
