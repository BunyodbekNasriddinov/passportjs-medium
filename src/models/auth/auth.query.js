
/*
INSERT INTO users (email, password) 
VALUES ('johndoe@mail.com', crypt('johnspassword', gen_salt('bf')));
*/

/**
SELECT id 
FROM users
WHERE email = 'johndoe@mail.com' 
AND password = crypt('johnspassword', password);
 */

export const authGoogleQuery = `INSERT INTO users (user_id, username, email, password, provider, picture) VALUES ($1, $2, $3, crypt($4, gen_salt('bf')), $5, $6) RETURNING *`