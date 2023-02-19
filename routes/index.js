const express = require('express');

const homeController = require('../controllers/homeControllers')

const router = express.Router();

router.use("/",homeController.requestHandler);

module.exports = router;