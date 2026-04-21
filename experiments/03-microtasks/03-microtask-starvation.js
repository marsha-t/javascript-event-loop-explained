function loop() {
  Promise.resolve().then(loop);
}

setTimeout(() => console.log("timeout fired"), 0);

loop();