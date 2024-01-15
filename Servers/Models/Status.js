var mongoose= require("mongoose");
var StatusSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
   
    Date:{
        type:Date,
        required:true
    },
    Status:{
        type:String,
        required:true

    },


})
module.exports=mongoose.model('Status',StatusSchema)