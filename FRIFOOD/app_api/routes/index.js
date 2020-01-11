var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var avtentikacija = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: 'payload'
});
var ctrlUporabniki = require('../controllers/uporabnikAPI');
var ctrlRestavracija = require('../controllers/restaurantAPI');
var ctrlComments = require('../controllers/commentsAPI');
var ctrlDatabase = require('../controllers/databaseAPI');
var ctrlAnalytics = require('../controllers/analyticsAPI');
var ctrlAvtentikacija = require('../controllers/avtentikacija');


const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.post('/registracija', ctrlAvtentikacija.registracija);
router.post('/prijava', ctrlAvtentikacija.prijava);

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);
router.get('/user/:userID', ctrlUporabniki.getUserById);
router.post('/uporabniki', avtentikacija, ctrlUporabniki.narediUporabnika);
router.get('/users', ctrlUporabniki.getUsers);
router.post('/users', avtentikacija, ctrlUporabniki.updateUser);

router.post('/comments/update', avtentikacija, ctrlComments.updateComment);
router.get('/comments', ctrlComments.readComments);
router.post('/comments', avtentikacija, ctrlComments.createComment);
router.post('/comments/delete', avtentikacija, ctrlComments.deleteComment);
router.get('/comment/:id', ctrlComments.getCommentById);
router.get('/commentAuthor/:authorID', ctrlComments.getCommentsByUser);

router.get('/commentsByRestaurantIdPerPage/:id/:pageNumber', ctrlComments.getCommentsByRestaurantIdPerPage);
router.get('/updateRestaurantRating/:id', ctrlComments.updateRestaurantRating);

router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);
router.get('/restaurants', ctrlRestavracija.readRestaurants);
router.post('/restaurants/delete', avtentikacija, ctrlRestavracija.deleteRestaurant);
router.post('/restaurants/update', avtentikacija, ctrlRestavracija.updateResturant);
router.get('/deleteRestaurant/:id', ctrlRestavracija.deleteRestaurantByID);

router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);

router.post('/database/drop', avtentikacija, ctrlDatabase.dropDatabase);
router.post('/database/fill', avtentikacija, ctrlDatabase.fillDatabase);

router.get('/search', ctrlRestavracija.getRestaurantBySearch);

router.get('/analytics', ctrlAnalytics.returnAnalytics);
router.post('/analytics', avtentikacija, ctrlAnalytics.updateAnalyticsByName);

router.post('/upload',multipartMiddleware, avtentikacija, ctrlDatabase.uploadFile);

module.exports = router;