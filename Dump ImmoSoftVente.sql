-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: immosoftvente
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agence`
--

DROP TABLE IF EXISTS `agence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agence` (
  `agence_id` varchar(36) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `localisationId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`agence_id`),
  UNIQUE KEY `REL_83b533b02cf440c32c3cf75f8f` (`localisationId`),
  CONSTRAINT `FK_83b533b02cf440c32c3cf75f8f7` FOREIGN KEY (`localisationId`) REFERENCES `localisation` (`localisation_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agence`
--

LOCK TABLES `agence` WRITE;
/*!40000 ALTER TABLE `agence` DISABLE KEYS */;
/*!40000 ALTER TABLE `agence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `annonce` (
  `role_id` varchar(36) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `usersId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  KEY `FK_a55ba750ecc2ff2e084ea5766af` (`usersId`),
  CONSTRAINT `FK_a55ba750ecc2ff2e084ea5766af` FOREIGN KEY (`usersId`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce`
--

LOCK TABLES `annonce` WRITE;
/*!40000 ALTER TABLE `annonce` DISABLE KEYS */;
/*!40000 ALTER TABLE `annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependances`
--

DROP TABLE IF EXISTS `dependances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dependances` (
  `description` text NOT NULL,
  `dependances_id` varchar(36) NOT NULL,
  `type` enum('Jardin','Garage','Terasse','Veranda','Cave') NOT NULL,
  `superficie` float NOT NULL,
  `immobilierId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dependances_id`),
  KEY `FK_17d276ba3273733c2f0f0815791` (`immobilierId`),
  CONSTRAINT `FK_17d276ba3273733c2f0f0815791` FOREIGN KEY (`immobilierId`) REFERENCES `immobilier` (`immobilier_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependances`
--

LOCK TABLES `dependances` WRITE;
/*!40000 ALTER TABLE `dependances` DISABLE KEYS */;
/*!40000 ALTER TABLE `dependances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailsusers`
--

DROP TABLE IF EXISTS `detailsusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detailsusers` (
  `detailsUsers_id` varchar(36) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `localisationId` varchar(255) DEFAULT NULL,
  `usersId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`detailsUsers_id`),
  UNIQUE KEY `REL_e875b6831950333a2828ed3810` (`localisationId`),
  UNIQUE KEY `REL_00a357bd884865ecd5268b509e` (`usersId`),
  CONSTRAINT `FK_00a357bd884865ecd5268b509e2` FOREIGN KEY (`usersId`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_e875b6831950333a2828ed38104` FOREIGN KEY (`localisationId`) REFERENCES `localisation` (`localisation_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailsusers`
--

LOCK TABLES `detailsusers` WRITE;
/*!40000 ALTER TABLE `detailsusers` DISABLE KEYS */;
INSERT INTO `detailsusers` VALUES ('c259509f-ce16-4671-8f12-231014b701b2','barriol','valentin','0633704844','38917176-51b0-49ae-bc9c-19131e2d1b25','a23c3eac-b009-4630-862c-4d3c5b1118ea');
/*!40000 ALTER TABLE `detailsusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoris` (
  `favoris_id` varchar(36) NOT NULL,
  `annonceId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`favoris_id`),
  KEY `FK_7751a6a27ed38b3dd48bbfb44fa` (`annonceId`),
  CONSTRAINT `FK_7751a6a27ed38b3dd48bbfb44fa` FOREIGN KEY (`annonceId`) REFERENCES `annonce` (`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoris`
--

LOCK TABLES `favoris` WRITE;
/*!40000 ALTER TABLE `favoris` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `image` blob NOT NULL,
  `image_id` varchar(36) NOT NULL,
  `immobilierId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `FK_2767e40966440ec6999f85fc726` (`immobilierId`),
  CONSTRAINT `FK_2767e40966440ec6999f85fc726` FOREIGN KEY (`immobilierId`) REFERENCES `immobilier` (`immobilier_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `immobilier`
--

DROP TABLE IF EXISTS `immobilier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `immobilier` (
  `description` text NOT NULL,
  `etage` int(11) NOT NULL,
  `frais_agence` int(11) NOT NULL DEFAULT '5000',
  `immobilier_id` varchar(36) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `nombre_pièces` int(11) NOT NULL,
  `prix_demande` int(11) NOT NULL,
  `prix_mini` int(11) NOT NULL,
  `superficie` float NOT NULL,
  `type` enum('Maison','Appartement','Studio') NOT NULL,
  `vendu` tinyint(4) NOT NULL DEFAULT '0',
  `agenceId` varchar(255) DEFAULT NULL,
  `detailsUsersId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`immobilier_id`),
  KEY `FK_b2c2dc16c2759d25774f659b3d5` (`agenceId`),
  KEY `FK_6fb93388bd9dca0d61fae029281` (`detailsUsersId`),
  CONSTRAINT `FK_6fb93388bd9dca0d61fae029281` FOREIGN KEY (`detailsUsersId`) REFERENCES `detailsusers` (`detailsUsers_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_b2c2dc16c2759d25774f659b3d5` FOREIGN KEY (`agenceId`) REFERENCES `agence` (`agence_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `immobilier`
--

LOCK TABLES `immobilier` WRITE;
/*!40000 ALTER TABLE `immobilier` DISABLE KEYS */;
/*!40000 ALTER TABLE `immobilier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localisation`
--

DROP TABLE IF EXISTS `localisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localisation` (
  `localisation_id` varchar(36) NOT NULL,
  `rue` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `postal` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  PRIMARY KEY (`localisation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localisation`
--

LOCK TABLES `localisation` WRITE;
/*!40000 ALTER TABLE `localisation` DISABLE KEYS */;
INSERT INTO `localisation` VALUES ('38917176-51b0-49ae-bc9c-19131e2d1b25','rue de guinée',10,'13006','marseille');
/*!40000 ALTER TABLE `localisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propositionachat`
--

DROP TABLE IF EXISTS `propositionachat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `propositionachat` (
  `date` datetime NOT NULL,
  `propositionAchat_id` varchar(36) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `annonceId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`propositionAchat_id`),
  KEY `FK_13efcc16da7ba1d8912de1740d0` (`annonceId`),
  CONSTRAINT `FK_13efcc16da7ba1d8912de1740d0` FOREIGN KEY (`annonceId`) REFERENCES `annonce` (`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propositionachat`
--

LOCK TABLES `propositionachat` WRITE;
/*!40000 ALTER TABLE `propositionachat` DISABLE KEYS */;
/*!40000 ALTER TABLE `propositionachat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `users_id` varchar(36) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Utilisateur','Vendeur','Agent Immobilier','Administrateur','SysAdmin') NOT NULL DEFAULT 'Utilisateur',
  `token` varchar(255) DEFAULT NULL,
  `agenceId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`users_id`),
  UNIQUE KEY `REL_3689a3d5acd7d788bfffe3bce8` (`agenceId`),
  CONSTRAINT `FK_3689a3d5acd7d788bfffe3bce87` FOREIGN KEY (`agenceId`) REFERENCES `agence` (`agence_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('a23c3eac-b009-4630-862c-4d3c5b1118ea','valentin.barriol@ynov.com','$2b$10$YY/cPuCp5mESatDSMwSjxeysrAOYKKIxrl5x3fkWV5FNeoDTgfBeO','Utilisateur',NULL,NULL);
INSERT INTO `users` VALUES ('37cb16e5-0898-44ad-9779-a281bb8c0f4a','admin.admin@admin.admin','$2b$10$GjDOvwxWdFgpQqloUwhapOf2V5b9xU2vg5HYUM.0RZ6qr3u80GHDm','Administrateur',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_favoris_favoris`
--

DROP TABLE IF EXISTS `users_favoris_favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_favoris_favoris` (
  `usersUsersId` varchar(255) NOT NULL,
  `favorisFavorisId` varchar(255) NOT NULL,
  PRIMARY KEY (`usersUsersId`,`favorisFavorisId`),
  KEY `IDX_91d2156401fd8f6f9afa2bde41` (`usersUsersId`),
  KEY `IDX_07505b7c458904c65a20ed0a75` (`favorisFavorisId`),
  CONSTRAINT `FK_07505b7c458904c65a20ed0a75e` FOREIGN KEY (`favorisFavorisId`) REFERENCES `favoris` (`favoris_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_91d2156401fd8f6f9afa2bde413` FOREIGN KEY (`usersUsersId`) REFERENCES `users` (`users_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_favoris_favoris`
--

LOCK TABLES `users_favoris_favoris` WRITE;
/*!40000 ALTER TABLE `users_favoris_favoris` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_favoris_favoris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'immosoftvente'
--

--
-- Dumping routines for database 'immosoftvente'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-01 15:29:02
