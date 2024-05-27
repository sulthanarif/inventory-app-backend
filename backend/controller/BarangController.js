const Barang = require('../model/Barang');

exports.getAllBarang = (req, res) => {
  Barang.findAll((err, results) => {
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

exports.getBarangById = (req, res) => {
    Barang.findById(req.params.id, (err, results) => {
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
    exports.createBarang = (req, res) => {
        const newBarang = req.body;
        Barang.create(newBarang, (err, result) => {
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          res.status(201).json({ message: 'Barang created', id: result });
        });
      };
      
      exports.updateBarang = (req, res) => {
        const barangId = req.params.id;
        const updatedBarang = req.body;
        Barang.update(barangId, updatedBarang, (err, result) => {
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          if (result === 0) {
            res.status(404).json({ message: 'Barang not found' });
          } else {
            res.json({ message: 'Barang updated' });
          }
        });
      };
      
      exports.deleteBarang = (req, res) => {
        const barangId = req.params.id;
        Barang.delete(barangId, (err, result) => {
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          if (result === 0) {
            res.status(404).json({ message: 'Barang not found' });
          } else {
            res.json({ message: 'Barang deleted' });
          }
        });
      };


// Tambahkan method lain untuk create, update, delete, dll.