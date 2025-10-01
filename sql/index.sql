CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  document VARCHAR(14) NOT NULL UNIQUE
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(11) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  carrier_id INT REFERENCES carriers(id),
  client_id INT REFERENCES clients(id)
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INT REFERENCES phones(id),
  amount NUMERIC(10,2) NOT NULL CHECK (amount >= 10 AND amount <= 1000),
  created_at TIMESTAMP DEFAULT NOW()
);
