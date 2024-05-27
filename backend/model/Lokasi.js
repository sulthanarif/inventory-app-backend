// backend/models/Lokasi.js
const db = require('../config/db');

class Lokasi {
  static findAll(callback) {
    db.query('SELECT * FROM lokasi', (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }

  static findById(id, callback) {
    db.query('SELECT * FROM lokasi WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result[0]);
    });
  }

  static create(newLokasi, callback) {
    db.query(
      'INSERT INTO lokasi (alamat, kode_pos) VALUES (?, ?)',
      [newLokasi.alamat, newLokasi.kode_pos],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result.insertId);
      }
    );
  }

  static update(id, updatedLokasi, callback) {
    db.query(
      'UPDATE lokasi SET alamat = ?, kode_pos = ? WHERE id = ?',
      [updatedLokasi.alamat, updatedLokasi.kode_pos, id],
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
    db.query('DELETE FROM lokasi WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.affectedRows);
    });
  }
}

module.exports = Lokasi;