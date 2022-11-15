const mongoose = require('mongoose');

const recetteSchema = mongoose.Schema({
    categorie: String,
    titre: String,
    recette: String,
    image: String
})

module.exports = mongoose.model('recettes', recetteSchema);