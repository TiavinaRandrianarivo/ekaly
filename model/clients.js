var mongoose=require("mongoose");
var clientsModel=mongoose.model(
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
    "clients"
);

module.exports=clientsModel;