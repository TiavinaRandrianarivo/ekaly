const express=require('express');

const commandesDetails = require('../model/commandesDetails');
const routeur=express.Router('../model/commandesDetails');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    commandesDetails.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new commandesDetails({
        idCommande:req.body.idCommande,
        idPlatRestaurant:req.body.idPlatRestaurant,
        quantite:req.body.quantite
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
        idCommande:req.body.idCommande,
        idPlatRestaurant:req.body.idPlatRestaurant,
        quantite:req.body.quantite
    }
    commandesDetails.findByIdAndUpdate(
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
    commandesDetails.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;