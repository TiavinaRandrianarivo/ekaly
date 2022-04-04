var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ekaly",{useNewUrlParser:true,useUnifiedTopology:true},
	(error)=>{
		if(!error){
			console.log("Connection reussi");
		}
		else{
			console.log("Connection echouer");
		}
	})