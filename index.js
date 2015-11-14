var express = require('express');
var bodyParser = require('body-parser');

var MiddlewareCtrl = require('./controllers/middleware.js');
var MainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(MiddlewareCtrl.addHeaders);

app.get('/name', MainCtrl.getName);
app.get('/location', MainCtrl.getLocation);
app.get('/occupations', MainCtrl.getOccupations);
app.get('/occupations/latest', MainCtrl.getLatest);
app.get('/hobbies', MainCtrl.getHobbies);
app.get('/hobbies/:when', MainCtrl.getHobbyType);
app.get('/skills', MainCtrl.getSkills);



app.put('/name', MainCtrl.changeName);
app.put('/location', MainCtrl.changeLocation);

app.post('/occupations', MainCtrl.addOccupation);
// app.post('/hobbies', MainCtrl.addHobby);

app.post('/skills', MiddlewareCtrl.generateId, MainCtrl.postNewSkill);











var port = 3000;
app.listen(port, function () {
    console.log('Hi, I\'m listening on port: ' + port);
});