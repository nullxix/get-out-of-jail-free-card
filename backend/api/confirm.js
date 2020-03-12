const db = require('../db/interface.js')
const CONFIRM = (req, res, next) => {
    return new Promise((fulfill, reject) => {
        const ID = req.body.id
    
        console.log('receiving ID:', ID)
        if(ID){
            db.getUser(ID)
            .then(result => {
                if(result.success && result.user){
                    res.send({
                        success: true
                    })
                } else {
                    res.send({
                        error: 'invalid ID'
                    })
                }
            })
        }  
    })
}

module.exports = CONFIRM