const express = require ('express')
const router = express.Router()

const db = require('../db/children')

router.get('/', (req, res) =>{
    db.getChildren()
    .then(children =>{
        res.json({children})
    })
})



module.exports = router