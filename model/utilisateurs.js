var mongoose=require("mongoose");
var utilisateursModel=mongoose.model(
    "ekaly",
    {
        identification:{
            type:String
        },
        motdepasse:{
            type:String
        }, 
        role:{
            type:String
        }
    },
    "utilisateurs"
);

module.exports=utilisateursModel;