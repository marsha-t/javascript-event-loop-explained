setTimeout(() => console.log("timeout"), 0);

try {
  console.log("before throw");
  throw new Error("boom");
} catch {
  console.log("caught error");
}

console.log("after catch");