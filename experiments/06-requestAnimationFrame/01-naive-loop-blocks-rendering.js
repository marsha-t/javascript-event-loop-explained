let gameRunning = true;
let lastTime = Date.now();
let delta = 0;

function update() {
  const now = Date.now();
  delta = now - lastTime;
  lastTime = now;
  console.log("update");
}

function render() {
  console.log("render");
  const box = document.getElementById("box");
  box.textContent = `Gap: ${delta}ms`;
}

while (gameRunning) {
  update();
  render();
}