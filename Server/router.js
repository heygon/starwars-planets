const express      = require('express');
const routes       = express.Router();
const requireDir   = require("require-dir");


requireDir("./models");
const planets = require('./controllers/planets');


//! Planets
routes.get('/planet/list', planets.list);
routes.get('/planet/:id', planets.details);
routes.get('/planet/populate', planets.populate);


module.exports = routes;

