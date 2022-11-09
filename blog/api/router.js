const express = require('express')
const router = express.Router()

const index = require('./controllers/index')
const article = require('./controllers/article')
const connexion = require('./controllers/connexion')
const formulaire = require('./controllers/formulaire')
const gestion = require('./controllers/gestion')
const inscription = require('./controllers/inscription')

router.route('/')
    .get(index.get)

router.route('/article')
    .get(article.get)

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

module.exports = router

