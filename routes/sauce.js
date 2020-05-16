const express = require('express');
const router = express.Router();

const sauce = require('../models/stuff');

router.get('/');
router.post('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');
router.post('/:id/like')

module.exports = router;