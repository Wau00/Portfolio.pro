const mongoose = require('mongoose');
const { Contact } = require('../models')

module.exports = {
    createMessage(req, res) {
        Contact.create(req.body)
            .then((dbUserData) => {
                res.json({ dbUserData })
            })
    },
    getMessage(req, res) {
        Contact.find({})
            .populate({ select: '-__v' })
            .select('-__v')
            .then((users) => res.json(users))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}