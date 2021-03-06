const express = require('express')

const config = require('../config.js')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const plan = require('./components/plan/network')
const contract = require('./components/contract/network')
const errors = require('../network/errors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//router
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/plan', plan)
app.use('/api/contract', contract)

app.use(errors)

app.listen(config.api.port, ()=>{
  console.log('Api escuchando en el puerto ', config.api.port)
})
