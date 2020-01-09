var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlRestavracija = require('../controllers/restaurantAPI');
var ctrlComments = require('../controllers/commentsAPI');
var ctrlDatabase = require('../controllers/databaseAPI');
var ctrlAnalytics = require('../controllers/analyticsAPI');


const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);
router.get('/user/:userID', ctrlUporabniki.getUserById);
router.post('/uporabniki', ctrlUporabniki.narediUporabnika);
router.get('/users', ctrlUporabniki.getUsers);
router.post('/users', ctrlUporabniki.updateUser);

router.post('/comments/update', ctrlComments.updateComment);
router.get('/comments', ctrlComments.readComments);
router.post('/comments', ctrlComments.createComment);
router.post('/comments/delete', ctrlComments.deleteComment);
router.get('/comment/:id', ctrlComments.getCommentById);
router.get('/commentAuthor/:authorID', ctrlComments.getCommentsByUser);

router.get('/commentsByRestaurantIdPerPage/:id/:pageNumber', ctrlComments.getCommentsByRestaurantIdPerPage);
router.get('/updateRestaurantRating/:id', ctrlComments.updateRestaurantRating);

router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);
router.get('/restaurants', ctrlRestavracija.readRestaurants);
router.post('/restaurants/delete', ctrlRestavracija.deleteRestaurant);
router.post('/restaurants/update', ctrlRestavracija.updateResturant);

router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);

router.post('/database/drop', ctrlDatabase.dropDatabase);
router.post('/database/fill', ctrlDatabase.fillDatabase);

router.get('/search', ctrlRestavracija.getRestaurantBySearch);

router.get('/analytics', ctrlAnalytics.returnAnalytics);
router.post('/analytics', ctrlAnalytics.updateAnalyticsByName);

router.post('/upload',multipartMiddleware, ctrlDatabase.uploadFile);

module.exports = router;