const express = require('express');
const router = express.Router();
const projectModel = require('../data/helpers/projectModel');

// DB SCHEME:
//   id: number, no need to provide it when creating projects, the database will generate it.
//   name: string, up to 128 characters long, required.
//   description: string, up to 128 characters long, required.
//   completed: boolean to indicate if the project has been completed, not required

// CRUD required
router.get('/', (req, res)=> {
    projects.get().then(projects => res.json(projects));
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