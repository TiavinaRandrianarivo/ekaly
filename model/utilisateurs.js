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
        },
        nom:{
            type:String
        },
        mail:{
            type:String
        },
        phone:{
            type:String
        },
        etat:{
            type:String
        }
    },
    "utilisateurs"
);

module.exports=utilisateursModel;