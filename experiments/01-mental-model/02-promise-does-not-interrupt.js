console.log("sync start");

// Schedule asynchronous callback with a Promise
Promise.resolve().then(() => {
  console.log("promise callback");
});

for (let i = 0; i < 1e9; i++) {}

console.log("sync end");