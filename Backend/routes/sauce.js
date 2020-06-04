const express   = require('express');
const router    = express.Router();//Création des routes vers le controllers

const auth      = require('../middleware/auth');
const multer    = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.viewAllSauce);
router.post('/', auth, multer, sauceCtrl.addSauce);//Contient Multer
router.get('/:id', auth, sauceCtrl.viewSauce);
router.put('/:id', auth, multer, sauceCtrl.modifSauce);//Contient Multer
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce)

module.exports = router;
