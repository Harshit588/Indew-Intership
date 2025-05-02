let rows = 7;

for (let i = 0; i < rows; i++) {
  let line = "";

  for (let j = 0; j < i; j++) {
    line += " ";
  }

  for (let k = 0; k < rows - i; k++) {
    line += "* ";
  }

  console.log(line);
}

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 0; j < rows - i; j++) {
    line += " ";
  }

  for (let k = 0; k < i; k++) {
    line += "* ";
  }

  console.log(line);
}

// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *
