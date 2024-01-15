var mongoose= require("mongoose");
var FeedbackSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    
    Discription:{
        type:String,
        required:true
    },



})
module.exports=mongoose.model('Feedback',FeedbackSchema)