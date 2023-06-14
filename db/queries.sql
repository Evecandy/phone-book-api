CREATE DATABASE phonebook;

CREATE TABLE groups (
	groupId INT IDENTITY(100, 1) PRIMARY KEY,
	groupName VARCHAR(50) NOT NULL
);

CREATE TABLE persons (
	fullName VARCHAR(255) NOT NULL,
	mobileNumber VARCHAR(15) PRIMARY KEY NOT NULL,
	workNumber VARCHAR(15) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	homeAddress VARCHAR(50) NOT NULL,
	groupId INT,
	FOREIGN KEY (groupId) REFERENCES groups (groupId)
);

INSERT INTO groups VALUES ('Family');

INSERT INTO persons VALUES ('Collins Crud', '1234567891', '1345782132', 'collinscrud@gmail.com', 'Alaska 123', 100);
SELECT * FROM persons;