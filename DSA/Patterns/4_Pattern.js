// 1
// 2 3
// 4 5 6
// 7 8 9 10

let num = 1;
let rows = 10;

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += num + " ";
    num++;
  }

  console.log(line);
}
