//     1
//   2 3 4
// 5 6 7 8 9

let rows = 3;
let num = 1;

for (let i = 0; i < rows; i++) {
  let line = "";

  for (let s = 0; s < rows - i - 1; s++) {
    line += "  ";
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    line += num + " ";
    num++;
  }

  console.log(line);
}
