var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlKomentarji = require('../controllers/komentarAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

router.post('/objaviKomentar', ctrlKomentarji.narediKomentar);

//router.post('/addRestaurant', ctrlRestaurants.addRestaurant);

module.exports = router;