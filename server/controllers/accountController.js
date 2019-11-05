/* eslint-disable no-console */
/**
 * ************************************
 *
 * @module  accountController.js
 * @author Timothy Mai
 * @date 11/4/19
 * @description controller containing middleware for account-related tasks
 *
 * ************************************
 */

const pool = require('../db/index');
const queries = require('../db/user.model');

const accountController = {};

// check if sign up email or username has been used or not
accountController.checkSignUpInfo = (req, res, next) => {
  // pull username and email from req.body
  const { username, email } = req.body;

  // run query to see if email or username has already been used
  pool.query(queries.checkUsernameAndEmail, [username, email], (err, result) => {
    if (err) {
      console.error('error found in checking username and password', err);
      return next(err);
    }

    if (result) {
      console.log('username or email has already been used');

      // redirect back to sign up page
      return res.redirect('/signup');
      // CONSIDER DISPLAYING AN ERROR MESSAGE OF SOME SORT INSTEAD
    }

    return next();
  });
};

// after passing checkUsernameAndEmail, create new user
accountController.createUser = (req, res, next) => {
  // pull username, password, and email from req.body
  const { username, password, email } = req.body;

  // run query to add user to database
  pool.query(queries.createUser, [username, password, email], (err, result) => {
    if (err) {
      console.error('error found in creating user', err);
      return next(err);
    }

    console.log('user created!', result);

    return next();
  });
};

module.exports = accountController;
