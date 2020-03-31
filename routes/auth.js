const express = require('express');
const router = express.Router()

const User = require('../models/user')
const jwt = require('jsonwebtoken');

router.route('/status').post(async (req,res,next) => {

    if (!req.body.token) return res.json({ status: false })

    const result = jwt.verify(req.body.token, 'shhhhh')

    const user = await User.findOne({ email: result.email })

    return res.json({
        status: true,
        user
    })
})

router.route('/login').post(async (req,res,next) => {
    try {

        const { email, password } = req.body
    
        const found = await User.findOne({ email, password })

    
        if (!found) throw new Error('No user found')


        const token = jwt.sign({ email }, 'shhhhh');

        await User.update({ _id: found._id }, { $set: { token } })

        return res.json({
            status: true,
            data: await User.findOne({ _id: found._id })
        })
    } catch(e) {
        return res.json({
            status: false,
            message: e.message
        })
    }       
})

router.route('/register').post(async (req,res,next) => {
    try {
        const { email, password } = req.body

        const user = new User()

        user.email = email
        user.password = password

        await user.save()
    
        console.log(user)
        return res.json({
            status: true,
            data: user
        })
    } catch(e) {
        return res.json({
            status: false,
            message: e.message
        })
    }
})

module.exports = router