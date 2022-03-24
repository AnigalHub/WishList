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
SELECT * FROM wishlist
SELECT * FROM wish

CREATE TABLE wish(
	id uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
	idWishlist uuid not null,
	text text,
	img text
)

--ALTER TABLE wish
--	ALTER COLUMN img TYPE text;

ALTER TABLE wishlist
ADD everyone boolean
SELECT *FROM wish

GRANT ALL ON users TO lang_user
GRANT ALL ON wishlist TO lang_user
GRANT ALL ON wish TO lang_user

INSERT INTO users (loginUser,passwordUser) values ('Anna','757394757')
INSERT INTO users (loginUser,passwordUser) values ('Marya','1234567')
INSERT INTO wishlist (idUser,title) values ('0b8c0121-d9ba-43c3-ae4c-eb270a3c5e6c','New Year')
INSERT INTO wishlist (idUser,title) values ('3f6bdfb8-e112-456b-adb9-36cd4770719a','New Year')

SELECT wishlist.id FROM wishlist
INSERT INTO wish (idWishlist,text) values ('d27a40a1-c2c0-4c11-9da0-0fde59a15174','buy cat')

SELECT users.id, users.loginUser, users.passwordUser,  wishlist.title FROM users, wishlist
WHERE users.id = wishlist.idUser AND wishlist.idUser = '3f6bdfb8-e112-456b-adb9-36cd4770719a'

select u.id, u.loginUser, u.passwordUser,wl.title
FROM users u
INNER JOIN wishlist wl ON wl.idUser = u.id

SELECT * FROM wishlist
SELECT * FROM wish

DELETE FROM wish WHERE wish.id = '67633d0a-3e15-40b0-9d01-8343077aa39f'
DELETE FROM wish WHERE wish.text = ''





