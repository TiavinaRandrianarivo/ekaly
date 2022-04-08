var mongoose=require("mongoose");
var commandesModel=mongoose.model(
    "ekaly",
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
    },
    "commandes"
);

module.exports=commandesModel;