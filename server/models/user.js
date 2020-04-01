var mongoose = require('mongoose');

var dbUser = mongoose.model('dbUser',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});



var newdbUser = new dbUser({
    email:'   rajesh11leoboy@gmail.com   '
});

newdbUser.save().then((doc)=>{
    console.log('saved new dbUser ',doc);
},(e)=>{
    console.log('unable to save',e);
});

module.exports={dbUser};