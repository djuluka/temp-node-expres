// os modules 

const os = require('os');


// info about current user
const user = os.userInfo();
console.log(user);

/// method return the system uptime in second

console.log(`The system Uptime is ${os.uptime} seconds`)


const currentOS = {
    arch: os.arch(),
    platform: os.platform(),
    cpu: os.cpus(),
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostname: os.hostname()
}

console.log(currentOS)