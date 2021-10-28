const jwt = require('jsonwebtoken')
const config = require('../config.js')
const secret = config.jwt.secret
const error = require('../utils/error')

function sign(data) {
    let jsonData = JSON.parse(JSON.stringify(data))
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: jsonData
    }, secret)
}

function verify(token){
    return jwt.verify(token,secret)
}

const check ={
    own: function (req, owner) {
        const decoded = decodeHeader(req)
        console.log(decoded)
        console.log('--------------')
        // comprovar si es o no propio
        if(decoded.data.auth_id !== owner){
            throw error('No puedes hacer esto', 401)
        }
    },
    isAdmin: function (req, owner) {
        const decoded = decodeHeader(req)
        console.log(decoded)
        console.log('Ha entra un administrador al sistema')
        // comprovar si es o no propio
        if(decoded.data.admin == false){
            throw error('No eres admin', 401)
        }
    },
    sendtoken: function(req) {
        sendToken(req)
    }


}

function getToken(auth) {
    if(!auth){
        throw new Error('No viene token')
    }
    console.log(auth)

    if(auth.indexOf('Bearer') === -1){
        throw new Error('Formato invalido del token')
    }
    let token = auth.replace('Bearer ','')
    return token
}

function sendToken (req){
    const authorization = req.headers.authorization || ''
    const token = getToken(authorization)
    const decoded = verify(token)
}

function decodeHeader(req){
    const authorization = req.headers.authorization || ''
    const token = getToken(authorization)
    const decoded = verify(token)

    req.user = decoded
    return decoded
}

module.exports = {
    sign,
    check,
}