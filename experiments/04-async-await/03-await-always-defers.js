async function test() {
  console.log("Inside test");
  await 42;
  console.log("After await");
}

console.log("Before test");
test();
console.log("After test");