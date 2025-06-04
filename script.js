let rollCount = 0;
const maxRolls = 3;


function rollDie() {
  return Math.floor(Math.random() * 20) + 1;
}

function runDiceSession(username) {
  let die1 = rollDie();
  let die2 = rollDie();
  let total = die1 + die2;
  let output = document.getElementById("output");

  output.textContent = 
    "Welcome, " + username + ".\n" +
    "You rolled: " + die1 + " and " + die2 + ".\n" +
    "Total: " + total + ".";
}


let button = document.getElementById("rollBtn");
button.addEventListener("click", function () {
  if (rollCount >= maxRolls) {
    output.textContent = "Roll limit reached. Please refresh to restart.";
    return;
  }

  let usernameInput = document.getElementById("username");
  let name = usernameInput.value || "Anonymous";
  runDiceSession(name);
  rollCount++;
});
