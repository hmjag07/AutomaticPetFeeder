const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getStatus, updateFeeder } = require('../controllers/feederController');

router.get('/status', auth, getStatus);
router.put('/update/:id', auth, updateFeeder); // ⬅️ new route

module.exports = router;
