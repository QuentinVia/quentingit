const users = require('../models/users')

module.exports = {
    get: (req, res) => {
        res.render('inscription')
    },
    post: (req, res) => {
        
        let newUser = new users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })
        newUser.save();
        res.redirect("/")

    }
}