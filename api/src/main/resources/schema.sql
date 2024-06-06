DROP DATABASE IF EXISTS raven;

CREATE DATABASE raven;

USE raven;

CREATE TABLE `organisation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `overview` varchar(1000) DEFAULT NULL,
  `websiteURL` varchar(1000) DEFAULT NULL,
  `impactURL` varchar(1000) DEFAULT NULL,
  `careers` BOOLEAN DEFAULT FALSE,
  `creative_arts` BOOLEAN DEFAULT FALSE,
  `curriculum`BOOLEAN DEFAULT FALSE,
  `life_skills`BOOLEAN DEFAULT FALSE,
  `mental_health` BOOLEAN DEFAULT FALSE,
  `physical_activity` BOOLEAN DEFAULT FALSE,
  `pshe`BOOLEAN DEFAULT FALSE,
  `tech` BOOLEAN DEFAULT FALSE,
   PRIMARY KEY (`id`)
);

CREATE TABLE `rating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `organisation_id` bigint NOT NULL,
  `rating` int NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`organisation_id`) REFERENCES `organisation`(`id`) ON DELETE CASCADE
);