const express = require('express');
const router = express.Router();
const { getStatus } = require('../controllers/feederController');
const auth = require('../middleware/authMiddleware');

router.get('/status', auth, getStatus);

module.exports = router;

