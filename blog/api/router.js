const express = require('express')
const router = express.Router()

const index = require('./controllers/index')
const article = require('./controllers/article')
const connexion = require('./controllers/connexion')
const formulaire = require('./controllers/formulaire')
const gestion = require('./controllers/gestion')
const inscription = require('./controllers/inscription')
const plats = require('./controllers/plats')
const entrees = require('./controllers/entrees')
const desserts = require('./controllers/desserts')

router.route('/')
    .get(index.get)

// router.route('/article')
//     .get(article.get)

router.route('/formulaire')
    .get(formulaire.get)
    .post(formulaire.post)

router.route('/connexion')
    .get(connexion.get)

router.route('/gestion')
    .get(gestion.get)

router.route('/inscription')
    .get(inscription.get)
    .post(inscription.post)

router.route('/entrees')
    .get(entrees.get)

router.route('/plats')
    .get(plats.get)

router.route('/desserts')
    .get(desserts.get)

module.exports = router

