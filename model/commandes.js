var mongoose=require("mongoose");
var commandesModel=mongoose.model(
    "commandes",
    {
        idUtilisateur:{
            type:String
        },
        dateHeureCommande:{
            type:Date
        },
        dateHeureLivraison:{
            type:Date
        },
        adresseLivraison:{
            type:String
        },
        etat:{
            type:String
        }
    }
    
);

module.exports=commandesModel;