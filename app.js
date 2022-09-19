const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const tourRoute = require('./routes/tour.routes')

// routes
app.use('/api/v1/tour', tourRoute)



app.get("/", (req, res) => {
    res.send("Route is workable !!!")
})

module.exports = app;