const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');

require('dotenv').config()


//db
require('./db/db.js');



//Middleware 
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))




// Controllers

const homeController = require('./controllers/home.js');
app.use('/home', homeController);




//Default routes
app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('*', (req, res) => {
    res.send('404 page not found')
});


app.listen(`server is listening on port ${process.env.PORT}`)