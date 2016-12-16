'use strict'
var r = require('./start')
var user1 = new r.User('Vasya'),
    user2 = new r.User('Kolya');
    user1.greet(user2);