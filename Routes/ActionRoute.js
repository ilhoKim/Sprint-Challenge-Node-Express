const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel.js');

const sendUserError = (status, message, res) => {
    res
      .status(status)
      .json({errorMessage: message})
  };

// GET
router.get('/', (req, res) => {
    db.get()
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        sendUserError(500, 'Data cannot be retrieve', res)
        return;
    })
})

// INSERT
// UPDATE
// REMOVE


module.exports = router;