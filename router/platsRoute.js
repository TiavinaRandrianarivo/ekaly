const express=require('express');

const plats = require('../model/plats');
const routeur=express.Router('../model/plats');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/:idUtilisateur', (req, res) => {
    plats.find({idUtilisateur:req.params.idUtilisateur},(err, result) => {
        res.status(200).send(result);
    });
});

routeur.get('/list/:idUtilisateur/:etat', (req, res) => {
    plats.find({idUtilisateur:req.params.idUtilisateur},{etat:req.params.etat},(err, result) => {
        res.status(200).send(result);
    });
});

routeur.post('/insertproduct',(req,res)=>{
    var nom = req.body.nom;
    var image = req.body.image;
    var prixDAchat = req.body.prixDAchat;
    var prixDeVenteRestaurant = req.body.prixDeVenteRestaurant;
    var prixDeVenteEkaly = req.body.prixDeVenteEkaly;
    var idUtilisateur = req.body.idUtilisateur;
    var etat = req.body.etat;
    if(nom=="" || prixDAchat=="" || prixDeVenteRestaurant=="" || prixDeVenteEkaly==""){
        res.status(400).send("There is an empty field");
    }else{
        const newRecord=new plats({
        nom: nom;
        image: image;
        prixDAchat: prixDAchat;
        prixDeVenteRestaurant: prixDeVenteRestaurant;
        prixDeVenteEkaly: prixDeVenteEkaly;
        idUtilisateur: idUtilisateur;
        etat: etat;
        });
        newRecord.save();
        res.status(200).send("Your new product is registered");
    }
})

module.exports=routeur;