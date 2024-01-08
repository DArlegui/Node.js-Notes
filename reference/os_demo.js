const os = require('os');

// Platform
console.log('\nPlatform: ', os.platform());

//CPU ARCH
console.log('\nCPU ARCH: ', os.arch());

//CPU Core Info
// console.log('\nCPU Core Info', os.cpus());

//Free memory
console.log('\nFree Memory: ', os.freemem());

//Total memory
console.log('\nTotal Memory: ', os.totalmem());

//Home Directory
console.log('\nHome Directory: ', os.homedir());

//Uptime
console.log('\nUptime: ', os.uptime());
