const express = require('express');
const router = express.Router();
const transaksiController = require('../controller/TransaksiController');

router.get('/', transaksiController.getAllTransaksi);
router.get('/:id', transaksiController.getTransaksiById);
router.post('/create', transaksiController.createTransaksi);
router.put('/update/:id', transaksiController.updateTransaksi);
router.delete('/delete/:id', transaksiController.deleteTransaksi);

module.exports = router;