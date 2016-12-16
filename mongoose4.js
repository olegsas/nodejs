var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/transactions');
var User = mongoose.model('User',{
    name: String,
    age: Number,
    surname: String
});
/*var user1 = new User({name: 'Vasya', age: 23, surname: 'Smith'});
user1.save(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('user added');
    }
});
//User.findById('ObjectId("5853e7b7df214d335a2a4561")');
var name = "Vasyaa"
/*User.find({name: "Vasya"},function(err,user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});*/
/*User.find({name: "Vasya"}).remove().exec();

/*User.remove({name: "Vasya"},function(err,user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
})*/
/*User.update({name: "Vasya"},{$set: {name: "Tolya"}},function(err,user){
    console.log(user);
});*/

/*var query = User.findOne({name: 'Tolya'});
query.select('-_id name');
query.exec(function(err,user){
    console.log(user);
})*/
/*User.find({})
.where('age').in([17,30]).exec(
    function(err,user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }
    }
)*/
/*User.find({'age':{$gt:15, $lt: 20}}, function(err,user){
    console.log(user);
});*/
User.find({'age': {$gt: 15, $lt: 30}})
.limit(2)
.sort({'age': -1}).exec(function(err,user){
    if(err){
        console.log(err)
    }
    else{
        console.log(user);
    }
})
