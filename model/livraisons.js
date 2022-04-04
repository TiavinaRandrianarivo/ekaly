var mongoose=require("mongoose");
var livraisonsModel=mongoose.model(
    "ekaly",
    {
        idCommande:{
            type:String
        },
        idLivreur:{
            type:String
        }, 
        dateHeureLivraison:{
            type:Date
        },
        adresseLivraison:{
            type:String
        }
    },
    "livraisons"
);

module.exports=livraisonsModel;