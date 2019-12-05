var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlComments = require('../controllers/commentsAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

router.post('/comments/update', ctrlComments.updateComment);
router.get('/comments', ctrlComments.readComments);
router.post('/comments', ctrlComments.createComment);
router.post('/comments/delete', ctrlComments.deleteComment);


//router.post('/addRestaurant', ctrlRestaurants.addRestaurant);

module.exports = router;