const box = document.getElementById("box");

box.textContent = "Temporary string";

for (let i = 0; i < 1e9; i++) {}

box.textContent = "Final string";