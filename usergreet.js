'use strict'

const User = require("./start")

let user1 = new User.User("vasya");
let user2 = new User.User("petya");

user1.greet();

/*'use strict'
var r = require('./start')
var user1 = new r.User('Vasya'),
    user2 = new r.User('Kolya');
    user2.greet(user1);

 /*   'use strick'
var r = require('./start')
var user1 = new r.User("Vasya");
var user2 = new r.User("Kolya");
user2.greet(user1);*/