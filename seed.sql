

INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();
INSERT INTO users (email, firstname, lastname, password, telephone, gender, occupation, nationality)  VALUES();



--Terminal: psql -d carly -U kencheng -f seed.sql

 id |        email        | firstname | lastname |                             password                             | telephone | gender | occupation | nationality
----+---------------------+-----------+----------+------------------------------------------------------------------+-----------+--------+------------+-------------
  6 | kencheng3@gmail.com | Ken       | Cheng    | b5482ef375e6b1a568925ba5cbdaf29730cabe05f36dc34e6573a1045818b8eb |  81022008 |        |            |
  1 | user1@user1.com     | Userone   | Dude     | f9777362314a88ba0d7df701ed6bebd0a3577be33befe72babc40c39de65ab1f |  91234567 |        |            |
  2 | user2@user2.com     | Usertwo   | Lady     | 2a63acd1ae63929783ab9179b4d123562b21f8091c05d2ef4f0fad866ab5c7c9 |  90008000 |        |            |
  3 | user3@user3.com     | Bob       | Dunkirk  | be4070dc921d22426ebc688f43c0f1ca841859266d603e58a4910e07f0ed6f59 |  81237788 |        |            |
  4 | wasabi@man.com      | Wasabi    | Man      | ec413c5b9b8adf36deb92f9dc300a2258b6444471ea8edbda7191afd9718b965 |  80011223 |        |            |
  7 | bongo@bongos.com    | Bongo     | Man      | 3a77032fbed163d75b4b27ac8ab07cea15e04ccf638906a5405bab3fb6197eb1 |  87489456 | Male   | Musician   | Brazilian
  8 | bruce@wayne.com     | Bruce     | Wayne    | bb1e6527a5c95ce0774f02fe57a85c9aef0cbfb2174fe51a77d563408db45fd9 |  12345678 | Male   | Batman     | Gotham
  9 | akira@wong.com      | Akira     | Wong     | bda2cf3b8083f1c78711a47f70013c5aaf4a341aefa9b282a4aa216a787c4dfb |  12345678 |        |            |
(8 rows)

 id | owner_id |    make     |       model       | year | passengers |  transmission  |   fuel   |                 photo                 |          address           | postcode | avail_start | avail_end  | price  |                     comments
----+----------+-------------+-------------------+------+------------+----------------+----------+---------------------------------------+----------------------------+----------+-------------+------------+--------+--------------------------------------------------
  1 |        6 | Lamborghini | Miura             | 1966 |          2 | Manual         | Gasoline | 56003beb9960913ba218fab4775a1309.jpg  | 4 Tanglin Walk             |   247877 | 2018-10-01  | 2018-12-25 | 125.88 | Extremely popular with the ladies
  2 |        6 | Tesla       | Model 3           | 2018 |          5 | Automatic      | Electric | 03f44cfb068c80a85f2a03eedd8b05c5.jpg  | 2 Ridley Park              |   248470 | 2018-10-24  | 2019-01-15 |  35.00 | Charger not included, bro
  3 |        2 | Audi        | A1                | 2011 |          5 | Semi-automatic | Diesel   | 4510bac9babfb3479d2e426afc567539.jpg  | 33 Parry Walk              |   547044 | 2018-10-19  | 2018-11-15 |  64.50 | A1 Clubsport Quattro, great acceleration!
  4 |        4 | Dodge       | Charger           | 1969 |          2 | Manual         | Gasoline | 5d72cb9779c6dce50562dc0f72459d4d.jpg  | 1 Raffles Institution Lane |   575954 | 2018-09-19  | 2020-03-20 |  88.88 | Lovely ride, perfect for cruising on the weekend
  7 |        3 | Land Rover  | Range Rover Sport | 2016 |          6 | Automatic      | Gasoline | ca95123c6d046d747ab79119c56226f9.jpg  | 2 Jurong East Street 21    |   609601 | 2018-08-15  | 2019-04-16 | 120.00 | Fun for the whole family
  8 |        6 | Jaguar      | E-Type            | 1961 |          2 | Manual         | Gasoline | ba9f1ab064fa64ac78e03ee5d8529ade.jpg  | 22 Dempsey Road            |   249679 | 2018-11-06  | 2019-11-29 | 175.00 | The classic
  9 |        8 | Tesla       | Model S           | 2018 |          5 | Automatic      | Electric | dae3c50487bc3673f16f1904396ef64d.jpg  | 661 Bukit Timah Road       |   269734 | 2018-10-10  | 2019-09-18 |  85.50 | Once you go electric...
 10 |        8 | Ferrari     | Dino 246 GT       | 1969 |          2 | Manual         | Diesel   | 69360f75ba66184bec3336d126e6a814.jpg  | 1 Turf Club Avenue         |   738078 | 2019-01-03  | 2020-01-15 | 230.00 |
 11 |        8 | Toyota      | Tacoma            | 2017 |          8 | Semi-automatic | Hybrid   | 0922e5cac9dc51054a124186f4b826ac.jpeg | 1000 Upper Changi Rd N     |   507707 | 2019-02-13  | 2019-03-21 |  79.00 | Put the extra people in the back
 12 |        8 | Porsche     | 911 Turbo S       | 2014 |          4 | Semi-automatic | Gasoline | c80de9fa28738dafe02ea052714688a6.jpg  | 136-138 Casuarina Rd       |   579526 | 2019-03-19  | 2020-08-19 | 333.33 | Cool matte black color
 13 |        9 | Trek        | 1000              | 2008 |          1 | Manual         | Hybrid   | e68937fcd7c988824c1525c0e1ed16b0.jpg  | 8 on Claymore              |   229572 | 2018-11-13  | 2018-11-21 |  10.00 | Cool bike
(11 rows)

 id | renter_id | car_id | rental_start | rental_end
----+-----------+--------+--------------+------------
  1 |         4 |      2 | 2018-10-27   | 2018-10-27
  2 |         7 |      2 | 2018-11-21   | 2018-11-23
  3 |         4 |      1 | 2018-10-18   | 2018-10-21
  4 |         3 |      2 | 2018-12-11   | 2018-12-15
  5 |         3 |      2 | 2018-11-11   | 2018-11-12
  6 |         4 |      1 | 2018-11-13   | 2018-11-13
  7 |         4 |      7 | 2018-10-23   | 2018-10-25
  8 |         1 |      3 | 2018-10-23   | 2018-10-25
  9 |         9 |      1 | 2018-10-31   | 2018-11-01
(9 rows)

