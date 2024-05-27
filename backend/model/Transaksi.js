const db = require('../config/db');

class Transaksi {
  static findAll(callback) {
    db.query('SELECT * FROM transaksi', (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }

  static findById(id, callback) {
    db.query('SELECT * FROM transaksi WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result[0]);
    });
  }

  static create(newTransaksi, callback) {
    db.query(
      'INSERT INTO transaksi (id_barang, jumlah_barang, total, jenis_transaksi, waktu) VALUES (?, ?, ?, ?, ?)',
      [newTransaksi.id_barang, newTransaksi.jumlah_barang,newTransaksi.total, newTransaksi.jenis_transaksi, newTransaksi.waktu],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result.insertId);
      }
    );
  }

  static update(id, updatedTransaksi, callback) {
    db.query(
      'UPDATE transaksi SET id_barang = ?, jumlah_barang = ?, total = ?, jenis_transaksi = ?, waktu = ?, WHERE id = ?',
      [updatedTransaksi.id_barang, updatedTransaksi.jumlah_barang, updatedTransaksi.total, updatedTransaksi.jenis_transaksi, updatedTransaksi.waktu, id],
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
    db.query('DELETE FROM transaksi WHERE id = ?', [id], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.affectedRows);
    });
  }
}

module.exports = Transaksi;