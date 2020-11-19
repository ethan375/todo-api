const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Lists = require('../models/Lists.js')

router.post('/login', ( req, res ) => {
    body = req.body

    User.find( { username: body.username }, (err, foundUser) => {
        foundUser = foundUser[0]
        if ( err ) {
            res.statusCode = 300;
            res.send( {
                error: true,
                message: `username not found`
            })
        } else {
            bcrypt.compare( body.password, foundUser.password, ( err, result ) => {
                if ( err ) {
                    console.error(err)
                    res.statusCode = 500;
                    res.send({
                        error: true,
                        message: `Something went wrong`
                    })
                } else {
                    if ( result === true) {
                        res.statusCode = 200;
                        res.send({
                            body: `passwords matched!`
                        })
                    } else {
                        res.send({
                            error: true,
                            message: `username or password is wrong`
                        })
                        console.log(`the result is ${result}`)
                    }
                }
            })
        }
    })

})



module.exports = router;
