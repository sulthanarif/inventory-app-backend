const express = require('express');
const router = express.Router();
const pemasokController = require('../controller/PemasokController');

router.get('/', pemasokController.getAllPemasok);
router.get('/:id', pemasokController.getPemasokById);
router.post('/create', pemasokController.createPemasok);
router.put('/update/:id', pemasokController.updatePemasok);
router.delete('/delete/:id', pemasokController.deletePemasok);

module.exports = router;
