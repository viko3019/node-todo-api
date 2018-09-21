const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

 MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
   if(err){
     console.log(err);
     return console.log('unable to connect to MongoDB server');
   }
   console.log('connected to MongoDB server');


  //   db.collection('Todos').findOneAndUpdate({
  //     _id:new ObjectID('5b8da2951f69ae67644e829c')
  //   },{
  //     $set: {
  //       completed:true
  //     }
  //   },
  //   {
  //     returnOriginal:false
  //   }
  // ).then(function(result){
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b8d916d562fa65a520cf067')
  },{
    $set: {
      name:'sb_1997',
      completed:true
    },
    $inc:{
      age:1
    }
  },
  {
    returnOriginal:false
  }
).then(function(result){
  console.log(result);
})

   //db.close();
 });
