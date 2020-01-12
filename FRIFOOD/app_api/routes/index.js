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
*/

/**
 * @swagger
 * path:
 *  /registracija:
 *   post:
 *    summary: registracija
 *    description: Zapis uporabnika v bazo.
 *    tags: [Registracija]
 *    requestBody:
 *       description: Prametri
 *       required: true
 *       content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      surname:
 *                          type: string
 *                      email:
 *                          type: string
 *                      passwd1:
 *                          type: string
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
 *    requestBody:
 *       description: Prametri
 *       required: true
 *       content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                      passwd:
 *                          type: string
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
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);
/**
 * @swagger
 * path:
 *  /user/{userID}:
 *   get:
 *    summary: pridobi uporabnika
 *    description: vrne uporabnika po idju.
 *    tags: [Uporabniki/Users]
 *    parameters:
 *     - in: path
 *       name: userID
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
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
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
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/users', ctrlUporabniki.getUsers);
router.put('/users', ctrlUporabniki.updateUser);


router.put('/comments/update', ctrlComments.updateComment);
router.post('/comments/update', ctrlComments.updateComment);

/**
 * @swagger
 * path:
 *  /comments:
 *   get:
 *    summary: pridobi vse komentarje
 *    description: vrne vse komentarje v bazi.
 *    tags: [Comments]
 *    responses:
 *     "200":
 *      description: komentarji
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *            napaka:
 *                type: array
 *                items:
 *         $ref: "#/components/schemas/comments"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/comments', ctrlComments.readComments);
router.post('/comments', ctrlComments.createComment);
router.delete('/comments/delete/:id', ctrlComments.deleteComment);
router.post('/comments/delete', ctrlComments.deleteComment);

/**
 * @swagger
 * path:
 *  /comment/{id}:
 *   get:
 *    summary: pridobi komentar
 *    description: vrne komentar po idju.
 *    tags: [Comments]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *    responses:
 *     "200":
 *      description: komentar
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/comments"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/comment/:id', ctrlComments.getCommentById);


/**
 * @swagger
 * path:
 *  /commentAuthor/{authorID}:
 *   get:
 *    summary: pridobi komentar
 *    description: vrne komentar po avtorju komentarja.
 *    tags: [Comments]
 *    parameters:
 *     - in: path
 *       name: authorID
 *       schema:
 *         type: string
 *         required: true
 *    responses:
 *     "200":
 *      description: komentar
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/comments"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/commentAuthor/:authorID', ctrlComments.getCommentsByUser);


/**
 * @swagger
 * path:
 *  /commentsByRestaurantIdPerPage/{id}/{pageNumber}:
 *   get:
 *    summary: pridobi komentar
 *    description: vrne komentar glede na restavracijo in stran.
 *    tags: [Comments]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *     - in: path
 *       name: pageNumber
 *       schema:
 *         type: number
 *         required: true
 *    responses:
 *     "200":
 *      description: komentar
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/comments"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/commentsByRestaurantIdPerPage/:id/:pageNumber', ctrlComments.getCommentsByRestaurantIdPerPage);


router.post('/restaurantADD', ctrlRestavracija.dodajRestavracijo);

/**
 * @swagger
 * path:
 *  /restaurants:
 *   get:
 *    summary: pridobi restavracije
 *    description: vrne vse restavracije
 *    tags: [Restaurant]
 *    responses:
 *     "200":
 *      description: restavracije
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/restaurants"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/restaurants', ctrlRestavracija.readRestaurants);
router.delete('/restaurants/delete', ctrlRestavracija.deleteRestaurant);
router.put('/restaurants/update', ctrlRestavracija.updateResturant);
router.delete('/deleteRestaurant/:id', ctrlRestavracija.deleteRestaurantByID);

/**
 * @swagger
 * path:
 *  /restaurants/{id}:
 *   get:
 *    summary: pridobi restavracijo
 *    description: vrne restavracijo glede na id
 *    tags: [Restaurant]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *    responses:
 *     "200":
 *      description: restavracija
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/restaurants"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/restaurants/:id', ctrlRestavracija.getRestaurantById);

/**
 * @swagger
 * path:
 *  /search/{name}:
 *   get:
 *    summary: pridobi restavracije z iskanjem
 *    description: vrne restavracije glede na iskano ime, dela tudi z delno podanimi imeni
 *    tags: [Restaurant]
 *    parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *         required: true
 *    responses:
 *     "200":
 *      description: restavracije
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/restaurants"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/search/:name', ctrlRestavracija.getRestaurantBySearch);

router.post('/database/drop', ctrlDatabase.dropDatabase);
router.post('/database/fill', ctrlDatabase.fillDatabase);

/**
 * @swagger
 * path:
 *  /analytics:
 *   get:
 *    summary: pridobi statistiko
 *    description: vrne vso statistioko v bazi
 *    tags: [Analytics]
 *    responses:
 *     "200":
 *      description: statistika
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/analytics"
 *     "500":
 *      description: Napaka v podatkovni bazi.
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  napaka:
 *                      type: string
 */
router.get('/analytics', ctrlAnalytics.returnAnalytics);

router.put('/analytics', ctrlAnalytics.updateAnalyticsByName);

router.post('/upload',multipartMiddleware, ctrlDatabase.uploadFile);

module.exports = router;