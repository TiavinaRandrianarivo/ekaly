var bodyParser = require('body-parser');
var express = require('express');
require('./model/dbConnect');
var app = express();
var utilisateurs = require('./router/utilisateursRoute');

app.use(bodyParser.json());
app.use('/utilisateurs/', utilisateurs);
app.listen(3000, function(){
	console.log('e-kaly 3000!');
});