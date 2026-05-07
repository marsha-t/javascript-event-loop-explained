console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

requestAnimationFrame(() => {
  console.log("raf");
});

console.log("end");