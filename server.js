const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('express-group-routes')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

// controllers
const userController = require('./controllers/usersController')
const authController = require('./controllers/authController')
const dormsController = require('./controllers/dormsController')

// middleware
const { authenticated } = require('./middleware/middleware')

app.get('/', (req, res) => res.send('get list of user https://mamikostclone-api.herokuapp.com/api/v1/users && get list of dorm https://mamikostclone-api.herokuapp.com/api/v1/dorms'))

app.group('/api/v1', (router) => {

    // API login&register
    router.post('/login', authController.login)
    router.post('/register', authController.register)

    // API USER
    router.get('/users', userController.index)
    router.get('/user/:id', userController.show)
    router.delete('/user/:id', authenticated, userController.delete)
    
    // API DORMS
    router.get('/dorms', dormsController.index)
    router.get('/dorm/:id', dormsController.show)
    router.post('/dorm', authenticated, dormsController.store)
    router.delete('/dorm/:id', authenticated, dormsController.delete)

})



app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.port}!`))

// app.listen(port, () => console.log(`listening on port ${port}!`))