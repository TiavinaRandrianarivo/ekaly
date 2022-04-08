var mongoose=require("mongoose");
var platsModel=mongoose.model(
    "ekaly",
    {
        nom:{
            type:String
        },
        image:{
        	type:String
        },
        prixDAchat:{
        	type:Number
        },
        prixDeVenteRestaurant:{
        	type:Number
        },
        prixDeVenteEkaly:{
        	type:Number
        },
        idUtilisateur:{
        	type:String
        },
        etat:{
        	type:String
        }
    },
    "plats"
);

module.exports=platsModel;