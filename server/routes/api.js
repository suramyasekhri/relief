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

const router = express.Router();

// route for sign up
router.get('/signup', (req, res) => {
  res.status(200).send('this route works yo');
});

// route for sign in
