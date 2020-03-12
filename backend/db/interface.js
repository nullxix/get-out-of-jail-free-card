const mongoose = require('mongoose')
const User = require('../db/models/User.js')
mongoose.connect(process.env.MONGO_DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const saveRegistration = (data) => {
    return new Promise((fulfill, reject) => {
        {name, social, bloodType, email}
        const newUser = new User({
            name, social, bloodType, email
        })
        newUser.save()
        .then(doc => {
            fulfill({success: true, id: doc._id})
        })
    })
}

const getUser = (id) => {
    return new Promise((fulfill, reject) => {

        User.findOne({_id: id})
        .then((error, user) => {
            if(error){
                reject({success: false, error})
            } else {
                fulfill({success: true, user})
            }
        })
    })
}
const db = {
    saveRegistration,
    getUser
}
module.exports = db