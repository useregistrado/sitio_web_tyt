const express = require('express')

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

//Routes 
router.post('/login', login)

function login (req, res,next){
    controller.login(req.body.username, req.body.password)
        .then(token =>{
            response.success(req,res, {token: token}, 200)
        })
        .catch(next)
}
module.exports = router