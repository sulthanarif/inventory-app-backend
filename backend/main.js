const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const barangRoutes = require('./router/BarangRouter');
const lokasiRoutes = require('./router/LokasiRouter');
const kategoriBarangRoutes = require('./router/KategoriBarangRouter');
const lokasiPenyimpananRoutes = require('./router/LokasiPenyimpananRouter');
const pemasokRoutes = require('./router/PemasokRouter');
const pengeluaranRoutes = require('./router/PengeluaranRouter');
const transaksiRoutes = require('./router/TransaksiRouter');


const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Routes
app.use('/api/barang', barangRoutes);
app.use('/api/lokasi', lokasiRoutes);
app.use('/api/lokasi-penyimpanan', lokasiPenyimpananRoutes);
app.use('/api/pemasok', pemasokRoutes);
app.use('/api/kategori',kategoriBarangRoutes);
app.use('/api/pengeluaran',pengeluaranRoutes);
app.use('/api/transaksi',transaksiRoutes);


// Error handling middleware (tambahkan setelah rute lain)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan server' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});