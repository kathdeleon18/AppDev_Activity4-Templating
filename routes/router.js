const express = require('express');
const router = express.Router();
const controller = require('../controller/userControl');

router.get('/', controller.index);
router.get('/Bini', controller.bini);
router.get('/Kath', controller.kath);
router.get('/Besas', controller.besas);
router.get('/DeLeon', controller.deleon);

module.exports = router;