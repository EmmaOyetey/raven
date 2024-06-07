DROP DATABASE IF EXISTS raven;

CREATE DATABASE raven;

USE raven;

CREATE TABLE `organisation` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(1000) DEFAULT NULL,
  `logo` VARCHAR(255) DEFAULT NULL,
  `overview` VARCHAR(1000) DEFAULT NULL,
  `websiteURL` VARCHAR(1000) DEFAULT NULL,
  `impactURL` VARCHAR(1000) DEFAULT NULL,
  `careers` BOOLEAN DEFAULT FALSE,
  `creative_arts` BOOLEAN DEFAULT FALSE,
  `curriculum` BOOLEAN DEFAULT FALSE,
  `life_skills` BOOLEAN DEFAULT FALSE,
  `mental_health` BOOLEAN DEFAULT FALSE,
  `physical_activity` BOOLEAN DEFAULT FALSE,
  `pshe` BOOLEAN DEFAULT FALSE,
  `tech` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `rating` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `organisation_id` BIGINT NOT NULL,
  `rating` INT NOT NULL,
  `comment` VARCHAR(1000) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`organisation_id`) REFERENCES `organisation`(`id`) ON DELETE CASCADE
);