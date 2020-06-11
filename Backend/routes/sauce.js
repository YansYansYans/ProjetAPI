const express = require('express');
const router = express.Router(); //Création des routes vers le controllers

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.viewAllSauce); //Lire les sauces
router.post('/', auth, multer, sauceCtrl.addSauce); //Ajouter une sauce - Contient Multer
router.get('/:id', auth, sauceCtrl.viewSauce); //Lire une sauce
router.put('/:id', auth, multer, sauceCtrl.modifSauce); //Modifier une sauce - Contient Multer
router.delete('/:id', auth, sauceCtrl.deleteSauce); //Supprimer une sauce
router.post('/:id/like', auth, sauceCtrl.likeSauce) //Liker une sauce

module.exports = router;