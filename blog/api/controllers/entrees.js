const recettes = require('../models/recettes');

module.exports = {
    get: async (req, res) => {

        let dataEntrees = await recettes.find({ "categorie": "Entrée" }).lean().exec((err, entreesData) => {
            if (entreesData) {
                res.render('entrees', {data:entreesData});
        }
    }

);
        // console.log(dataEntrees);

    }
}