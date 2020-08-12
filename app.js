const express = require('express')
const app = express()

app.use(express.json());
app.listen('2400', () => {console.log('server started on port 2400')})

module.exports = app;
