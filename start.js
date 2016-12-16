'use strict'

class User {
    constructor(name){
        this.name = name;
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }
}

let vasya = new User("vasya")
//vasya.greet();

module.exports.User = User;

/*'use strict'
function User(name){
    this.name = name;
}

User.prototype.greet = function(user){
    console.log("Hi! "+User.name);
}
module.exports.User = User;*/