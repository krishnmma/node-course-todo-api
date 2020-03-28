const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
    return console.log('unable to connect mongodb server');
}
console.log('Connected to Mongodb server');

/*db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5e7f4bcaf9d330a2cae5d3c1')
},{
    $set:{
        completed:true
   } },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5e7ed795f9d330a2cae5ba14')
    },{
        $set:{
            Name:'Rajesh Mani'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
//db.close();
});