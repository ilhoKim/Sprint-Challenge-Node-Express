const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectModel.js");

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
};

// GET
router.get("/", (req, res) => {
  db.get()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      sendUserError(500, "Data cannot be retrieved", res);
      return;
    });
});

router.get("/:id", (req, res) => {
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
      sendUserError(500, "Data cannot be retrieved", res);
      return;
    });
});

// INSERT
router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  if (!name || !description) {
    sendUserError(400, "Please provide name AND description", res);
    return;
  }
  db.insert({ name, description, completed })
    .then(response => {
      res.status(201).json({ id: response.id, name, description, completed });
    })
    .catch(error => {
      console.log(error);
      sendUserError(400, "Field not found", res);
      return;
    });
});

// UPDATE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  db.update(id, { name, description, completed })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      sendUserError(500, "Something bad happened in the DB", res);
      return;
    });
});

// REMOVE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(response => {
      if (response === 0) {
        sendUserError(404, "The user with that ID does not exist.", res);
        return;
      }
      res.json({ success: `User with id: ${id} removed from the system` });
    })
    .catch(error => {
      sendUserError(500, "The user could not be removed", res);
      return;
    });
});

module.exports = router;
