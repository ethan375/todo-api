const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST);

mongoose.connection.on('connected', () => {
    console.log(`connected to the db`)
});

mongoose.connection.on('disconnected', () => {
    throw(`Disconnected from the db`)
});

mongoose.connection.on('error', (err) => {
    console.error(err)
})