const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel');

const sendUserError = (status, message, res) => {
    res
      .status(status)
      .json({errorMessage: message})
  };


module.exports = router;