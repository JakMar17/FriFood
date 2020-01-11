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
 *  /registracija:
 *   post:
 *    summary: registracija
 *    description: Zapis uporabnika v bazo.
 *    tags: [Registracija]
 *    parameters:
 *     - in: body
 *       name: body
 *       description: podatki
 *       schema:
 *           type: object
 *           properties:
 *               name:
 *                   type: string
 *               surname:
 *                   type: string
 *               email:
 *                   type: string
 *               passwd1:
 *                   type: string
 *    responses:
 *     "200":
 *      description: Registracija uspešna.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: "#/components/schemas/uporabnikSchema"
 *     "400":
 *      description: Napaka zahteve, manjkajo obvezni parametri.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
*/
router.post('/registracija', ctrlAvtentikacija.registracija);


/**
 * @swagger
 * path:
 *  /prijava:
 *   post:
 *    summary: prijava
 *    description: Avtentikacija uporabnika.
 *    tags: [Prijava]
 *    parameters:
 *     - in: body
 *       name: body
 *       description: podatki
 *       schema:
 *           type: object
 *           properties:
 *               email:
 *                   type: string
 *               passwd1:
 *                   type: string
 *    responses:
 *     "200":
 *      description: page Token
 *      content:
 *       application/json:
 *        schema:
 *              type: object
 *              properties:
 *                  pageToken:
 *                      type: string
 *     "400":
 *      description: Zahtevani so vsi podatki
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 *     "401":
 *      description: Unathorized
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.post('/prijava', ctrlAvtentikacija.prijava);


/**
 * @swagger
 * path:
 *  /uporabniki/{email}:
 *   get:
 *    summary: pridobi uporabnika
 *    description: vrne uporabnika po emailu.
 *    tags: [Uporabniki/Users]
 *    parameters:
 *     - in: path
 *       name: email
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "200":
 *      description: uporabnik
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/uporabnikSchema"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);
/**
 * @swagger
 * path:
 *  /uporabniki/{userID}:
 *   get:
 *    summary: pridobi uporabnika
 *    description: vrne uporabnika po idju.
 *    tags: [Uporabniki/Users]
 *    parameters:
 *     - in: query
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "200":
 *      description: uporabnik
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/uporabnikSchema"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/user/:userID', ctrlUporabniki.getUserById);
router.post('/uporabniki',ctrlUporabniki.narediUporabnika);


/**
 * @swagger
 * path:
 *  /users:
 *   get:
 *    summary: pridobi uporabnike
 *    description: vrne vse uporabnike.
 *    tags: [Uporabniki/Users]
 *    responses:
 *     "200":
 *      description: uporabnik
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *            napaka:
 *                type: array
 *                items:
 *                     $ref: "#/components/schemas/uporabnikSchema"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
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
router.get('/deleteRestaurant/:id', ctrlRestavracija.deleteRestaurantByID);
router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);
router.get('/search/:name', ctrlRestavracija.getRestaurantBySearch);

router.post('/database/drop', ctrlDatabase.dropDatabase);router.post('/database/fill', ctrlDatabase.fillDatabase);



router.get('/analytics', ctrlAnalytics.returnAnalytics);
router.post('/analytics', ctrlAnalytics.updateAnalyticsByName);

router.post('/upload',multipartMiddleware, ctrlDatabase.uploadFile);

module.exports = router;