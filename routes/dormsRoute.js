const express = require('express')
require('express-group-routes')

// controller & middleware
const dormsController = require('../controllers/dormsController')
const { authenticated } = require('../middleware/middleware')

const app = express()

app.group('/api/v1', (router) => {

    router.get('/dorms', dormsController.index)
    router.get('/dorm/:id', dormsController.show)
    router.post('/dorm', authenticated, dormsController.store)
    router.delete('/dorm/:id', authenticated, dormsController.delete)

})

module.exports = app