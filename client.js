const net = require("net");
const {IP, PORT} = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf-8");  // interpret incoming data
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KMC");
  });
  conn.on("data", (data) => {
    console.log(data); //recieve from server
  });
  return conn;
};

module.exports = {connect};