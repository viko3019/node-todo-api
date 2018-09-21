  //const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);



 MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
   if(err){
     return console.log('unable to connect to MongoDB server');
   }
   console.log('connected to MongoDB server');

   db.collection('Users').insertOne({
     _id:132,
     name:'shashank',
     age:21,
     location:'jaipur',
     completed:false
   }, function(err,result){
     if(err){
       return console.log('unable to insert todo',err);
     }
     console.log(result.ops);
   });

   db.close();
 });
