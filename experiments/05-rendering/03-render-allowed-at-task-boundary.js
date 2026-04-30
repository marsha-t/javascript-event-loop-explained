const box = document.getElementById("box");

box.textContent = "Temporary string";

setTimeout(() => {
  box.textContent = "Final string of Test 3";
}, 1000);