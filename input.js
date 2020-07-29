const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY, GREETING } = require('./constants');
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


let connection;
const stdin = process.stdin;
const setupInput = (connection) => {
    conn = connection;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);  
    return stdin;
};

const handleUserInput = (key) => { // This func checking what key we pushed
    if (key === '\u0003') {
        process.exit();
    };
    if (key === 'w') {
        conn.write(MOVE_UP_KEY);
    }else if (key === 's') {
        conn.write(MOVE_DOWN_KEY);
    }else if (key === 'd') {
        conn.write(MOVE_RIGHT_KEY);
    }else if (key === 'a') {
        conn.write(MOVE_LEFT_KEY);
    } else if (key === 'x'){
        conn.write(GREETING);
    }
};


module.exports = {
    setupInput
};