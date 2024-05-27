const db = require('../config/db');

class Kategori_barang {
    static findAll(callback) {
        db.query('SELECT * FROM kategori_barang', (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
        });
    }
    static findById(id, callback) {
        db.query('SELECT * FROM kategori_barang WHERE id = ?', [id], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
        });
    };

    static create(newKategoriBarang, callback) {
        db.query(
          'INSERT INTO kategori_barang (nama) VALUES (?)',
          [newKategoriBarang.nama],
          (err, result) => {
            if (err) {
              callback(err, null);
              return;
            }
            callback(null, result.insertId);
          }
        );
      }
    
      static update(id, updatedKategoriBarang, callback) {
        db.query(
          'UPDATE kategori_barang SET nama = ? WHERE id = ?',
          [updatedKategoriBarang.nama, id],
          (err, result) => {
            if (err) {
              callback(err, null);
              return;
            }
            callback(null, result.affectedRows);
          }
        );
      }
    
      static delete(id, callback) {
        db.query('DELETE FROM kategori_barang WHERE id = ?', [id], (err, result) => {
          if (err) {
            callback(err, null);
            return;
          }
          callback(null, result.affectedRows);
        });
      }
    
};
    
module.exports = Kategori_barang;