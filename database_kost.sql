-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2019 at 06:05 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_kost`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photoUrl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `photoUrl`, `name`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'http://saranasadaya.com/wp-content/uploads/2018/04/gedung-sate-.jpg', 'Bandung', '-6.914744', '107.60981', '0000-00-00', '0000-00-00'),
(2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuU1Z70DyK-V_zwPdVRiMDur14UhfWDGu7RQ18RM4OmxqVDJY-', 'Jakarta', '-6.200000', '106.816666', '2019-08-22', '2019-08-22'),
(3, 'https://assets-a1.kompasiana.com/items/album/2016/05/30/tugu-jogja-574c15cd83afbdc406776f50.jpg?t=o&v=1200', 'Yogyakarta', '-7.797068', '110.370529', '2019-08-22', '2019-08-22'),
(4, 'https://backpackerjakarta.com/wp-content/uploads/2016/09/lawang-sewu-semarang.jpg', 'Semarang', '-6.966667', '110.416664', '2019-08-22', '2019-08-22'),
(5, 'https://awsimages.detik.net.id/content/2016/05/05/1519/buaya.jpg', 'Surabaya', '-7.275973', '112.808304', '2019-08-22', '2019-08-22'),
(6, 'https://www.jember1tv.co.id/wp-content/uploads/2016/08/bali.jpg', 'Denpasar', '-8.650000', '115.216667', '2019-08-22', '2019-08-22');

-- --------------------------------------------------------

--
-- Table structure for table `dorms`
--

CREATE TABLE `dorms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `owner_phone` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dorms`
--

INSERT INTO `dorms` (`id`, `name`, `address`, `city`, `latitude`, `longitude`, `photo`, `type`, `price`, `owner_phone`, `created_by`, `createdAt`, `updatedAt`) VALUES
(1, 'kost indah', 'Jalan Kaurangan no 23 Jurangmangu', 'Bandung', '-6.175110', '106.865036', 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg', 'cewek', '300.000', '087968827923', 1, '2019-08-23', '2019-08-23'),
(2, 'Kost Andrean', 'Jalan Dealova no 34 Sawah Lama', 'Semarang', '106.723822', '-6.28392', 'https://cdn1-production-images-kly.akamaized.net/-R-MC5UiFfF97UD8h0BCAk27E0w=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/861628/original/073424800_1429960385-3.JPG', 'putri', '240.000', '087968827923', 2, '2019-08-23', '2019-08-23'),
(3, 'Kost Ibu Dea', 'Jalan Ciater Raya no 11 Ciater Raya', 'Jakarta', '106.722812', '-6.28229', 'https://storage.jualo.com/original/13513595/rumah-kost-mewah-387-kost-dijual-13513595.jpg', 'Putra', '120000', '08764789103089\r\n', 1, '2019-08-22', '2019-08-22'),
(4, 'Kost Dor Dor', 'Jalan Descute no 65 Ciater Raya', 'Surabaya', '106.739182', '-6.27713', 'https://merahputih.com/media/f0/0e/00/f00e00aa78e4983995f4c01cb2787dea.jpg', 'Campur', '290.000', '08764789103089\r\n', 1, '2019-08-22', '2019-08-22'),
(5, 'Rawabuntu Home', 'Rawabuntu Cicentang RT. 5 RW. 5', 'Yogyakarta', '106.74031', '-6.287666', 'https://apollo-singapore.akamaized.net/v1/files/3mpiwre5zf4x-ID/image;s=966x691;olx-st/_1_.jpg', 'Putra', '190.000', '08971827361', 3, '2019-08-22', '2019-08-22'),
(6, 'Ciledug Homebase', 'Jalan Ciledug no 76 Tangerang', 'Denpasar', '106.727602', '-6.282206', 'https://www.simplyhomy.com/wp-content/uploads/2018/08/bisnis-kos-kosan.jpg', 'Campur', '143.000', '08971827361', 3, '2019-08-22', '2019-08-22');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190821094615-create-user.js'),
('20190821231558-create-dorm.js'),
('20190822063738-create-city.js'),
('20190823035333-create-dorm.js'),
('20190823040239-create-dorm.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'dyah', 'deye@gmail.com', 'satuduatiga123', '2019-08-20', '2019-08-21'),
(2, 'hakim', 'hakim@gmail.com', 'hakim123', '2019-08-23', '2019-08-23'),
(3, 'eryzrz', 'eryz@gmail.com', 'tigaempatlima345', '2019-08-21', '2019-08-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `dorms`
--
ALTER TABLE `dorms`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `dorms`
--
ALTER TABLE `dorms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dorms`
--
ALTER TABLE `dorms`
  ADD CONSTRAINT `dorms_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
