-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 20, 2020 at 06:57 AM
-- Server version: 8.0.22-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heroku_fd69cfdb43ac70f`
--

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int NOT NULL,
  `roleType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `roleType`) VALUES
(22, 'Admin'),
(100, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `topup_instruction`
--

CREATE TABLE `topup_instruction` (
  `id` int NOT NULL,
  `stepNumber` int NOT NULL,
  `instruction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `topup_instruction`
--

INSERT INTO `topup_instruction` (`id`, `stepNumber`, `instruction`) VALUES
(31, 1, 'Go to the nearest ATM or you can use E-Banking.'),
(32, 2, 'Type your security number on the ATM or E-Banking.'),
(33, 3, 'Select \"Transfer\" in the menu.'),
(34, 4, 'Type the virtual account number that we provide you at the top.'),
(35, 5, 'Type the amount of the money you want to top up.'),
(36, 6, 'Read the Summary details.'),
(37, 7, 'Press transfer/top up.'),
(38, 8, 'You can see your monet in Zwallet within 3 hours.'),
(39, 11, 'ini update'),
(40, 0, 'ini topup'),
(41, 0, 'ini topup');

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `id` int NOT NULL,
  `sendBy` int NOT NULL,
  `amountTransfer` bigint NOT NULL,
  `receiver` int NOT NULL,
  `dateTransfer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '-',
  `phoneNumber` bigint DEFAULT '0',
  `balance` bigint NOT NULL DEFAULT '0',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'defaultprofile.jpg',
  `device_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '-',
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `roleId` int NOT NULL DEFAULT '100',
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fullName`, `email`, `password`, `pin`, `phoneNumber`, `balance`, `img`, `device_token`, `createdDate`, `roleId`, `isActive`) VALUES
(9, 'admin', 'admin@gmail.com', '$2b$10$v6wpqBVaqnWU9WGjrUC8nulE14HT.Hc54vaOhenRDghe/AXqylXka', '-', 0, 0, '-', 'difSyfI1RGSYF5b3xPCNu9:APA91bEOCOREhzwTMrD-SV2LxmheJT6jRiFU4_QQEaS8fu6cNE7X2oM3YQBcowWIFKT0VX89uxsRUCfNp1HNL8zsqU1c8nm7YPyrEHSHl04XKexTny0gaYPErmh5W-zI4I0jtyFfAXJK', '2020-10-14 03:42:41', 22, 1),
(38, 'Arungi Cahaya', 'akuarung83@gmail.com', '$2b$10$bWveVJfspeNToxzK7lfNo.OoUEsswR9D6zKiD4UdaIW1mLCnsn9MO', '123456', 0, 0, 'images-1605816740061.jpg', 'difSyfI1RGSYF5b3xPCNu9:APA91bEOCOREhzwTMrD-SV2LxmheJT6jRiFU4_QQEaS8fu6cNE7X2oM3YQBcowWIFKT0VX89uxsRUCfNp1HNL8zsqU1c8nm7YPyrEHSHl04XKexTny0gaYPErmh5W-zI4I0jtyFfAXJK', '2020-11-19 18:29:08', 100, 1),
(39, 'user', 'user@gmail.com', '$2b$10$NSkuSZXXBdOHOO.hCcStUuUvSSPphO132YdI9omnGHTjJHz/vG42C', '123456', 0, 0, '-', 'difSyfI1RGSYF5b3xPCNu9:APA91bEOCOREhzwTMrD-SV2LxmheJT6jRiFU4_QQEaS8fu6cNE7X2oM3YQBcowWIFKT0VX89uxsRUCfNp1HNL8zsqU1c8nm7YPyrEHSHl04XKexTny0gaYPErmh5W-zI4I0jtyFfAXJK', '2020-11-19 18:31:13', 100, 1),
(40, 'Michelle', 'michelle@gmail.com', '$2b$10$amzJaweXRcFjrYN.zpHFYejrseLqnaclS7AVWe5RpQhVkmQCpxofq', '111111', 0, 0, '-', 'difSyfI1RGSYF5b3xPCNu9:APA91bEOCOREhzwTMrD-SV2LxmheJT6jRiFU4_QQEaS8fu6cNE7X2oM3YQBcowWIFKT0VX89uxsRUCfNp1HNL8zsqU1c8nm7YPyrEHSHl04XKexTny0gaYPErmh5W-zI4I0jtyFfAXJK', '2020-11-19 23:20:14', 100, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topup_instruction`
--
ALTER TABLE `topup_instruction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transfer_ibfk_1` (`sendBy`),
  ADD KEY `transfer_ibfk_2` (`receiver`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `topup_instruction`
--
ALTER TABLE `topup_instruction`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transfer`
--
ALTER TABLE `transfer`
  ADD CONSTRAINT `transfer_ibfk_1` FOREIGN KEY (`sendBy`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transfer_ibfk_2` FOREIGN KEY (`receiver`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
