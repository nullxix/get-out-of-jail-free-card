const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const apiHandler = require('./api/interface.js')
const {PORT} = process.env

app.use(express.json())
app.get('/', (req, res, next) => {
    res.send('WE ARE HERE')
})

app.use('/api', apiHandler)

app.listen(PORT, () => console.log(`Out listening on ${PORT}`))