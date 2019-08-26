const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.register = (req, res) => {
    const { email, username} = req.body
    const data = req.body
    
    User.findOrCreate({ where: {[Op.or] : [{email},{username}]}, data})
            .spread((user, created) => {
                if(!created){
                    return res.status(409).send('username/email already exist')
                }else{
                    const token = jwt.sign({ id: user.id }, 'my-secret-key', { expiresIn: '6 hours' })
                    let { id, username, email } = user
                    res.status(201).send({
                        id,
                        username,
                        email,
                        token
                    })
                    return res.status(200).send(user)
                }
            })
            .catch(err => res.status(400).send(err))    
}


exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password


    User.findOne({ where: {email, password}})
        .then(user => {
            if(user) {
                const token = jwt.sign({ id: user.id }, 'my-secret-key', {expiresIn: '6 hours'})
                let {id, username, email} = user
                res.send({
                    message: 'You are logged in!',
                    id,
                    username,
                    email,
                    token
                })
            } else {
                return res.status(400).send({
                    message: 'Wrong email or password!'
                })
            }
        })
        .catch(err => res.status(400).send(err))
}


