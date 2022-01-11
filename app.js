const express = require('express');
const cors = require('cors');

// Routers
const {todosRouter} = require('./routes/todos.router');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller')

//Init app
const app = express();

// Allowing cors
app.use(cors())

// Abro canales
app.use(express.urlencoded());
app.use(express.json());

// Endpoints
// http://localhost:4000/api/v1/...
app.use('/api/v1/todos',todosRouter);

app.use(globalErrorHandler);

module.exports = { app }; 

