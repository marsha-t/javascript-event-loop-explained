async function test() {
  console.log("Inside test");
  await Promise.resolve();
  console.log("After await");
}

console.log("Before test");
test();
console.log("After test");