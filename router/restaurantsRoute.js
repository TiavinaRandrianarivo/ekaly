const express=require('express');

const restaurants = require('../model/restaurants');
const routeur=express.Router('../model/restaurants');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    restaurants.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new restaurants({
        idUtilisateur:req.body.idUtilisateur,
        nom:req.body.nom,
        adresse:req.body.adresse,
        mail:req.body.mail,
        tel:req.body.tel
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
        idUtilisateur:req.body.idUtilisateur,
        nom:req.body.nom,
        adresse:req.body.adresse,
        mail:req.body.mail,
        tel:req.body.tel
    }
    restaurants.findByIdAndUpdate(
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
    restaurants.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;