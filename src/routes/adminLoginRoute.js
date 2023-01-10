const express = require('express');

const router = express.Router();
const { renderAdminLogin } = require('../controllers/adminLoginControllers');

router.get('/', renderAdminLogin);

module.exports = router;
