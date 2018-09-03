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
        sendUserError(500, 'Data cannot be retrieved', res)
        return;
    })
})

router.get('/:id', (req, res) => {
    db.get(req.params.id)
    .then(response => {
        if (response.length === 0) {
            sendUserError(404, "ID not found", res);
            return;
        } else {
            res.status(200).json(response);
        }
    })
    .catch(error => {
        sendUserError(500, 'Data cannot be retrieved', res)
        return;
    })
})


// INSERT


// UPDATE
// REMOVE


module.exports = router;