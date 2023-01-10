const express = require('express');

const router = express.Router();
const { renderMain } = require('../controllers/mainControllers');

router.get('/', renderMain);

module.exports = router;
