// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

let rows = 5;

for (let i = 0; i < rows; i++) {
  let line = "";

  for (let j = 5; j > i; j--) {
    line += j + " ";
  }

  console.log(line);
}
