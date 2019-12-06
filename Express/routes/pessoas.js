var express = require('express');
var router = express.Router();
var pessoas_controller = require('../controllers/pessoasController');

/* GET pessoas list. */
router.get('/list', pessoas_controller.getPessoas);

/* POST create pessoa. */
router.post('/create', pessoas_controller.createPessoas);

/* GET pessoa details */
router.get('/:id', pessoas_controller.getSinglePessoa);

/* POST pessoa details */
router.post('/update/:id', pessoas_controller.updatePessoa);

/* POST set pessoa morada */
router.post('/setMorada/:id', pessoas_controller.setMorada);

module.exports = router;
