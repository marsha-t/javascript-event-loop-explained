Promise.resolve().then(() => {
  console.log("microtask");
});

requestAnimationFrame(() => {
  console.log("raf");
});