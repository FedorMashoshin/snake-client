const {connect} = require('./client') // ---> connect from client.js file
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  }

  const handleUserInput = () =>{
      stdin.on('data', (key) => {
        if (key === '\u0003') {
            process.exit();
          }
      })
  }