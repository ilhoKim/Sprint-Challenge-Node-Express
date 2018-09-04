const express = require('express');

const ActionRoute = require('./Routes/ActionRoute');
const ProjectRoute = require('./Routes/ProjectRoute');

const server = express();

const port = 5555;


server.use(express.json());

server.use('/api/actions', ActionRoute);
server.use('/api/projects', ProjectRoute);

server.get('/', (req, res) => {
    res.send('Welcom to Express');
  });
    
server.listen(port, () => console.log(`\n== Express server online at port: ${port} ==\n`));