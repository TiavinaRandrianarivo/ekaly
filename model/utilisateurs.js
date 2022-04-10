var mongoose=require("mongoose");
var utilisateursModel=mongoose.model(
    "utilisateurs",
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
    }
);

module.exports=utilisateursModel;