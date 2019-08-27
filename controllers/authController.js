const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.register = (req, res) => {
    const { email, username } = req.body
    const data = req.body

    User.findOne({ where: {[Op.or] : [{email}, {username}]}})
        .then(user => {
            if(user){
                return res.status(409).send({message: 'email/username exist'})
            }else{
                return User.create(data)
                    .then(user => {
                        const token = jwt.sign({ id: user.id }, 'my-secret-key', { expiresIn: 5 })
                        let { id, username, email } = user
                        res.send({
                            id,
                            username,
                            email,
                            token
                        })
                    })
            }
        })
        .catch(err => res.status(400).send(err))
}


exports.login = (req, res) => {
    const {email, password} = req.body

    User.findOne({ where: {email, password}})
        .then(user => {
            if(user) {
                const token = jwt.sign({ id: user.id }, 'my-secret-key', {expiresIn: 5})
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


