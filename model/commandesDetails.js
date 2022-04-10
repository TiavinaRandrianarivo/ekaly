var mongoose=require("mongoose");
var commandesDetailsModel=mongoose.model(
    "commandesDetails",
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
    }
    
);

module.exports=commandesDetailsModel;