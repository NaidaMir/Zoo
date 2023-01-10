const express = require('express');

const router = express.Router();
const { renderAnimals } = require('../controllers/animalsControllers');

router.get('/', renderAnimals);

module.exports = router;
