const express      = require('express');
const routes       = express.Router();
const requireDir   = require("require-dir");

//! Carrega todos os models e deixa úblico
requireDir("./models");

//! Chama os controllers
const planets = require('./controllers/planets');



//! Planets
routes.get('/planet/list', planets.list);
routes.get('/planet/:id', planets.details);
routes.get('/planet/populate', planets.populate);
routes.get('/planet/getDataFromApi', planets.getDataFromApi);


module.exports = routes;

