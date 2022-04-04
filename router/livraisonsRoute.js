const express=require('express');

const livraisons = require('../model/livraisons');
const routeur=express.Router('../model/livraisons');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    livraisons.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new livraisons({
        idCommande:req.body.idCommande,
        idLivreur:req.body.idLivreur,
        dateHeureLivraison:req.body.dateHeureLivraison,
        adresseLivraison:req.body.adresseLivraison
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
        idLivreur:req.body.idLivreur,
        dateHeureLivraison:req.body.dateHeureLivraison,
        adresseLivraison:req.body.adresseLivraison
    }
    livraisons.findByIdAndUpdate(
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
    livraisons.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;