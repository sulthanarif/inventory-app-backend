const LokasiPenyimpanan = require('../model/Lokasi_penyimpanan');

exports.getAllLokasiPenyimpanan = (req, res) => {
    LokasiPenyimpanan.findAll((err, results) => {
        if (err) {
        res.status(500).json({ error: err });
        return;
        }
    
        // Periksa apakah data kosong
        if (results.length === 0) {
        res.status(200).json({ message: 'Empty data' });
        } else {
        res.json(results);
        }
    });
    };
    exports.getLokasiPenyimpananById = (req, res) => {
        LokasiPenyimpanan.findById(req.params.id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
            return;
        }
    
        // Periksa apakah data kosong
        if (results.length === 0) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            res.json(results[0]);
        }
        });
    };
    exports.createLokasiPenyimpanan = (req, res) => {
        const newLokasiPenyimpanan = req.body;
        LokasiPenyimpanan.create(newLokasiPenyimpanan, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          res.status(201).json({ message: 'Lokasi Penyimpanan created', id: result });
        });
      };
      
      exports.updateLokasiPenyimpanan = (req, res) => {
        const lokasiPenyimpananId = req.params.id;
        const updatedLokasiPenyimpanan = req.body;
        LokasiPenyimpanan.update(lokasiPenyimpananId, updatedLokasiPenyimpanan, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Lokasi Penyimpanan not found' });
          } else {
            res.json({ message: 'Lokasi Penyimpanan updated' });
          }
        });
      };
      
      exports.deleteLokasiPenyimpanan = (req, res) => {
        const lokasiPenyimpananId = req.params.id;
        LokasiPenyimpanan.delete(lokasiPenyimpananId, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Lokasi Penyimpanan not found' });
          } else {
            res.json({ message: 'Lokasi Penyimpanan deleted' });
          }
        });
      };