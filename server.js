const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

require('dotenv').config()


// db
require('./db/db.js');



//Middleware 
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(cors())





// Controllers

const authController = require('./controllers/auth.js');
app.use('/auth', authController);

const listController = require('./controllers/lists.js');
app.use('/lists', listController);

const taskController = require('./controllers/tasks.js');
app.use('/tasks', taskController);



//Default routes
app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('*', (req, res) => {
    res.send('404 page not found')
});


app.listen(process.env.PORT, ()=> {
    console.log(`server is listening on port ${process.env.PORT}`)
})
