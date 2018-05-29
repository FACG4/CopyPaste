BEGIN;

DROP TABLE IF EXISTS users, codes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
);

CREATE TABLE codes(
  id SERIAL PRIMARY KEY,
  html_code text ,
  css_code text ,
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users(name, email, password) VALUES
('Israa','isramm94@gmail.com','123'),
('Ramy','ramy@gmail.com','123'),
('Mohammed','mohammed@gmail.com','123'),
('Sallam','sallamtanna2015@hotmail.com','00');

INSERT INTO codes (user_id,html_code,css_code) VALUES
(1,'<ul><li>Home</li></ul>', '.navbar{ color:red;}'),
(2,'<ul><li>About</li></ul>', '.navbar{ color:blue;}'),
(3,'<ul><li>Contact</li></ul>', '.navbar{ color:black;}'),
(3,'<ul><li>Log Outtttttt</li></ul>', '.navbar{ color:white5;}'),
(2,'<ul><li>Log Outttttt</li></ul>', '.navbar{ color:white4;}'),
(4,'<ul><li>Log Outtttt</li></ul>', '.navbar{ color:white3;}'),
(4,'<ul><li>Log Outtt</li></ul>', '.navbar{ color:white2;}'),
(4,'<ul><li>Log Outt</li></ul>', '.navbar{ color:white1;}');

COMMIT;
