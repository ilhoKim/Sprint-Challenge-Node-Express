const express = require('express');
const router = express.Router();
const projectModel = require('../data/helpers/actionModel');

// DB SCHEME
//   id: number, no need to provide it when creating posts, the database will automatically generate it.
//   project_id: number, required, must be the id of an existing project.
//   description: string, up to 128 characters long, required.
//   notes: string, no size limit, not required. Used to record additional notes ore requirements to complete the action.
//   completed: boolean to indicate if the action has been completed, not required

// CRUD required

router.get('/', (req, res)=> {
    
})

router.get('/:id', (req, res) => {
    
} )

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

module.exports = router;