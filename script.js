//your JS code here. If required.
console.log("Start of the program");

// Microtask 1
Promise.resolve().then(() => {
  console.log("Microtask 1");
});

// Microtask 2
Promise.resolve().then(() => {
  console.log("Microtask 2");
});

// Macrotask 1
setTimeout(() => {
  console.log("Macrotask 1");
  
  // Microtask 3 (nested inside Macrotask 1)
  Promise.resolve().then(() => {
    console.log("Microtask 3");
  });
}, 0);

// Macrotask 2
setTimeout(() => {
  console.log("Macrotask 2");
}, 0);

console.log("End of the program");
