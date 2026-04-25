async function test() {
  return 42;
}

async function main() {
  const p1 = test();
  console.log("Without await:", p1);

  const p2 = await test();
  console.log("With await:", p2);
}

main();