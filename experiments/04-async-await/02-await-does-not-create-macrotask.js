async function test() {
  console.log("Inside test");
  await Promise.resolve();
  console.log("After await");
}

setTimeout(() => console.log("timeout"), 0);

console.log("Before test");
test();
console.log("After test");