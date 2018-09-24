var mongoose=require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:Number
  }
});

var newTodo=new Todo({
   text:'hello me'
});

newTodo.save().then({
  function(doc){
    console.log('saved todo',doc);
  }
},function(e){
  console.log('unable to save');
});

var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

var user = new User({
  email:'sb@g.com'
});

user.save().then(function(doc){
  console.log(doc);
},function(e){
  console.log('unable to save',e);
});
