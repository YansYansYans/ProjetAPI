const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.viewAllSauce);
router.post('/', auth, multer, sauceCtrl.addSauce);
router.get('/:id', auth, sauceCtrl.viewSauce);
router.put('/:id', auth, sauceCtrl.modifSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce)

module.exports = router;