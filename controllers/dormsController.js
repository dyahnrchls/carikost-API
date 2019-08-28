const models = require('../models')
const Dorm = models.dorm
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    Dorm.findAll()
        .then(dorms => res.status(200).send(dorms))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Dorm.findOne({ where: { id } })
        .then(dorm => {
            if (dorm) {
                return res.status(200).send(dorm)
            } else {
                return res.status(400).send({ message: 'dorm not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    let token = req.headers['authorization']
    token = token.split(' ')[1]
    const user = jwt.verify(token, 'my-secret-key')

    const data = req.body
    Object.assign(data, { created_by: user.id })

    Dorm.create(data)
        .then(dorm => res.status(201).send(dorm))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    Dorm.destroy({ where: { id } })
        .then(dorm => {
            if (dorm) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'dorm not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

