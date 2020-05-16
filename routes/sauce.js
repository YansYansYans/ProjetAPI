const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.get('/', sauceCtrl.viewAllSauce);
router.post('/', sauceCtrl.addSauce);
router.get('/:id', sauceCtrl.viewSauce);
router.put('/:id', sauceCtrl.modifSauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.post('/:id/like', sauceCtrl.likeSauce)

module.exports = router;