const express=require('express');

const commandesDetails = require('../model/commandesDetails');
const routeur=express.Router('../model/commandesDetails');
const ObjectID=require('mongoose').Types.ObjectId;


module.exports=routeur;