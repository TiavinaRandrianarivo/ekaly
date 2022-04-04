var mongoose=require("mongoose");
var platsRestaurantsModel=mongoose.model(
    "ekaly",
    {
        idRestaurant:{
            type:String
        },
        idPlat:{
            type:String
        }, 
        prixDeRevient:{
            type:Number
        },
        prixDeVente:{
            type:Number
        },
        etat:{
            type:String
        }
    },
    "platsRestaurants"
);

module.exports=platsRestaurantsModel;