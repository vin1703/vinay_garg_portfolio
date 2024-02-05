const express = require('express');

const router = express.Router();

const contactControllers = require('../controllers/contact-controllers');

router.post('/',contactControllers.createContact);

module.exports = router;