const os = require('os');
//user info
const user= os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);
const currentOs ={
    name: os.version(),
    release :os.release(),
    totalMemory :os.totalmem(),
    freeMemory :os.freemem(),
}
console.log(currentOs);