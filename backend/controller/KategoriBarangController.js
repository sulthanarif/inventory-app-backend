const KategoriBarang = require('../model/Kategori_barang');

exports.getAllKategoriBarang = (req, res) => {
    KategoriBarang.findAll((err, results) => {
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
    exports.getKategoriBarangById = (req, res) => {
        KategoriBarang.findById(req.params.id, (err, results) => {
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
    }

    exports.createKategoriBarang = (req, res) => {
        const newKategoriBarang = req.body;
        KategoriBarang.create(newKategoriBarang, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          res.status(201).json({ message: 'Kategori Barang created', id: result });
        });
      };
      
      exports.updateKategoriBarang = (req, res) => {
        const kategoriBarangId = req.params.id;
        const updatedKategoriBarang = req.body;
        KategoriBarang.update(kategoriBarangId, updatedKategoriBarang, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Kategori Barang not found' });
          } else {
            res.json({ message: 'Kategori Barang updated' });
          }
        });
      };
      
      exports.deleteKategoriBarang = (req, res) => {
        const kategoriBarangId = req.params.id;
        KategoriBarang.delete(kategoriBarangId, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          if (result === 0) {
            res.status(404).json({ message: 'Kategori Barang not found' });
          } else {
            res.json({ message: 'Kategori Barang deleted' });
          }
        });
      };
    