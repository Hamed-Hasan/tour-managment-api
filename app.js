const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


// routes




app.get("/", (req, res) => {
    res.send("Route is workable !!!")
})

module.exports = app;