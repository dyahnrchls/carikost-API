const models = require('../models')
const User = models.user
const Dorm = models.dorm

exports.index = (req, res) => {
    User.findAll({
        include: [{
            model: Dorm
        }] 
    })
        .then (users => res.status(200).send(users))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const  id = req.params.id

    User.find({ where: { id } })
        .then (user => {
            if(user){
                return res.status(200).send(user)
            }else{
                return res.status(400).send({message: 'user not found'})
            }
        })
        .catch(err => res.status(400).send(err))
    
}

exports.delete = (req, res) => {
    const id = req.params.id
    
    User.destroy({where: {id}})
        .then(user => {
            if (user) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'user not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

