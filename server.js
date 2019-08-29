const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))
// routes
const authRoute = require('./routes/authRoute')
const dormsRoute = require('./routes/dormsRoute')
const usersRoute = require('./routes/usersRoute')

// app.get('/', (req, res) => res.send('get list of user https://mamikostclone-api.herokuapp.com/api/v1/users && get list of dorm https://mamikostclone-api.herokuapp.com/api/v1/dorms'))
app.use(authRoute)
app.use(usersRoute)
app.use(dormsRoute)

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`))
