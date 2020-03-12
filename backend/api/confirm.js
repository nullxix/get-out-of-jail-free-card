const db = require('../db/interface.js')
const CONFIRM = (req, res, next) => {
    return new Promise((fulfill, reject) => {
        const data = req.body.data;
        const {ID, hero} = data || {ID: null, hero: null}

        console.log('receiving ID:', ID)
        if(ID && hero){
            db.getUserAndUpdate(ID, hero)
            .then(result => {
                if(result.success && result.user){
                    res.send({
                        success: true,
                        responseTime: [12, 32],
                        hero
                    })
                } else {
                    res.send({
                        error: 'invalid ID'
                    })
                }
            })
        } else {
            res.end({
                error: 'poorly formed request'
            })
        }
    })
}

module.exports = CONFIRM