const express = require('express');

// const ProjectsRoute = require('./Routes/ProjectRoute');
// const ActionsRoute = require('./Routes/ActionRoute');

const server = express();

const port = 5555;


server.use(express.json());

// server.use('api/projects', ProjectRoute);
// server.use('api/actions', ActionRoute);

server.get('/', (req, res) => {
    res.send('Welcom to Express');
  });
    
server.listen(port, () => console.log(`\n== Express server online at port: ${port} ==\n`));