const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
    return console.log('unable to connect mongodb server');
}
console.log('Connected to Mongodb server');

/*
db.collection('Todos').find({_id:new ObjectID('5e7ecd143c28c520085f4cb0')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log('unable to fetch data',err);
});*/


db.collection('Users').find({Name:'Manikandan'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fetch data',err);
})
db.close();
});