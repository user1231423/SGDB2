var express = require('express');
var router = express.Router();
var pessoas_controller = require('../controllers/pessoasController');

/* GET pessoas list. */
router.get('/', pessoas_controller.getPessoas);

module.exports = router;
