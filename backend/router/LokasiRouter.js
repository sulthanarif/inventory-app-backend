const express = require('express');
const router = express.Router();
const lokasiController = require('../controller/LokasiController');

router.get('/', lokasiController.getAllLokasi);
router.get('/:id', lokasiController.getLokasiById);
router.post('/create', lokasiController.createLokasi);
router.put('/update/:id', lokasiController.updateLokasi);
router.delete('/delete/:id', lokasiController.deleteLokasi);

module.exports = router;