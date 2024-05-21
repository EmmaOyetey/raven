DROP DATABASE IF EXISTS raven;

CREATE DATABASE raven;

USE raven;

CREATE TABLE `questions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `organisation_name` varchar(1000) DEFAULT NULL,
  `organisation_logo` varchar(255) NOT NULL,
  `organisation_overview` varchar(1000) DEFAULT NULL,
  `organisation_link` varchar(1000) DEFAULT NULL,
  `impact` varchar(1000) DEFAULT NULL,
  `careers` BOOLEAN DEFAULT FALSE,
  `creative_arts` BOOLEAN DEFAULT FALSE,
  `curriculum`BOOLEAN DEFAULT FALSE,
  `mental_health` BOOLEAN DEFAULT FALSE,
  `physical_activity`BOOLEAN DEFAULT FALSE,
  `pshe`BOOLEAN DEFAULT FALSE,
  `tech` BOOLEAN DEFAULT FALSE,

   PRIMARY KEY (`id`)
);

<--`delivery_method` ENUM('in-person', 'remote', 'teacher-training') DEFAULT NULL,-->
<--`age_group` ENUM('KS1', 'KS2, 'KS3', 'Teacher') DEFAULT NULL