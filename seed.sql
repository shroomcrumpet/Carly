

INSERT INTO users (email, firstname, lastname, password)  VALUES('user1@user1.com','Userone','Dude','f9777362314a88ba0d7df701ed6bebd0a3577be33befe72babc40c39de65ab1f');
INSERT INTO users (email, firstname, lastname, password)  VALUES('user2@user2.com','Usertwo','Lady','2a63acd1ae63929783ab9179b4d123562b21f8091c05d2ef4f0fad866ab5c7c9');
INSERT INTO users (email, firstname, lastname, password)  VALUES('user3@user3.com','Bob','Dunkirk','be4070dc921d22426ebc688f43c0f1ca841859266d603e58a4910e07f0ed6f59');



--Terminal: psql -d carly -U kencheng -f seed.sql