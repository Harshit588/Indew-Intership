// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *

let rows = 11;

for (let i = 0; i < rows; i++) {
  let line = "";

  for (let space = 0; space < i; space++) {
    line += " ";
  }

  for (let star = 0; star < rows - i; star++) {
    line += "* ";
  }

  console.log(line);
}
