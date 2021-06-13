const Users = require('../users/users-model')

module.exports = (req, res, next) => {
    Users.findBy(req.body.username)
        .then(user => {
            if (user) {
                res.status(406).json('username taken')
            } else {
                next()
            }
        })
        .catch(next)
}