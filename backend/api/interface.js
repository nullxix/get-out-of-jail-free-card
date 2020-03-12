const express = require('express')
const router = express.Router()
const registerHandler = require('./register.js')
const confirmHandler = require('./confirm.js')

router.use('*', (req, res, next) => {
    console.log('api req received')
    next()
})

router.use('/register', registerHandler)

router.use('/confirm', confirmHandler)

module.exports = router