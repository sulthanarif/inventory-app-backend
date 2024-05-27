const db = require('../config/db');

class Lokasi_penyimpanan {
    static findAll(callback) {
        db.query('SELECT * FROM lokasi_penyimpanan', (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
        });
    }
        static findById(id, callback) {
            db.query('SELECT * FROM lokasi_penyimpanan WHERE id = ?', [id], (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
            });
        }
        static create(newLokasiPenyimpanan, callback) {
            db.query(
              'INSERT INTO lokasi_penyimpanan (deskripsi, id_lokasi) VALUES (?, ?)',
              [newLokasiPenyimpanan.deskripsi, newLokasiPenyimpanan.id_lokasi],
              (err, result) => {
                if (err) {
                  callback(err, null);
                  return;
                }
                callback(null, result.insertId);
              }
            );
          }
        
          static update(id, updatedLokasiPenyimpanan, callback) {
            db.query(
              'UPDATE lokasi_penyimpanan SET deskripsi = ?, id_lokasi = ? WHERE id = ?',
              [updatedLokasiPenyimpanan.deskripsi, updatedLokasiPenyimpanan.id_lokasi, id],
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
            db.query('DELETE FROM lokasi_penyimpanan WHERE id = ?', [id], (err, result) => {
              if (err) {
                callback(err, null);
                return;
              }
              callback(null, result.affectedRows);
            });
          }
    };
    
module.exports = Lokasi_penyimpanan;