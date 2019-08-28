const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Joi = require('@hapi/joi')

exports.register = (req, res) => {
    const schema = {
        username: Joi.string().alphanum().min(4).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required()
    }

    const { email, username } = req.body
    const data = req.body
    const result = Joi.validate(req.body, schema)

    if (result.error) {
        return res.send({message:'error username/email/password'})
    }

    User.findOne({ where: { [Op.or]: [{ email }, { username }] } })
        .then(user => {
            if (user) {
                return res.status(409).send({ message: 'email/username exist' })
            } else {
                return User.create(data)
                    .then(user => {
                        const token = jwt.sign({ id: user.id }, 'my-secret-key', { expiresIn: 14400 })
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
    const { email, password } = req.body

    User.findOne({ where: { email, password } })
        .then(user => {
            if (user) {
                const token = jwt.sign({ id: user.id }, 'my-secret-key', { expiresIn: 14400 })
                let { id, username, email } = user
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
