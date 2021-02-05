var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController'); /*requiere el archibo 
indexController y requiero su metodo en router.get */
/* GET home page. */
router.get('/', indexController.index); /*cada ves que el usuario entre en el / va a renderizar en index(home) */

module.exports = router;
