/**
 * ************************************
 *
 * @module  user.model.js
 * @author Benjamin Morrison/Timothy Mai
 * @date 11/5/19
 * @description database queries for user table in database
 *
 * ************************************
 */

module.exports = {
  checkUsernameAndEmail: 'SELECT * FROM user WHERE username = $1 OR email = $2', // when signing up, check if username or email has been used already
  createUser: 'INSERT INTO user (username, password, email) VALUES ($1, $2, $3)', // creates user on user table
  readUser: '', // gets user info
  updateUser: '', // change user info
  deleteUser: '', // delete user info
};
