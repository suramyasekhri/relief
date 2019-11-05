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

const accountController = {};

// check if sign up email has been used or not
accountController.checkSignUpInfo = (req, res, next) => {
  // pull username, password, and email from req.body
  const {username, password, email} = req.body;

  // run query to see if 
};

module.exports = accountController;
