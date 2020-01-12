var express = require('express');
var router = express.Router();
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


/**
 * Kategorije dostopnih točk
 * @swagger
 * tags:
 *  - name: Registracija
 *    description: Obvladovanje registracije
 *  - name: Prijava
 *    description: Obvladovanje logina
 *  - name: Uporabniki/Users
 *    description: Obvladovanje uporabnikov
 *  - name: Comments
 *    description: Obvladovanje komentarjev
 *  - name: Restaurants
 *    description: Obvladovanje restavracij
 *  - name: Analytics
 *    description: Obvladovanje analytics
 *  - name: Db
 *    description: Obvladovanje baze
*/

/**
 * @swagger
 * path:
 *  /register:
 *   get:
 *    summary: registracija
 *    description: Zapis uporabnika v bazo.
 *    tags: [Registracija]
 *    parameters:
 *     - in: query
 *       name: name
 *       schema:
 *        type: string
 *       required: true
 *     - in: query
 *       name: surname
 *       schema:
 *        type: string
 *       required: true
 *     - in: query
 *       name: email
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "200":
 *      description: Registracija uspešna.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         $ref: "#/components/schemas/uporabnikSchema"
 *     "400":
 *      description: Napaka zahteve, manjkajo obvezni parametri.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        example:
 *         sporočilo: Parametra lng in lat sta obvezna.
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
*/
router.post('/registracija', ctrlAvtentikacija.registracija);
router.post('/prijava', ctrlAvtentikacija.prijava);


router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);
router.get('/user/:userID', ctrlUporabniki.getUserById);
router.post('/uporabniki',ctrlUporabniki.narediUporabnika);
router.get('/users', ctrlUporabniki.getUsers);
router.put('/users', ctrlUporabniki.updateUser);


router.put('/comments/update', ctrlComments.updateComment);
router.get('/comments', ctrlComments.readComments);
router.post('/comments', ctrlComments.createComment);
router.delete('/comments/delete/:id', ctrlComments.deleteComment);
router.get('/comment/:id', ctrlComments.getCommentById);
router.get('/commentAuthor/:authorID', ctrlComments.getCommentsByUser);
router.get('/commentsByRestaurantIdPerPage/:id/:pageNumber', ctrlComments.getCommentsByRestaurantIdPerPage);


router.get('/updateRestaurantRating/:id', ctrlComments.updateRestaurantRating);
router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);
router.get('/restaurants', ctrlRestavracija.readRestaurants);
router.delete('/restaurants/delete', ctrlRestavracija.deleteRestaurant);
router.put('/restaurants/update', ctrlRestavracija.updateResturant);
router.delete('/deleteRestaurant/:id', ctrlRestavracija.deleteRestaurantByID);
router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);
router.get('/search/:name', ctrlRestavracija.getRestaurantBySearch);

router.post('/database/drop', ctrlDatabase.dropDatabase);
router.post('/database/fill', ctrlDatabase.fillDatabase);

router.get('/analytics', ctrlAnalytics.returnAnalytics);

router.put('/analytics', ctrlAnalytics.updateAnalyticsByName);

router.post('/upload',multipartMiddleware, ctrlDatabase.uploadFile);

module.exports = router;