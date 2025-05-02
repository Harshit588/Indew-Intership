const fs = require('fs')

// fs.writeFile('hello.txt', "\nHii Guys", (err) => {
//     if (err) {
//         console.log("An Error Accurs..." + err);
//     } else {
//         console.log("Succces");
//     }
// })

// fs.appendFile('hello.txt', "\nHii Guys", (err) => {
//     if (err) {
//         console.log("An Error Accurs..." + err);
//     } else {
//         console.log("Succces");
//     }
// })

// fs.copyFile('hello.txt', 'helloCopy.txt', (err) => {
//     if (err) {
//         console.log("An Error Accurs..." + err);
//     } else {
//         console.log("Succces");
//     }
// })

// fs.rename('helloCopy.txt', 'copyHelloData.txt', (err) => {
//     if (err) {
//         console.log("An Error Accurs..." + err);
//     } else {
//         console.log("Succces");
//     }
// })

fs.readFile("hello.txt", "utf-8", (err,data) => {
    if (err) {
        console.log("An Error Accurs..." + err);
    } else {
        console.log(data);
    }
})
