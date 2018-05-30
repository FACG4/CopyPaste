BEGIN;

DROP TABLE IF EXISTS users, CssCodes, HtmlCodes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
);

CREATE TABLE CssCodes(
  id SERIAL PRIMARY KEY,
  css_code text NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE HtmlCodes(
  id SERIAL PRIMARY KEY,
  html_code text NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users(name, email, password) VALUES
('Israa','isramm94@gmail.com','123'),
('Ramy','ramy@gmail.com','123'),
('Mohammed','mohammed@gmail.com','123'),
('Sallam','sallamtanna2015@hotmail.com','00');



COMMIT;
