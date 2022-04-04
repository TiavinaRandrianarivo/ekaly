const express=require('express');

const platsRestaurants = require('../model/platsRestaurants');
const routeur=express.Router('../model/platsRestaurants');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    platsRestaurants.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new platsRestaurants({
        idRestaurant:req.body.idRestaurant,
        idPlat:req.body.idPlat,
        prixDeRevient:req.body.prixDeRevient,
        prixDeVente:req.body.prixDeVente,
        etat:req.body.etat
    });
    newRecord.save((err,docs)=>{
        if(!err) res.send(docs);
        else console.log('error creating new data :'+err);
    })
})

routeur.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow:"+req.params.id)
    const updateRecord={
        idRestaurant:req.body.idRestaurant,
        idPlat:req.body.idPlat,
        prixDeRevient:req.body.prixDeRevient,
        prixDeVente:req.body.prixDeVente,
        etat:req.body.etat
    }
    platsRestaurants.findByIdAndUpdate(
        req.params.id,{$set:updateRecord},
        {new:true},
        (err,docs)=>{
            if(!err)res.send(docs);
            else console.log('Update error:'+err);
        }
    )
})
routeur.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow:"+req.params.id);
    platsRestaurants.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;