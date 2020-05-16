const express = require('express');
const router = express.Router();

const sauce = require('../models/sauce');

router.get('/', sauce, sauceCtrl.getAllSauce);
router.post('/', sauce, multer, sauceCtrl.createSauce);
router.get('/:id', sauce, sauceCtrl.getOneSauce);
router.put('/:id', sauce, multer, sauceCtrl.modifySauce);
router.delete('/:id', sauce, sauceCtrl.deleteSauce);
router.post('/:id/like', sauce, sauceCtrl.likeSauce)

module.exports = router;