console.log("start")

setTimeout(() => console.log("timeout"), 0);

function recurse(n) {
  if (n === 0) return ;
  recurse(n - 1);
}

recurse(100);

console.log("end");