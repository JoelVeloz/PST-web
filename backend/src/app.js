const express = require('express');
const server = express();
const estudianteRoutes = require('./routes/estudiantes');
const profesorRoutes = require('./routes/profesores');
const cors = require('cors');
const path = require('path');
//Configuraciones
server.set('port', 8080);
server.set('host', 'localhost');

//Middlewares
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'build')));

//Rutas
// index route

server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// estudiantes routes 
server.use('/estudiantes', estudianteRoutes);
server.use('/profesor', profesorRoutes);

// error route 
server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})


module.exports = server;
