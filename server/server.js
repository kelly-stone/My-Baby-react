const path = require('path')
const express = require('express')

const server = express()
const childRoutes = require('./routes/children')

server.use('/v1/api', childRoutes)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
