var url ="http://mylogger.com/log";
function log(message){
    console.log(message);
}

module.exports.log = log;
//ES6
const sum=(num1,num2)=> num1+num2;
module.exports = sum;