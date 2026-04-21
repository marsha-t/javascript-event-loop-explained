setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => {
  console.log("promise 1");
  Promise.resolve().then(() => {
    console.log("promise 2");
  });
});

console.log("sync done");