function update() {
  console.log("update");
}

function render() {
  console.log("render");
  const box = document.getElementById("box");
  box.textContent = `Updated at ${new Date().toLocaleTimeString()}`;
}

function loop() {
  update();
  render();
  setTimeout(loop, 16); // Use setTimeout() to chunk work
}
loop()