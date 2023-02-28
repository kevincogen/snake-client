const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const inputKey = function(key, expect, write) { //helper for handleUserInput
  if (key === expect) {
    connection.write(write);
  }
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  inputKey(key, 'w', 'Move: up');
  inputKey(key, 'a', 'Move: left');
  inputKey(key, 's', 'Move: down');
  inputKey(key, 'd', 'Move: right');
  inputKey(key, 'f', 'Say: uh oh');
  inputKey(key, 'g', 'Say: Good Game');
  inputKey(key, 'h', 'Say: Holy Smokes Batman!');
};
let connection;
module.exports = {setupInput};