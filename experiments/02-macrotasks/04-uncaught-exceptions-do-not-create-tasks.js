setTimeout(() => console.log("timeout task"), 0);

function a() {
  console.log("a: enter");
  try {
    b();
  } finally {
    console.log("a: finally (ran during unwind)");
  }
  console.log("a: after b (never)");
}

function b() {
  console.log("b: enter");
  try {
    c();
  } finally {
    console.log("b: finally (ran during unwind)");
  }
}

function c() {
  console.log("c: throw");
  throw new Error("boom");
}

a();
console.log("global: after a (never)");