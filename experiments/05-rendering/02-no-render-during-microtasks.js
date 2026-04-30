const box = document.getElementById("box");

box.textContent = "Temporary string";

Promise.resolve().then(() => {
  box.textContent = "Final string of Test 2";
});