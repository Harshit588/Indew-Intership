// let i = 1;
// function sayHello() {
//   console.log(i + " :: Hello Bhai");
//   if (++i <= 10) sayHello();
// }
// sayHello();

// function sayHello(num) {
//   if (num <= 0) {
//     console.log("Give 1 or Greater than 1");
//   }
//   else if (num <= 10) {
//     console.log(num);
//     sayHello(++num);
//   } else {
//     return;
//   }
// }
// sayHello(1);

// function sayHello(x,num) {
//   if (x <= num) {
//     console.log(x);
//     sayHello(++x,num);
//   } else {
//     return;
//   }
// }
// sayHello(10,20);

function sum(num) {
  if (num > 0) {
    return num + sum(num-1);
  } else {
    return 0;
  }
}
console.log(sum(10));
