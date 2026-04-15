document.addEventListener("click", () => {
  console.log("click handler ran");
});

console.log("start long task");

for (let i = 0; i < 1e9; i++) {}

console.log("end long task");