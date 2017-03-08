const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mainController = require('./controllers/mainCtrl')
var middleware = require('./controllers/middleware')
// var user = require('./user')
app.use(bodyParser.json());

app.get('/user', mainController.index);
app.get('/name', mainController.name);
app.get('/location', mainController.location );
app.get('/occupations', mainController.occupations);
app.get('/occupations/latest', mainController.latest);
app.get('/hobbies', mainController.hobbies);
app.get('/hobbies/:type', mainController.hobbiesType);
app.get('/family', mainController.family);
app.get('/family/gender', mainController.familyGender);
app.get('/restaurants', mainController.restaurants);
app.get('/restaurants/:name', mainController.restaurantsName);
app.get('/occupations?order=desc', mainController.occupations);
app.get('/occupations?order=asc', mainController.occupations);
app.put('/name', mainController.change);
app.put('/location', mainController.changeLoc);
app.post('/hobbies', mainController.learn);
app.post('/occupations', mainController.acquire);
app.post('/restaurants', mainController.newplace);
app.get('/skillz', mainController.skills);
// app.post('/skillz', mainController.skillz);
app.post('/skillz', middleware.generateId, mainController.postSkillz);
app.get('/secrets/:username/:pin',middleware.verifyUser, mainController.getSecrets);


const port = 3000
app.listen(port, function() {
  console.log(`Working on port ${port}`);
})
