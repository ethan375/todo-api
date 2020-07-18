const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.PRODUCTION_MONGO, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log(`connected to the db`)
});

mongoose.connection.on('disconnected', (err) => {
    throw(`Disconnected from the db: \n ${err}`)
});

mongoose.connection.on('error', (err) => {
    console.error(err)
})