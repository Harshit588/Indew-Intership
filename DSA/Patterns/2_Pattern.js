let rows = 7;

for (let i = 0; i < rows; i++) {
  let line = "";

  for (let space = 0; space < rows - i - 1; space++) {
    line += " ";
  }
  for (let star = 0; star < i + 1; star++) {
    line += "* ";
  }
  console.log(line);
}

for (let i = rows - 2; i >= 0; i--) {
  let line = "";

  for (let space = 0; space < rows - i - 1; space++) {
    line += " ";
  }

  for (let star = 0; star < i + 1; star++) {
    line += "* ";
  }
  console.log(line);
}

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
