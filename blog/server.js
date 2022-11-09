//On appele express
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const mongoose = require("mongoose");
//initialisation d'express
const app = express();

//on declare le port
const port = 3000;

app.listen(port, ()=>{
    console.log(`on port http://localhost:${port}`);
})

// Handlebars
// Precise a l'engine quel extension nous allons utilisé. Defintit ensuite le layout utilisé
app.engine('hbs', engine({ defaultLayout: 'main', extname: 'hbs' }));
// Precise l'extention des vue qui sera utilisé
app.set('view engine', 'hbs');
// Precise le dossier ou sont les vues 
app.set('views', './views');

// On crée le lien vers les fichier bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname, 'assets')))

// on créer le chemin vers le fichier router
const router = require('./api/router')
app.use("/", router)

// pour lancer le server utilisé dans le terminal: nodemon server.js

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb+srv://quentin:Dolly72400@blog.ygdwx4w.mongodb.net/database', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});


