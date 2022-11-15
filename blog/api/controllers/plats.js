const recettes = require('../models/recettes');

module.exports = {
    get: async(req, res) => {

        let dataPlats = await recettes.find({ "categorie": "Plat" }).lean().exec((err, platsData) => {
            if (platsData) {
                res.render('plats', {data:platsData});
        }
    }

);
        // console.log(data);

    }
}