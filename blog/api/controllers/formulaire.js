const mongoose = require("mongoose");

module.exports = {
    get: (req, res) => {
        res.render('formulaire')
    },
    post: (req, res) => {
        
        const recetteSchema = {
            categorie: String,
            titre: String,
            recette: String,
            image: String
        }

        const Recettes = mongoose.model('recettes', recetteSchema)

        let newRecette = new Recettes({
            categorie: req.body.categorie,
            titre: req.body.titre,
            recette: req.body.recette,
            image: req.body.image
        })
        newRecette.save();
        res.redirect("/")
    }

}