for (let i = 1; i <= 5; i++) {
  console.log("Boot Cycle" + i);
} 
// Step 2: Looping through system modules
let modules = ["Core Drivers", "Display Adapter", "Security Kernel", "Audio Engine", "Network Stack"];


for (let i = 0; i < modules.length; i++) {
  console.log("Loading: " + modules[i]);
}

// Step 3: Battery drain using while loop
let battery = 3;

while (battery > 0) {
  console.log("Battery check: " + battery + " units remaining");
  battery--;
}
// Step 4: One-time startup warning using do...while
let warningFlag = false;

do {
  console.log("System Warning: CRT Overclocked. Stability not guaranteed.");
} while (warningFlag === true);
