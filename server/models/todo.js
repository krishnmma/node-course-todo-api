
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
text:{
    type:String,
    minlength:1
},
completed:{
    type:Boolean,
    default:false
},
completedAt:{
    type:Number,
    default:null
}
});


var newTodo = new Todo({
    text:'Cook Dinner',
    completed:false,
    completedAt:1
});

newTodo.save().then((doc)=>{
console.log('saved todo',doc);
},(e)=>{
    console.log('unable to save because',e);
});


module.exports={Todo};