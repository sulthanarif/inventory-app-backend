const Transaksi = require('../model/Transaksi');

exports.getAllTransaksi = (req, res) => {
  Transaksi.findAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results.length ? results : { message: 'Empty data' });
  });
};

exports.getTransaksiById = (req, res) => {
  const transaksiId = req.params.id;
  Transaksi.findById(transaksiId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result ? result : { message: 'Data not found' });
  });
};

exports.createTransaksi = (req, res) => {
  const newTransaksi = req.body;
  Transaksi.create(newTransaksi, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'Transaksi created', id: result });
  });
};

exports.updateTransaksi = (req, res) => {
  const transaksiId = req.params.id;
  const updatedTransaksi = req.body;
  Transaksi.update(transaksiId, updatedTransaksi, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Transaksi not found' });
    } else {
      res.json({ message: 'Transaksi updated' });
    }
  });
};

exports.deleteTransaksi = (req, res) => {
  const transaksiId = req.params.id;
  Transaksi.delete(transaksiId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Transaksi not found' });
    } else {
      res.json({ message: 'Transaksi deleted' });
    }
  });
};