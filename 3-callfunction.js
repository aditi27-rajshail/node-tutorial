// Modules- Encapsulated code
// CommonJS, every file is module(by default)

const names= require('./4-name-invoke');
const sayHello= require('./5-function');

sayHello('Aditi');
sayHello(names.amogh);
sayHello(names.rajasan);
