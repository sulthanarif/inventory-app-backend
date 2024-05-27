const Pemasok = require('../model/Pemasok');

exports.getAllPemasok = (req, res) => {
    Pemasok.findAll((err, results) => {
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
    }
    exports.getPemasokById = (req, res) => {
        Pemasok.findById(req.params.id, (err, results) => {
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
    exports.createPemasok = (req, res) => {
        const newPemasok = req.body;
        Pemasok.create(newPemasok, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          res.status(201).json({ message: 'Pemasok created', id: result });
        });
      };
      
      exports.updatePemasok = (req, res) => {
        const pemasokId = req.params.id;
        const updatedPemasok = req.body;
        Pemasok.update(pemasokId, updatedPemasok, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Pemasok not found' });
          } else {
            res.json({ message: 'Pemasok updated' });
          }
        });
      };
      
      exports.deletePemasok = (req, res) => {
        const pemasokId = req.params.id;
        Pemasok.delete(pemasokId, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Pemasok not found' });
          } else {
            res.json({ message: 'Pemasok deleted' });
          }
        });
      };