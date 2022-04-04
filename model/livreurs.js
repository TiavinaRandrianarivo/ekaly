var mongoose=require("mongoose");
var livreursModel=mongoose.model(
    "ekaly",
    {
        idUtilisateur:{
            type:String
        },
        nom:{
            type:String
        }, 
        mail:{
            type:String
        },
        tel:{
            type:String
        }
    },
    "livreurs"
);

module.exports=livreursModel;