const express = require('express');
const router = express.Router();

const lokasiPenyimpananController = require('../controller/LokasiPenyimpananController');

router.get('/', lokasiPenyimpananController.getAllLokasiPenyimpanan);
router.get('/:id', lokasiPenyimpananController.getLokasiPenyimpananById);
router.post('/create', lokasiPenyimpananController.createLokasiPenyimpanan);
router.put('/update/:id', lokasiPenyimpananController.updateLokasiPenyimpanan);
router.delete('/delete/:id', lokasiPenyimpananController.deleteLokasiPenyimpanan);

exports = module.exports = router;