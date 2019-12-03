var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlKomentarji = require('../controllers/komentarAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);


router.get('/komentarji', ctrlKomentarji.vrniKomentarje);

router.post('/komentarji', ctrlKomentarji.narediKomentar);

router.post('/komentarji/brisi', ctrlKomentarji.brisiKomentar);

router.post('/komentarji/uredi', ctrlKomentarji.posodobiKomentar);

//router.post('/addRestaurant', ctrlRestaurants.addRestaurant);

module.exports = router;