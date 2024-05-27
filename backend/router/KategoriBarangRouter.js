const express = require('express');
const router = express.Router();
const kategoriBarangController = require('../controller/KategoriBarangController');

router.get('/', kategoriBarangController.getAllKategoriBarang);
router.get('/:id', kategoriBarangController.getKategoriBarangById);
router.post('/create', kategoriBarangController.createKategoriBarang);
router.put('/update/:id', kategoriBarangController.updateKategoriBarang);
router.delete('/delete/:id', kategoriBarangController.deleteKategoriBarang);

exports = module.exports = router;