import ProjectHelpers from '../data/helpers/projectModel';

// const express = require('express');
// const router = express.Router();
// const projectModel = require('../data/helpers/projectModel');

// DB SCHEME:
//   id: number, no need to provide it when creating projects, the database will generate it.
//   name: string, up to 128 characters long, required.
//   description: string, up to 128 characters long, required.
//   completed: boolean to indicate if the project has been completed, not required

// CRUD required

const ProjectController = {
    // getPJT, createPJT, updatePJT, removepjst

    getPJT: (req, res) => {
        const { id } = req.params;
        ProjectHelpers.get(id)
            .then(projects => {
                if(projects.length > 0) {
                    return res.status(200).json(projects);
                }
                return res.status(400).json({error: 'No Projects'})
            })
            .catch(err => res.status(404).json({
                error: 'Cannot Find Project'
            }))
    },

    // createPJT: (req, res) => {

    // }







}


export default ProjectController;