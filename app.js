var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
require('./model/dbConnect');
var app = express();
var utilisateurs = require('./router/utilisateursRoute');
var plats = require('./router/platsRoute');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/utilisateurs', utilisateurs);
app.use('/plats', plats);
app.listen(PORT, function(){
	console.log('e-kaly!');
});