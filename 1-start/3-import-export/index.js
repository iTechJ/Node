let userModule = require('./user.js');


let {User, userF} = require('./user');
let userNameSpace = require('./user');

console.log('Working...');

let user = new User('Vova');
userF();
console.log(userNameSpace.USER_VALUE);


let {UUID} = require("angular2-uuid");

console.log(UUID.UUID());

console.log(module);