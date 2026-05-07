requestAnimationFrame(() => {
  const box = document.getElementById("box");

  box.textContent = "Frame start";

  Promise.resolve().then(() => {
    box.textContent = "Microtask update";
  });
});