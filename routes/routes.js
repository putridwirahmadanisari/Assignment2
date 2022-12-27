const express = require('express');
const routes = express();
const controllers = require('../controllers');
const authentication = require('../middleware/authentication');

routes.post('/login', controllers.userController.userLogin);
routes.use(authentication);
routes.get('/teams', controllers.teamController.getAllTeams);
routes.get('/teams/:id', controllers.teamController.getTeamById);

module.exports = routes;
