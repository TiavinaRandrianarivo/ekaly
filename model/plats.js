var mongoose=require("mongoose");
var platsModel=mongoose.model(
    "ekaly",
    {
        nom:{
            type:String
        }
    },
    "plats"
);

module.exports=platsModel;