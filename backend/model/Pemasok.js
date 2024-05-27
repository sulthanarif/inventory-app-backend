const db = require('../config/db');

class Pemasok {
    static findAll(callback) {
        db.query('SELECT * FROM pemasok', (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
        });
    }
    static findById(id, callback) {
        db.query('SELECT * FROM pemasok WHERE id = ?', [id], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
        });
    }
    static create(newPemasok, callback) {
        db.query(
          'INSERT INTO pemasok (nama, kontak, id_lokasi) VALUES (?, ?, ?)',
          [newPemasok.nama, newPemasok.kontak, newPemasok.id_lokasi],
          (err, result) => {
            if (err) {
              callback(err, null);
              return;
            }
            callback(null, result.insertId); 
          }
        );
      }
    
      static update(id, updatedPemasok, callback) {
        db.query(
          'UPDATE pemasok SET nama = ?, kontak = ?, id_lokasi = ? WHERE id = ?',
          [updatedPemasok.nama, updatedPemasok.kontak, updatedPemasok.id_lokasi, id],
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
        db.query('DELETE FROM pemasok WHERE id = ?', [id], (err, result) => {
          if (err) {
            callback(err, null);
            return;
          }
          callback(null, result.affectedRows); 
        });
      }
   
};
module.exports = Pemasok;