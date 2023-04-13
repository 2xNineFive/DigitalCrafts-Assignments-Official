// Core Module example
// const dns = require('node:dns');

// const options = {
//   family: 6,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };

// dns.lookup('google.com', options, (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family)
// });


// // Local Module Example
function greeting(name) {
    //code here
    return `Hello ${name}`
};

module.exports = greeting;

// can you get one index.js file to talk to another?
