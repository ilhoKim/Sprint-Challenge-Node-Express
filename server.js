const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const ProjectsController = require('./Controllers/ProjectController');
const ActionsController = require('./Controllers/ActionController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/Controllers', ProjectController);
server.use('/Controllers', ActionController);

server.get('/', (req, res) => {
    res.send('Api running');
  });
    
server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));