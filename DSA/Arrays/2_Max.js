const arr = [2, 2, 4, 5, 6, 7, 5, 6, 2, 10, 4, 2, 8]
let max = arr[0];
for (let i of arr) {
    if (max < i) {
        max = i;
    }
}
console.log(max);
