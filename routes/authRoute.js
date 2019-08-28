const express = require('express')
require('express-group-routes')

// controller
const authController = require('../controllers/authController')

const app = express()

app.group('/api/v1', (router) => {
    router.post('/login', authController.login)
    router.post('/register', authController.register)
})

module.exports = app