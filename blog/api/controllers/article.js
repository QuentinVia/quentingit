const {MongoClient} = require('mongodb');

module.exports = {
    get: (req, res) => {

        const url = 'mongodb+srv://quentin:Dolly72400@blog.ygdwx4w.mongodb.net/database';
        const database = 'database'
        const client = new MongoClient(url);
        async function getData()
        {
            let result = await client.connect();
            db = result.db(database);
            collection = db.collection('recettes');
            let data = await collection.find({"categorie": "Plat"}).toArray();
            

            // console.log(data);
        }
        getData();
        res.render('article')

    }
}