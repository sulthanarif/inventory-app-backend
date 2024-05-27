const Pengeluaran = require('../model/Pengeluaran');

exports.getAllPengeluaran = (req, res) => {
  Pengeluaran.findAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results.length ? results : { message: 'Empty data' });
  });
};

exports.getPengeluaranById = (req, res) => {
  const pengeluaranId = req.params.id;
  Pengeluaran.findById(pengeluaranId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result ? result : { message: 'Data not found' });
  });
};

exports.createPengeluaran = (req, res) => {
  const newPengeluaran = req.body;
  Pengeluaran.create(newPengeluaran, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'Pengeluaran created', id: result });
  });
};

exports.updatePengeluaran = (req, res) => {
  const pengeluaranId = req.params.id;
  const updatedPengeluaran = req.body;
  Pengeluaran.update(pengeluaranId, updatedPengeluaran, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Pengeluaran not found' });
    } else {
      res.json({ message: 'Pengeluaran updated' });
    }
  });
};

exports.deletePengeluaran = (req, res) => {
  const pengeluaranId = req.params.id;
  Pengeluaran.delete(pengeluaranId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Pengeluaran not found' });
    } else {
      res.json({ message: 'Pengeluaran deleted' });
    }
  });
};