const express = require('express');
const ActionRouter = express.Router();
const projectModel = require('../data/helpers/actionModel');

// DB SCHEME
//   id: number, no need to provide it when creating posts, the database will automatically generate it.
//   project_id: number, required, must be the id of an existing project.
//   description: string, up to 128 characters long, required.
//   notes: string, no size limit, not required. Used to record additional notes ore requirements to complete the action.
//   completed: boolean to indicate if the action has been completed, not required

// CRUD required

router.get()
router.get()
router.post()
router.delete()
router.put()

module.exports = ActionRouter;