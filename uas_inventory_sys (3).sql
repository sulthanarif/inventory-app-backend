-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2024 at 09:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uas_inventory_sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `stok` int(11) NOT NULL,
  `harga` double NOT NULL,
  `id_pemasok` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `id_lokasi_penyimpanan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `nama`, `stok`, `harga`, `id_pemasok`, `id_kategori`, `id_lokasi_penyimpanan`) VALUES
(1, 'Semen Holcim', 0, 75000, 1, 1, 1),
(2, 'Pasir Putih', 50, 150000, 2, 1, 2),
(3, 'Batu Split', 102, 200000, 3, 1, 3),
(4, 'Bata Merah', 500, 1000, 4, 1, 4),
(5, 'Atap Baja Ringan', 10, 1200000, 5, 7, 5),
(6, 'Genteng Keramik', 100, 15000, 6, 7, 6),
(7, 'Pintu Kayu Jati', 5, 2500000, 7, 8, 7),
(8, 'Jendela Alumunium', 26, 1800000, 8, 8, 8),
(9, 'Lantai Keramik', 96, 100000, 9, 9, 9),
(10, 'Cat Tembok Dulux', 10, 150000, 10, 6, 10),
(11, 'Lem Kayu Fox', 10, 50000, 11, 14, 11),
(12, 'Peralatan Kayu', 20, 500000, 12, 10, 12),
(13, 'Kabel Listrik', 100, 25000, 13, 4, 13),
(14, 'Sakelar Listrik', 50, 15000, 14, 4, 14),
(15, 'Keran Air', 20, 100000, 15, 5, 15),
(16, 'Kloset Duduk', 14, 1500000, 16, 5, 16),
(17, 'Paku Beton', 1000, 10000, 17, 1, 17),
(18, 'Lem Kaca', 10, 25000, 18, 14, 18),
(19, 'Alat Kebun', 10, 100000, 19, 12, 19),
(20, 'Peralatan Mekanik', 5, 2000000, 20, 20, 20),
(21, 'Cat Tikus (PCS)', 204, 40000, 18, 13, 4),
(22, 'PenX', -900, 4500, 1, 18, 13),
(23, 'Router ', 3, 40000000, 21, 6, 2),
(24, 'PULPen', -900, 200, 7, 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `kategori_barang`
--

CREATE TABLE `kategori_barang` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori_barang`
--

INSERT INTO `kategori_barang` (`id`, `nama`) VALUES
(1, 'Alat Bangunan'),
(2, 'Bahan Bangunan'),
(3, 'Perlengkapan Dekorasi'),
(4, 'Peralatan Listrik'),
(5, 'Sanitasi'),
(6, 'Cat dan Pelapis'),
(7, 'Atap dan Genteng'),
(8, 'Pintu dan Jendela'),
(9, 'Lantai dan Keramik'),
(10, 'Peralatan Pertukangan'),
(11, 'Peralatan Keamanan'),
(12, 'Peralatan Kebun'),
(13, 'Bahan Kimia'),
(14, 'Lem dan Perekat'),
(15, 'Perlengkapan Taman'),
(16, 'Perlengkapan Rumah'),
(17, 'Peralatan Kebersihan'),
(18, 'Perlengkapan Plumbing'),
(19, 'Bahan Finishing'),
(20, 'Peralatan Mekanik');

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id` int(11) NOT NULL,
  `alamat` varchar(45) NOT NULL,
  `kode_pos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id`, `alamat`, `kode_pos`) VALUES
(1, 'Jl. Raya Bandung No. 123', 40123),
(2, 'Jl. Sudirman No. 567', 12345),
(3, 'Jl. Gatot Subroto No. 890', 67890),
(4, 'Jl. Merdeka No. 101', 11111),
(5, 'Jl. Diponegoro No. 202', 22222),
(6, 'Jl. Siliwangi No. 303', 33333),
(7, 'Jl. Pelajar Pejuang No. 404', 44444),
(8, 'Jl. Jend. Sudirman No. 505', 55555),
(9, 'Jl. Ahmad Yani No. 606', 66666),
(10, 'Jl. Soekarno Hatta No. 707', 77777),
(11, 'Jl. Asia Afrika No. 808', 88888),
(12, 'Jl. Cihampelas No. 909', 99999),
(13, 'Jl. RE. Martadinata No. 100', 10000),
(14, 'Jl. Braga No. 200', 20000),
(15, 'Jl. Otto Iskandardinata No. 300', 30000),
(16, 'Jl. Ir. H. Juanda No. 400', 40000),
(17, 'Jl. Dago No. 500', 50000),
(18, 'Jl. Pasteur No. 600', 60000),
(19, 'Jl. Setiabudi No. 700', 70000),
(20, 'Jl. Tamansari No. 800', 80000),
(21, 'Kokan Permata Klp. Gading, Blok F19, Klp. Gad', 14240),
(22, 'Jalan Raya', 23423);

-- --------------------------------------------------------

--
-- Table structure for table `lokasi_penyimpanan`
--

CREATE TABLE `lokasi_penyimpanan` (
  `id` int(11) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `id_lokasi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lokasi_penyimpanan`
--

INSERT INTO `lokasi_penyimpanan` (`id`, `deskripsi`, `id_lokasi`) VALUES
(1, 'Gudang Utama', 1),
(2, 'Gudang Belakang', 1),
(3, 'Gudang Depan', 2),
(4, 'Gudang Lantai 2', 2),
(5, 'Gudang Area Barat', 3),
(6, 'Gudang Area Timur', 3),
(7, 'Gudang Atap', 4),
(8, 'Gudang Genteng', 4),
(9, 'Gudang Dekorasi', 5),
(10, 'Gudang Plumbing', 5),
(11, 'Gudang Peralatan', 6),
(12, 'Gudang Bahan Kimia', 6),
(13, 'Gudang Sanitasi', 7),
(14, 'Gudang Cat', 7),
(15, 'Gudang Keramik', 8),
(16, 'Gudang Lantai', 8),
(17, 'Gudang Pintu Jendela', 9),
(18, 'Gudang Kayu', 9),
(19, 'Gudang Taman', 10),
(20, 'Gudang Rumah', 10);

-- --------------------------------------------------------

--
-- Table structure for table `pemasok`
--

CREATE TABLE `pemasok` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kontak` int(11) NOT NULL,
  `id_lokasi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pemasok`
--

INSERT INTO `pemasok` (`id`, `nama`, `kontak`, `id_lokasi`) VALUES
(1, 'PT. Pencari Cinta Sejati', 2147483647, 1),
(2, 'CV. Jago Bangun', 2147483647, 2),
(3, 'PT. Beton Mantap', 2147483647, 3),
(4, 'CV. Baja Sakti', 2147483647, 4),
(5, 'PT. Kaca Bersinar', 2147483647, 5),
(6, 'CV. Kayu Berkualitas', 2147483647, 6),
(7, 'PT. Keramik Indah', 2147483647, 7),
(8, 'CV. Genteng Abadi', 2147483647, 8),
(9, 'PT. Cat Warna Warni', 2147483647, 9),
(10, 'CV. Lem Ajaib', 2147483647, 10),
(11, 'PT. Taman Asri', 2147483647, 11),
(12, 'CV. Rumah Impian', 2147483647, 12),
(13, 'PT. Bersih Terus', 2147483647, 13),
(14, 'CV. Plumbing Hebat', 2147483647, 14),
(15, 'PT. Finishing Prima', 2147483647, 15),
(16, 'CV. Mekanik Kuat', 2147483647, 16),
(17, 'PT. Atap Kokoh', 2147483647, 17),
(18, 'CV. Listrik Cerdas', 2147483647, 18),
(19, 'PT. Sanitasi Sehat', 2147483647, 19),
(20, 'CV. Peralatan Pintar', 2147483647, 20),
(21, 'PT. Punya Mas Elon', 1284917, 21),
(22, 'PT. Sinarnya Emas', 177017, 12),
(23, 'PT Maju mundur', 2147483647, 22);

-- --------------------------------------------------------

--
-- Table structure for table `pengeluaran`
--

CREATE TABLE `pengeluaran` (
  `id` int(11) NOT NULL,
  `deskripsi` varchar(225) NOT NULL,
  `jumlah` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengeluaran`
--

INSERT INTO `pengeluaran` (`id`, `deskripsi`, `jumlah`) VALUES
(1, 'Pembelian barang: Jendela Alumunium', 3600000),
(2, 'GajI Karyawan', 20000000),
(3, 'Pembelian barang: Kloset Duduk', 3000000),
(4, 'Pembelian barang: Cat Tikus (PCS)', 80000),
(5, 'GajI Karyawan', 21000000),
(6, 'Pembelian barang: PenX', 22500),
(7, 'Pembelian barang: Jendela Alumunium', 9000000),
(8, 'Pembelian barang: Semen Holcim', 150000),
(9, 'Pengeluaran', 0),
(10, 'Pembelian barang: PULPen', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `id_barang` int(11) DEFAULT NULL,
  `jumlah_barang` int(11) DEFAULT NULL,
  `total` float NOT NULL,
  `jenis_transaksi` enum('jual','beli') DEFAULT NULL,
  `waktu` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `id_barang`, `jumlah_barang`, `total`, `jenis_transaksi`, `waktu`) VALUES
(1, 8, 2, 3600000, 'beli', '2024-05-26'),
(2, 16, 2, 3000000, 'beli', '2024-05-26'),
(3, 9, 2, 200000, 'jual', '2024-05-27'),
(4, 21, 2, 80000, 'beli', '2024-05-27'),
(7, 8, 5, 9000000, 'beli', '2024-05-27'),
(8, 1, 2, 150000, 'beli', '2024-05-27'),
(9, 1, 50, 3750000, 'jual', '2024-05-27'),
(10, 22, 500, 2250000, 'jual', '2024-05-27'),
(11, 24, 1000, 200000, 'jual', '2024-05-27'),
(12, 24, 500, 100000, 'beli', '2024-05-27');

--
-- Triggers `transaksi`
--
DELIMITER $$
CREATE TRIGGER `after_transaksi_insert` AFTER INSERT ON `transaksi` FOR EACH ROW BEGIN
    IF NEW.jenis_transaksi = 'beli' THEN
        -- Ambil nama barang dari tabel barang
        SELECT b.nama 
        INTO @nama_barang 
        FROM barang b 
        WHERE b.id = NEW.id_barang;

        -- Insert ke tabel pengeluaran dengan detail barang
        INSERT INTO pengeluaran (deskripsi, jumlah)
        VALUES (CONCAT('Pembelian barang: ', @nama_barang), NEW.total);
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_transaksi_insert_update_stok` AFTER INSERT ON `transaksi` FOR EACH ROW BEGIN
  -- Jika jenis_transaksi adalah 'jual', kurangi stok
  IF NEW.jenis_transaksi = 'jual' THEN
    UPDATE barang 
    SET stok = stok - NEW.jumlah_barang
    WHERE id = NEW.id_barang;
  -- Jika jenis_transaksi adalah 'beli', tambahkan stok
  ELSEIF NEW.jenis_transaksi = 'beli' THEN
    UPDATE barang 
    SET stok = stok + NEW.jumlah_barang
    WHERE id = NEW.id_barang;
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_transaksi_insert_update_stok_new` AFTER INSERT ON `transaksi` FOR EACH ROW BEGIN
  -- Jika jenis_transaksi adalah 'jual', kurangi stok
  IF NEW.jenis_transaksi = 'jual' THEN
    UPDATE barang 
    SET stok = stok - NEW.jumlah_barang
    WHERE id = NEW.id_barang;
  -- Jika jenis_transaksi adalah 'beli', tambahkan stok
  ELSEIF NEW.jenis_transaksi = 'beli' THEN
    UPDATE barang 
    SET stok = stok + NEW.jumlah_barang
    WHERE id = NEW.id_barang;
  END IF;
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategori` (`id_kategori`),
  ADD KEY `id_lokasi_penyimpanan` (`id_lokasi_penyimpanan`),
  ADD KEY `id_pemasok` (`id_pemasok`);

--
-- Indexes for table `kategori_barang`
--
ALTER TABLE `kategori_barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lokasi_penyimpanan`
--
ALTER TABLE `lokasi_penyimpanan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lokasi` (`id_lokasi`);

--
-- Indexes for table `pemasok`
--
ALTER TABLE `pemasok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lokasi` (`id_lokasi`);

--
-- Indexes for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_barang` (`id_barang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `kategori_barang`
--
ALTER TABLE `kategori_barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `lokasi_penyimpanan`
--
ALTER TABLE `lokasi_penyimpanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pemasok`
--
ALTER TABLE `pemasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
  ADD CONSTRAINT `barang_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_barang` (`id`),
  ADD CONSTRAINT `barang_ibfk_2` FOREIGN KEY (`id_lokasi_penyimpanan`) REFERENCES `lokasi_penyimpanan` (`id`),
  ADD CONSTRAINT `barang_ibfk_3` FOREIGN KEY (`id_pemasok`) REFERENCES `pemasok` (`id`);

--
-- Constraints for table `lokasi_penyimpanan`
--
ALTER TABLE `lokasi_penyimpanan`
  ADD CONSTRAINT `lokasi_penyimpanan_ibfk_1` FOREIGN KEY (`id_lokasi`) REFERENCES `lokasi` (`id`);

--
-- Constraints for table `pemasok`
--
ALTER TABLE `pemasok`
  ADD CONSTRAINT `pemasok_ibfk_1` FOREIGN KEY (`id_lokasi`) REFERENCES `lokasi` (`id`);

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
