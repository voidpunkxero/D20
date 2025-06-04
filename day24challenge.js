function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function runDiceSession(username) {
  console.log("Welcome, " + username + ".");
  let result = rollDie();
  console.log("You rolled a " + result + ".");
}
runDiceSession("VoidPunkXero");
runDiceSession("Jane");
