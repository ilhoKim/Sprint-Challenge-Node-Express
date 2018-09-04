const express = require("express");
const router = express.Router();
const db = require("../data/helpers/actionModel.js");

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
  const { project_id, description, notes, completed } = req.body;
  if (!description || !notes) {
    sendUserError(400, "Please provide description AND notes", res);
    return;
  }
  db.insert({ project_id, description, notes, completed })
    .then(response => {
      res.status(201).json({ id: response.id, description, notes });
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
  const { project_id, description, notes, completed } = req.body;

  db.update(id, { project_id, description, notes, completed })
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
