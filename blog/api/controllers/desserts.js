const recettes = require('../models/recettes');

module.exports = {
    get: async(req, res) => {

        let dataDesserts = await recettes.find({ "categorie": "Dessert" }).lean().exec((err, dessertsData) => {
            if (dessertsData) {
                res.render('desserts', {data:dessertsData});
        }
    }

);
        // console.log(data);

    }
}