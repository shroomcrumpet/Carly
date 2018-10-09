


CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(320) UNIQUE,
	firstname TEXT,
	lastname TEXT,
	password TEXT
);


CREATE TABLE IF NOT EXISTS cars (
	id SERIAL PRIMARY KEY,
	make TEXT,
	model TEXT,
	year INTEGER,
	photo TEXT,
	location TEXT
);


CREATE TABLE IF NOT EXISTS rental (
	id SERIAL PRIMARY KEY,
	owner_id INTEGER,
	renter_id INTEGER,
	car_id INTEGER,
	rental_start DATE
);



--run from Terminal: psql -d carly -U kencheng -f tables.sql