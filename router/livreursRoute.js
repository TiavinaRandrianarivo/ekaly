const express=require('express');

const livreurs = require('../model/livreurs');
const routeur=express.Router('../model/livreurs');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    livreurs.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new livreurs({
        idUtilisateur:req.body.idUtilisateur,
        nom:req.body. nom,
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
        nom:req.body. nom,
        mail:req.body.mail,
        tel:req.body.tel
    }
    livreurs.findByIdAndUpdate(
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
    livreurs.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;