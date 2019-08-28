const express = require('express')
require('express-group-routes')

// controller & middleware
const usersController = require('../controllers/usersController')
const { authenticated } = require('../middleware/middleware')

const app = express()

app.group('/api/v1', (router) => {
    router.get('/users', usersController.index)
    router.get('/user/:id', usersController.show)
    router.delete('/user/:id', authenticated, usersController.delete)
})

module.exports = app