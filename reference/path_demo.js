const path = require('path'); //

//Base File Name
console.log(path.basename(__filename)); // path_demo.js

//Directory Name
console.log(path.dirname(__filename)); // /Users/.../node.js-notes/reference

//File Extension
console.log(path.extname(__filename)); // .js

//Create Path Object
console.log(path.parse(__filename)); // { root: '/',

// Concatenate Paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

/* 
  To run this file, use the following command:
  cd reference
  $ node path_demo.js
*/
