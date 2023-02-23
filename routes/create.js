const express = require('express');

const router = express.Router();
const taskController = require('../controller/create_controller');



router.post('/',taskController.create);

module.exports = router;