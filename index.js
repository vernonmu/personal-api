const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var mainController = require('./controllers/mainCtrl.js')
var user = require('./user.js')


app.get('/name', mainController.name);
app.get('/location', mainController.location );
app.get('/occupations', mainController.occupations);
app.get('/occupations/latest', mainController.latest);
app.get('/hobbies', mainController.hobbies);
app.get('/hobbies/:type', mainController.hobbiesType);

const port = 3000
app.listen(port, function() {
  console.log(`Working on port ${port}`);
})
