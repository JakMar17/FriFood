var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlKomentarji = require('../controllers/komentarAPI');
var ctrlComments = require('../controllers/commentsAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);



router.post('/komentarji/brisi', ctrlKomentarji.brisiKomentar);

router.post('/comments/update', ctrlComments.updateComment);
router.get('/comments', ctrlComments.getComments);
router.post('/comments', ctrlComments.postComment);


//router.post('/addRestaurant', ctrlRestaurants.addRestaurant);

module.exports = router;