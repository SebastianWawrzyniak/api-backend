const express = require('express');
const router = express.Router()

router.route('/places').get((req,res,next) => {
    return res.json({
        status: true
    })
})

router.route('/reservation').post((req,res,next) => {
    return res.json({
        status: true
    })
})

module.exports = router