CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
	id uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
	loginUser text,
	passwordUser text
)
SELECT *FROM users

CREATE TABLE wishlist(
	id uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
	idUser uuid,
	title text not null
)
SELECT *FROM wishlist

CREATE TABLE wish(
	id uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
	idWishlist uuid not null,
	text text,
	img bytea
)
SELECT *FROM wish