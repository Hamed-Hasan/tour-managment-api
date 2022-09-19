const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');

// DB mongoose.Connection
mongoose.connect(process.env.DB_LOCAL).then(() => {
    console.log(`DB Connection Successfully`.gray.bold)
})



// server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
})