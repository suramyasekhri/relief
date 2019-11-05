/**
 * ************************************
 *
 * @module  api.js
 * @author Timothy Mai
 * @date 11/4/19
 * @description router for /api route
 *
 * ************************************
 */

const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

// route for sign up
router.get('/signup', (req, res) => {
  res.status(200).send('this route works yo');
  // display signup page instead
});

router.post('/signup', accountController.checkSignUpInfo, accountController.createUser, (req, res) => {
  res.status(200).send('this route works yo');
  // redirect to main page after creating user instead
});

// route for sign in
