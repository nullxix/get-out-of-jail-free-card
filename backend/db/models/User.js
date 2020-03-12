const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    social: {
        type: Number,
    },
    bloodType: {
        type: String
    },
    email: {
        type: String
    }
})