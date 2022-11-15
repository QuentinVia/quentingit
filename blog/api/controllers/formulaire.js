const recettes = require('../models/recettes')

module.exports = {
    get: (req, res) => {
        
        res.render('formulaire')
    },
    post: (req, res) => {

        let newRecette = new recettes({
            categorie: req.body.categorie,
            titre: req.body.titre,
            recette: req.body.recette,
            image: req.body.image
        })
        newRecette.save();
        res.redirect("/")

    }

}