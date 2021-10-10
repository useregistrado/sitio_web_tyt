const express = require('express')
const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()


// Routes
router.get('/',list)
router.post('/',upsert)


// Internal functions
//
function list (req, res, next){
    controller.list()
    .then((lista)=>{
        response.success(req,res, lista, 200)
    })
    .catch(next)
}



function upsert(req, res,next){
    controller.upsert(req.body)
    .then((user)=>{
        response.success(req,res, user,201)
    })
    .catch(next)
}



module.exports = router