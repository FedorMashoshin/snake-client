const net = require('net');
const { IP, PORT, NAME} = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = () => {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    conn.setEncoding('utf8'); // interpret incoming data as text 
    conn.on('data', (data) => {
        console.log(data); // Incoming data from server 
    });
    conn.on('connect', () => { // Right after We connected to server: 
        console.log('Successfully connected to game server') // Showing msg in console when we CONNECTED to server
        conn.write(NAME); //  Sending msg to server with our snake's name.
    })
    return conn;
};

module.exports.connect = connect;