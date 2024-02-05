const express = require('express');

const router = express.Router();

const workControllers = require('../controllers/work-controllers');

router.get('/',workControllers.getWorks);

router.post('/',workControllers.createWork);

module.exports = router;