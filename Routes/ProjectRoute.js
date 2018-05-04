import express from 'express';
import ProjectController from '../Controllers/ProjectController';

const ProjectRouter = express.Router();
const { getPJT, createPJT, updatePJT, removepjst } = ProjectController;

ProjectRouter.get('/:id', getPJT);
ProjectRouter.insert('/', createPJT);
ProjectRouter.put('/:id', updatePJT);
ProjectRouter.delete('/:id', removePJT);

export default ProjectRouter;