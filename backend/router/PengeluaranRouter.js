const express = require('express');
const router = express.Router();
const pengeluaranController = require('../controller/PengeluaranController');

router.get('/', pengeluaranController.getAllPengeluaran);
router.get('/:id', pengeluaranController.getPengeluaranById);
router.post('/create', pengeluaranController.createPengeluaran);
router.put('/update/:id', pengeluaranController.updatePengeluaran);
router.delete('/delete/:id', pengeluaranController.deletePengeluaran);

module.exports = router;