const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const ProjectsRouter = require('./Routes/ProjectRoutes');
// const ActionsRouter = require('./Routes/ActionRoutes');

const server = express();

server.get('/', (req, res) => {
    res.send('Api running');
  });
    
server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));