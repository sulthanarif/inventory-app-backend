const express = require('express');
const router = express.Router();
const barangController = require('../controller/BarangController');

router.get('/', barangController.getAllBarang);
router.get('/:id', barangController.getBarangById);
router.post('/create', barangController.createBarang);
router.put('/update/:id', barangController.updateBarang);
router.delete('/delete/:id', barangController.deleteBarang);

module.exports = router;