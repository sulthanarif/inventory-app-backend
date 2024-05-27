const db = require('../config/db');

class Barang {
  static findAll(callback) {
    db.query('SELECT * FROM barang', (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
  static findById(id, callback) {
    db.query('SELECT * FROM barang WHERE id = ?', [id], (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
  static create(newBarang, callback) {
    db.query(
      'INSERT INTO barang (nama, stok, harga, id_pemasok, id_kategori, id_lokasi_penyimpanan) VALUES (?, ?, ?, ?, ?, ?)',
      [newBarang.nama, newBarang.stok, newBarang.harga, newBarang.id_pemasok, newBarang.id_kategori, newBarang.id_lokasi_penyimpanan],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result.insertId);
      }
    );
  }

  static update(id, updatedBarang, callback) {
    db.query(
      'UPDATE barang SET nama = ?, stok = ?, harga = ?, id_pemasok = ?, id_kategori = ?, id_lokasi_penyimpanan = ? WHERE id = ?',
      [updatedBarang.nama, updatedBarang.stok, updatedBarang.harga, updatedBarang.id_pemasok, updatedBarang.id_kategori, updatedBarang.id_lokasi_penyimpanan, id],
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
    db.query('DELETE FROM barang WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.affectedRows);
    });
  }



  // Tambahkan method lain seperti findById, create, update, delete
}

module.exports = Barang;