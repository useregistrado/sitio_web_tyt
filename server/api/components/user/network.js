const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()


// Routes
router.get('/',secure('general'),list)
router.get('/:id',secure('general'),get)
router.post('/',secure('general'),upsert)
router.put('/',secure('general'),upsert)
router.post('/',secure('general'),remove)

// Internal functions
//
function list (req, res, next){
  controller.list()
    .then((lista)=>{
      response.success(req,res, lista, 200)
    })
    .catch(next)
}

function get(req, res,next){
  controller.get(req.params.id)
    .then((user)=>{
      response.success(req,res, user,200)
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
function remove(req, res) {
  
}





module.exports = router
