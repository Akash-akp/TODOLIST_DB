const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');
const taskController = require('../controller/create_controller');

router.get('/',homeController.home);

router.use('/createtsk',require('./create'));
router.use('/deletetsk',require('./destroy'));

module.exports = router;