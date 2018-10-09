

INSERT INTO users (email, firstname, lastname, password)  VALUES('user1@user1.com','User','One','user1');
INSERT INTO users (email, firstname, lastname, password)  VALUES('user2@user2.com','User','Two','user2');



--run from Terminal: psql -d carly -U kencheng -f seed.sql