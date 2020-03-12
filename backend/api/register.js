const db = require('../db/interface.js')
const REGISTER = (req, res, next) => {
    const data = req.body
    if(data){
        db.saveRegistration(data)
        .then(result => {
            if (result.success){
                res.send({success:true})
            }
        })
    }
}

module.exports = REGISTER