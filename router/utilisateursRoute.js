const express=require('express');
const bcrypt=require('bcrypt');

const utilisateurs = require('../model/utilisateurs');
const routeur=express.Router('../model/utilisateurs');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.post('/login',(req,res)=>{
    var identification = req.body.identification;
    var motdepasse = req.body.motdepasse;
    if(identification=="" && motdepasse==""){
        res.status(400).send("Identification and password is empty");
    }
    else if(identification && motdepasse==""){
        res.status(400).send("Password is empty");
    }
    else if(identification=="" && motdepasse){
        res.status(400).send("Identification is empty");
    }
    else{
        utilisateurs.findOne({identification: identification}).then(function(userFound)
        {
            if(userFound)
            {
                bcrypt.compare(motdepasse, userFound.motdepasse, function(error, result)
                {
                    if(result)
                    {
                        res.status(200).send(userFound);
                    }
                    else
                    {
                        res.status(400).send("Fake password");
                    }
                })
            }
            else
            {
                res.status(400).send("Invalid identification")
            }
        })
    }
})

routeur.post('/inscription',(req,res)=>{
    var identification = req.body.identification;
    var motdepasse = req.body.motdepasse;
    var role = req.body.role;
    var nom = req.body.nom;
    var mail = req.body.mail;
    var phone = req.body.phone;
    var etat = req.body.etat;
    if(identification=="" || motdepasse=="" || role == "" || nom=="" || mail=="" || phone=="")
    {
        res.status(400).send("There is an empty field");
    }
    else
    {
        utilisateurs.findOne({identification: identification}).then(function(userFound)
        {
            if(userFound)
            {
                res.status(400).send("Identification already used by another user");
            }
            else
            {
                bcrypt.hash(motdepasse, 5,function(err,result){
                    newUtilisateur = new utilisateurs({
                        identification: identification,
                        motdepasse: result,
                        role: role,
                        nom: nom,
                        mail: mail,
                        phone: phone,
                        etat: etat
                    });
                    newUtilisateur.save();
                    res.status(200).send("You are registered");
                });
            }
        })
    }
})

routeur.get('/list/:role', (req, res) => {
    utilisateurs.find({role:req.params.role},(err, result) => {
        res.status(200).send(result);
    });
});

module.exports=routeur;