async function test() {
  console.log("Inside test");
  await Promise.resolve();
  console.log("After first await");
  await Promise.resolve();
  console.log("After second await");
}

console.log("Before test");
test();
console.log("After test");
setTimeout(() => console.log("timeout"), 0);