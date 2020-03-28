const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
    return console.log('unable to connect mongodb server');
}
console.log('Connected to Mongodb server');

/*db.collection('Todos').insertOne({
    text:'Something to do',
    completed: false
},(err,result)=>{
    if(err){
        return console.log('unable to insert',err);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
})*/

db.collection('Users').insertOne({
    Name:'Manikandan',
    age:25,
    Location:'Mira Road,Mumbai'
},(err,result)=>{
    if(err){
        return console.log('unable to insert users',err);
    }

    console.log(result.ops);
})
db.close();
});