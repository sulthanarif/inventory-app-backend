const db = require('../config/db');

class Pengeluaran {
  static findAll(callback) {
    db.query('SELECT * FROM pengeluaran', (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }

  static findById(id, callback) {
    db.query('SELECT * FROM pengeluaran WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result[0]);
    });
  }

  static create(newPengeluaran, callback) {
    db.query(
      'INSERT INTO pengeluaran (deskripsi,jumlah) VALUES (?,?)',
      [newPengeluaran.deskripsi,newPengeluaran.jumlah], 
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result.insertId);
      }
    );
  }

  static update(id, updatedPengeluaran, callback) {
    db.query(
      'UPDATE pengeluaran SET deskripsi = ?, jumlah = ? WHERE id = ?', 
      [updatedPengeluaran.deskripsi,updatedPengeluaran.jumlah, id],
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
    db.query('DELETE FROM pengeluaran WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.affectedRows);
    });
  }
}

module.exports = Pengeluaran;