var mongoose=require("mongoose");
var commandesDetailsModel=mongoose.model(
    "ekaly",
    {
        idCommande:{
            type:String
        },
        idPlatRestaurant:{
            type:String
        }, 
        quantite:{
            type:Number
        }
    },
    "commandesDetails"
);

module.exports=commandesDetailsModel;