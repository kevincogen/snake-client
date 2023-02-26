const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });
  conn.setEncoding("utf-8")  // interpret incoming data as te
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })
  conn.on("connect", () => {
    conn.write("Name: KMC");
  })
  conn.on("data", (data) => {
    console.log(data) //recieve from server
  })

  //Same Callback
  // conn.on("connect", () => {
  //   console.log("Successfully connected to game server"); //confirm connect
  // }, () => {
  //   conn.write("Name: KMC"); //send intials to game (needs to be delayed if part of the same connect callback?)
  // }, () => {
  //   conn.write("Move: up") //move
  // })


  //different callbacks

  // conn.on("connect", () => {
  //   console.log("Successfully connected to game server");
  // })
  // conn.on("connect", () => {
  //   conn.write("Name: KMC");
  // })
  // conn.on("connect", () => {
  //   conn.write("Move: up")
  // })
  return conn;
};

module.exports = {connect};

// how to delay the callback
// setTimeout(() => {
//   conn.write("Move: up") //move
// }, 50))

//Same Callback - with timeout
// conn.on("connect", () => {
//   console.log("Successfully connected to game server"); //confirm connect
// }, setTimeout(() => {
//   conn.write("Name: KMC"); //send intials to game (needs to be delayed if part of the same connect callback?)
// }, 5), setTimeout(() => {
//   conn.write("Move: up") //move
// }, 1000))

