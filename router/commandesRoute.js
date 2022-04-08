const express=require('express');

const commandes = require('../model/commandes');
const routeur=express.Router('../model/commandes');
const ObjectID=require('mongoose').Types.ObjectId;


routeur.get('/', (req, res) => {
    commandes.find((err, result) => {
        res.status(200).send(result);
    });
});

routeur.post('/newcommande',(req,res)=>{
    var idUtilisateur = req.body.idUtilisateur;
    var dateHeureCommande = req.body.dateHeureCommande;
    var dateHeureLivraison = req.body.dateHeureLivraison;
    var adresseLivraison = req.body.adresseLivraison;
    var etat = req.body.etat;
    if(dateHeureLivraison=="" || adresseLivraison=="")
    {
        res.status(400).send("There is an empty field");
    }
    else
    {
        const newRecord=new commandes({
        idUtilisateur: idUtilisateur;
        dateHeureCommande: dateHeureCommande;
        dateHeureLivraison: dateHeureLivraison;
        adresseLivraison: adresseLivraison;
        etat: etat;
        });
        newRecord.save();
    }
})

module.exports=routeur;