CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) not null,
  phone VARCHAR(20),
  city VARCHAR(255),
  project_name VARCHAR(100)
)

"select * from users";

`SELECT * FROM mock_data where id = `${req.params.userId}`;

"INSERT INTO teachers (name, email, password) VALUES ($1, $2, $3)", [name, email, password],

"UPDATE teachers SET name = $1, email = $2, password = $3 WHERE id = $4", [name, email, password, id],

"DELETE FROM teachers WHERE id = $1", [id],

// -------- Parental Engagement App
CREATE TABLE teachers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password VARCHAR(255) not null
)

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password VARCHAR(255) not null
)

CREATE TABLE parents(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password varchar(255) not null
)

CREATE TABLE subjects(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null
)

// ----------- END -------------