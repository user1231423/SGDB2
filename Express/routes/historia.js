var express = require('express');
var router = express.Router();
var historiaController = require('../controllers/historiaController');

router.post('/create', historiaController.createHistoria);

router.get('/historias', historiaController.getHistorias);

module.exports = router;
