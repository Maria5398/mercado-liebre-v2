var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET users listing. */
/*aqui creamos la ruta para nuestro detalle producto con id y categoria*/
router.get('/detalle/:id/:category', productsController.detalle);

module.exports = router;
