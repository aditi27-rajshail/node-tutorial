
//Node JS is a single threat that can manage multiple connections
//npm package manager--facilats to download packag
//node modules--have all the depandencies which one can use
//nodemon nodemon automatically restarting the node application when file changes in the directory are detected(Live Server)
//DEV depedencies npm install --save nodemon
//npm i @angular/cli to instal angular cli
//----------------------------------------------


/* const ht = require("http"); // import http
const port = 3001;
ht.createServer(function(req,res){
    res.end("Hello this is Node JS");
}).listen(port, function(err){
    console.log("Server runing on this port"+port);

}); */
//Basic program
function sayHello(name) {
    console.log("Welcome to the NodeJS " + name);
}
sayHello('Aditi');



/*global object
variable
console.log
setTimeout
clearTimeout
clearInterval
setInterval
global.console.log global object
-----------------------------------
#The disadvantage of global scope is they might interfere with 
the other files hence for reliable application we need modularity
#Every file in Node Application is considered to be a module
#The variabes and functions of that module are scoped to that file
or simply they are private
#In order to use that file we need to explicitly call that file
-----------------------------------
Node Module system
1) http module
2) url module
3) fs module
----------------------------------
#Use require to load a module*/
const logger = require('./logger');
logger.log('message');
//---------PATH-----------------
const path = require('path');
var pathoObj = path.parse(__filename);
console.log(pathoObj);
//----------- OS------------------
//when using node we can get information about the OS files/functions
const os = require('os');
var totalmemory = os.totalmem();
var freememory = os.freemem();
console.log("The total memory is" + totalmemory);
console.log("The free memory is" + freememory);
//ES6
console.log(`Total memory is ${totalmemory}`);// to avoid concatenation
console.log(`free memory is ${freememory}`)
//------------FS------------------
const fs = require('fs');
const files = fs.readdirSync('./'); // read synchronous functions
console.log(files);
//However, NodeJS is built on callback/asynchronous functions 
fs.readdir('./' ,function(err, files){
    if(err) console.log('Error',files);
    else console.log('Result',files);
});
//---------EVENTS------------------
const EventEmitter= require('events');
const emitter = new EventEmitter();
//Raise a listner
emitter.on('messageislogged',function(arg){
    console.log('Listner is called');
});
//Raise a event
emitter.emit('messageislogged', {id: 1, url: 'http'});
