const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key ==='a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right'); //connection.log printed like console.log?
  }
  if (key === 'f') {
    connection.write("Say: uh oh");
  }
  if (key === 'g') {
    connection.write("Say: Good Game");
  }
  if (key === 'h') {
    connection.write("Say: Holy Smokes Batman!");
  }
};
let connection;
module.exports = {setupInput};