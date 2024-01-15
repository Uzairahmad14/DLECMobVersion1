var mongoose=require('mongoose');
var ApplicantSchema=new mongoose.Schema({

    Firstname:{
        type:String,
        required:true

    },
    Lastname:{
        type:String,
        required:true

    },
    CNIC:{
        type:String,
        required:true
    },
    Phonenumber:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },

    District:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Natureofcase:{
        type:String,
        required:true
    },
    Discription:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model('Applicants',ApplicantSchema)