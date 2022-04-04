const express=require('express');

const utilisateurs = require('../model/utilisateurs');
const routeur=express.Router('../model/utilisateurs');
const ObjectID=require('mongoose').Types.ObjectId;

routeur.get('/',(req,res)=>{
    utilisateurs.find((err,docs)=>{
        if (!err) res.send(docs);
        else console.log('error to get data:'+err);
    });
})

routeur.post('/',(req,res)=>{
    const newRecord=new utilisateurs({
        identification:req.body.identification,
        motdepasse:req.body.motdepasse,
        role:req.body.role
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
        identification:req.body.identification,
        motdepasse:req.body.motdepasse,
        role:req.body.role
    }
    utilisateurs.findByIdAndUpdate(
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
    utilisateurs.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Delete error:'+err);
    });
});
module.exports=routeur;