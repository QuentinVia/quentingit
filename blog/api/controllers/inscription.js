const mongoose = require("mongoose");

module.exports = {
    get: (req, res) => {
        res.render('inscription')
    },
    post: (req, res) => {

        const userSchema = {
            name: String,
            email: String,
            password: String,
            confirmPassword: String
        }

        const Users = mongoose.model("users", userSchema)
        
        let newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })
        newUser.save();
        res.redirect("/")

    }
}