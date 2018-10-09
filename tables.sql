


CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(320),
	firstname TEXT,
	lastname TEXT,
	password TEXT
);


CREATE TABLE IF NOT EXISTS cars (
	id SERIAL PRIMARY KEY,
	make TEXT,
	model TEXT,
	year INTEGER,
	photo VARBINARY(max),
	location TEXT
);


CREATE TABLE IF NOT EXISTS rental (
	id SERIAL PRIMARY KEY,
	owner_id INTEGER,
	renter_id INTEGER,
	car_id INTEGER,
	rental_start DATETIME
);



--run from Terminal: psql -d carly -U kencheng -f tables.sql