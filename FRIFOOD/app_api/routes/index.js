var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');

router.get('/uporabniki/:id', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

module.exports = router;