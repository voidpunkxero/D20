// Step 1: Define the function
function bootGreeting() {
  console.log("Welcome to Voidpunk Terminal.");
  console.log("System initialization complete.");
}
bootGreeting();
function greetUser(username) {
  console.log("User identified:", username);
}

greetUser("VoidPunkXero");
greetUser("Jane");

function generateDiagnosticCode() {
  return Math.floor(Math.random() * 9000) + 1000; // four-digit number
}

let code = generateDiagnosticCode();
console.log("System Diagnostic Code:", code);
