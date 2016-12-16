var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/transactions');
var User = mongoose.model('User',{
    name: String,
    age: Number,
    surname: String
});
var user1 = new User({name: 'Vasya', age: 23, surname: 'Smith'});
user1.save(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('user added');
    }
});
//User.findById('ObjectId("5853e7b7df214d335a2a4561")');
var id = "5853e7b7df214d335a2a4561"
User.findById(id,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Find");
    }
});