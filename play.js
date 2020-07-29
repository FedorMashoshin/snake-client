const { connect } = require('./client');  // ---> connect from client.js file
const {setupInput } = require('./input'); // ---> connect from input.js file

console.log('Connecting ...');
connect();
setupInput();