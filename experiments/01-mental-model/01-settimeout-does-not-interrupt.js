console.log("sync start");

// Schedule asynchronous callback with setTimeout
setTimeout(() => {
  console.log("timeout fired");
}, 0);

for (let i = 0; i < 1e9; i++) {}

console.log("sync end");