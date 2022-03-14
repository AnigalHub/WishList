CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
	id uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
	loginUser text,
	passwordUser text
)
SELECT *FROM users
