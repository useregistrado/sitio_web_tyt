-- MySQL dump 10.19  Distrib 10.3.31-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: dbproject
-- ------------------------------------------------------
-- Server version	10.3.31-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ADMIN_USER`
--

DROP TABLE IF EXISTS `ADMIN_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ADMIN_USER` (
  `admin_user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de los usuarios administrador',
  `name` varchar(100) NOT NULL COMMENT 'Nombre del usuario administrador',
  `document_id` varchar(20) NOT NULL COMMENT 'Documento del usuario administrador',
  `password` varchar(100) NOT NULL COMMENT 'Contraseña del usuario administrador',
  PRIMARY KEY (`admin_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='Registros de los usuarios administradores';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMIN_USER`
--

LOCK TABLES `ADMIN_USER` WRITE;
/*!40000 ALTER TABLE `ADMIN_USER` DISABLE KEYS */;
INSERT INTO `ADMIN_USER` VALUES (1,'Oscar','74184432','admin15'),(2,'Camilo','1007422184','admin23');
/*!40000 ALTER TABLE `ADMIN_USER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AUTH`
--

DROP TABLE IF EXISTS `AUTH`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AUTH` (
  `auth_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`auth_id`),
  UNIQUE KEY `username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTH`
--

LOCK TABLES `AUTH` WRITE;
/*!40000 ALTER TABLE `AUTH` DISABLE KEYS */;
INSERT INTO `AUTH` VALUES (1,'1052410844','$2b$04$Jz0YTHhpY8DxrnmTCeawd.aT/0nKjClo19xmKAtrlTNkuZS/a19e2'),(2,'1052410843','$2b$04$d52T16Uf7DvtBq.xl/Ta..uwHEO1A3KQNUw9nqJw2R9DN0vDaELLq');
/*!40000 ALTER TABLE `AUTH` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CONTACT`
--

DROP TABLE IF EXISTS `CONTACT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CONTACT` (
  `contact_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `phone_number` int(10) NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CONTACT`
--

LOCK TABLES `CONTACT` WRITE;
/*!40000 ALTER TABLE `CONTACT` DISABLE KEYS */;
/*!40000 ALTER TABLE `CONTACT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CONTRACT`
--

DROP TABLE IF EXISTS `CONTRACT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CONTRACT` (
  `contract_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del contrato',
  `initial_date` date NOT NULL COMMENT 'Fecha de inicio del contrato',
  `address` varchar(50) NOT NULL COMMENT 'Dirección de instalación',
  `additional_price` int(11) DEFAULT NULL COMMENT 'Costos adicionales (Mayor cantidad cable, imprevistos)',
  `customer_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL COMMENT 'Identificador del plan relacionado',
  PRIMARY KEY (`contract_id`),
  KEY `CONTRACT_FK` (`customer_id`),
  KEY `CONTRACT_FK_1` (`plan_id`),
  CONSTRAINT `CONTRACT_FK` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `CUSTOMER` (`customer_id`),
  CONSTRAINT `CONTRACT_FK_1` FOREIGN KEY (`plan_id`) REFERENCES `PLAN` (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='Registros de los contratos realizados por la empresa con los clientes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CONTRACT`
--

LOCK TABLES `CONTRACT` WRITE;
/*!40000 ALTER TABLE `CONTRACT` DISABLE KEYS */;
/*!40000 ALTER TABLE `CONTRACT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CUSTOMER`
--

DROP TABLE IF EXISTS `CUSTOMER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CUSTOMER` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del cliente',
  `name` varchar(100) NOT NULL COMMENT 'Nombre del cliente',
  `document_type` varchar(20) NOT NULL COMMENT 'Tipo de documento',
  `document` varchar(20) NOT NULL COMMENT 'Documento del cliente',
  `phone_number` int(10) unsigned NOT NULL COMMENT 'Numero de telefono',
  `email` varchar(50) NOT NULL COMMENT 'Correo de contacto',
  `billing_email` varchar(50) NOT NULL COMMENT 'Correo de facturación',
  `username` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='Registros de clientes de la base de datos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CUSTOMER`
--

LOCK TABLES `CUSTOMER` WRITE;
/*!40000 ALTER TABLE `CUSTOMER` DISABLE KEYS */;
INSERT INTO `CUSTOMER` VALUES (1,'DavidV','CC','1052410844',3232023882,'dradav97','dradav97','1052410844'),(2,'David vargas','CC','1052410843',3232023882,'dradav97','dradav97','1052410843');
/*!40000 ALTER TABLE `CUSTOMER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `INVOICE`
--

DROP TABLE IF EXISTS `INVOICE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `INVOICE` (
  `invoice_id` int(11) NOT NULL COMMENT 'Identificador de la factura',
  `generation_date` date NOT NULL COMMENT 'Fecha de generación de la factura',
  `amount` int(11) NOT NULL COMMENT 'Monto a pagar',
  `additional_amount` int(11) DEFAULT NULL COMMENT 'Montos adicionales (reconexión, daño de equipos)',
  `payment_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Estado del pago',
  `contract_id` int(11) NOT NULL COMMENT 'Identificador del contrato relacionado',
  PRIMARY KEY (`invoice_id`),
  KEY `INVOICE_FK` (`contract_id`),
  CONSTRAINT `INVOICE_FK` FOREIGN KEY (`contract_id`) REFERENCES `CONTRACT` (`contract_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Registros de las facturas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `INVOICE`
--

LOCK TABLES `INVOICE` WRITE;
/*!40000 ALTER TABLE `INVOICE` DISABLE KEYS */;
/*!40000 ALTER TABLE `INVOICE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LOG`
--

DROP TABLE IF EXISTS `LOG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LOG` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del registro',
  `operation` varchar(100) NOT NULL COMMENT 'Descripción de la operación',
  `date` date NOT NULL COMMENT 'Fecha del registro',
  `CUSTOMER_ID` int(11) NOT NULL,
  PRIMARY KEY (`log_id`),
  KEY `LOG_FK` (`CUSTOMER_ID`),
  CONSTRAINT `LOG_FK` FOREIGN KEY (`customer_id`) REFERENCES `CUSTOMER` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='En donde se guardarán los registros de cambios en la base de datos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LOG`
--

LOCK TABLES `LOG` WRITE;
/*!40000 ALTER TABLE `LOG` DISABLE KEYS */;
/*!40000 ALTER TABLE `LOG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PLAN`
--

DROP TABLE IF EXISTS `PLAN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PLAN` (
  `plan_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del plan',
  `name` varchar(100) DEFAULT NULL,
  `megabytes` int(11) NOT NULL COMMENT 'Cantidad de los megasbytes contratados',
  `basic_price` int(11) NOT NULL COMMENT 'Valor basico de la plan',
  `install_price` int(11) NOT NULL COMMENT 'Valor de la instalación',
  `location_type` varchar(10) NOT NULL COMMENT 'Tipo de localización (Urbano o Rural)',
  `service_type` varchar(12) NOT NULL COMMENT 'Tipo de servicio (Residencial o Comercial)',
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COMMENT='Registros referentes a los planes adquiridos por los clientes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PLAN`
--

LOCK TABLES `PLAN` WRITE;
/*!40000 ALTER TABLE `PLAN` DISABLE KEYS */;
INSERT INTO `PLAN` VALUES (1,'3 Megas urbano residencial',3,60000,100000,'Urbano','Residencial'),(2,'5 Megas urbano residencial',5,70000,100000,'Urbano','Residencial'),(3,'7 Megas urbano residencial',7,85000,100000,'Urbano','Residencial'),(4,'3 Megas rural residencial',3,60000,200000,'Rural','Residencial'),(5,'5 Megas rural residencial',5,70000,200000,'Rural','Residencial'),(6,'7 Megas rural residencial',7,85000,200000,'Rural','Residencial'),(7,'3 Megas urbano comercial',3,60000,100000,'Urbano','Comercial'),(8,'5 Megas urbano comercial',5,70000,100000,'Urbano','Comercial'),(9,'7 Megas urbano comercial',7,85000,100000,'Urbano','Comercial'),(10,'3 Megas rural comercial',3,60000,200000,'Rural','Comercial'),(11,'5 Megas rural comercial',5,70000,200000,'Rural','Comercial'),(12,'7 Megas rural comercial',7,85000,200000,'Rural','Comercial');
/*!40000 ALTER TABLE `PLAN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRANSACTION`
--

DROP TABLE IF EXISTS `TRANSACTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TRANSACTION` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Idenficador de la transacción',
  `description` varchar(100) NOT NULL COMMENT 'Descripción de la transacción',
  `amount` int(11) NOT NULL COMMENT 'Monto de la transacción',
  `currency_code` varchar(20) NOT NULL COMMENT 'Codigo del tipo de moneda',
  `transaction_date` datetime NOT NULL COMMENT 'Fecha de la transacción',
  `ref_payco` varchar(50) NOT NULL COMMENT 'Referencia de epayco',
  `bank_name` varchar(50) NOT NULL COMMENT 'Nombre del banco',
  `franchise` varchar(50) NOT NULL COMMENT 'Nombre de la franquicia (PSE, Efecty)',
  `customer_ip` varchar(20) NOT NULL COMMENT 'IP desde donde se realizó la transacción',
  `cod_transaction_state` varchar(20) NOT NULL COMMENT 'Codigo del estado de la transacción',
  `invoice_id` int(11) NOT NULL COMMENT 'Identificador de la factura local relacionada',
  PRIMARY KEY (`transaction_id`),
  KEY `TRANSACTION_FK` (`invoice_id`),
  CONSTRAINT `TRANSACTION_FK` FOREIGN KEY (`invoice_id`) REFERENCES `INVOICE` (`invoice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRANSACTION`
--

LOCK TABLES `TRANSACTION` WRITE;
/*!40000 ALTER TABLE `TRANSACTION` DISABLE KEYS */;
/*!40000 ALTER TABLE `TRANSACTION` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-04 14:59:18
