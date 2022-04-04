var mongoose=require("mongoose");
var commandesModel=mongoose.model(
    "ekaly",
    {
        idClient:{
            type:String
        },
        DateHeureCommande:{
            type:Date
        }
    },
    "commandes"
);

module.exports=commandesModel;