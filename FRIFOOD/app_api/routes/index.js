var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlKomentarji = require('../controllers/komentarAPI');
var ctrlRestavracija = require('../controllers/restaurantAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

router.post('/objaviKomentar', ctrlKomentarji.narediKomentar);

router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);

module.exports = router;