var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlRestavracija = require('../controllers/restaurantAPI');
var ctrlComments = require('../controllers/commentsAPI');
var ctrlDatabase = require('../controllers/databaseAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

router.post('/comments/update', ctrlComments.updateComment);
router.get('/comments', ctrlComments.readComments);
router.post('/comments', ctrlComments.createComment);
router.post('/comments/delete', ctrlComments.deleteComment);
router.get('/comment/:id', ctrlComments.getCommentById);

router.get('/commentsByRestaurantId/:id', ctrlComments.getCommentsByRestaurantId);

router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);
router.get('/restaurants', ctrlRestavracija.readRestaurants);
router.post('/restaurants/delete', ctrlRestavracija.deleteRestaurant);
router.post('/restaurants/update', ctrlRestavracija.updateResturant);

router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);

router.post('/database/drop', ctrlDatabase.dropDatabase);

router.get('/search', ctrlRestavracija.getRestaurantBySearch);

module.exports = router;