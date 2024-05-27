const Lokasi = require('../model/Lokasi');

exports.getAllLokasi = (req, res) => {
  Lokasi.findAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results.length ? results : { message: 'Empty data' });
  });
};

exports.getLokasiById = (req, res) => {
  const lokasiId = req.params.id;
  Lokasi.findById(lokasiId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result ? result : { message: 'Data not found' });
  });
};

exports.createLokasi = (req, res) => {
  const newLokasi = req.body;
  Lokasi.create(newLokasi, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'Lokasi created', id: result });
  });
};

exports.updateLokasi = (req, res) => {
  const lokasiId = req.params.id;
  const updatedLokasi = req.body;
  Lokasi.update(lokasiId, updatedLokasi, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Lokasi not found' });
    } else {
      res.json({ message: 'Lokasi updated' });
    }
  });
};

exports.deleteLokasi = (req, res) => {
  const lokasiId = req.params.id;
  Lokasi.delete(lokasiId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result === 0) {
      res.status(404).json({ message: 'Lokasi not found' });
    } else {
      res.json({ message: 'Lokasi deleted' });
    }
  });
};