var mongoose=require("mongoose");
var restaurantsModel=mongoose.model(
    "ekaly",
    {
        idUtilisateur:{
            type:String
        },
        nom:{
            type:String
        },
        adresse:{
            type:String
        }, 
        mail:{
            type:String
        },
        tel:{
            type:String
        }
    },
    "restaurants"
);

module.exports=restaurantsModel;