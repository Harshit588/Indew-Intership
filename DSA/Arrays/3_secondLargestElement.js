const arr = [2, 2, 4, 5, 6, 7, 5, 6, 2, 10, 4, 2, 8]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {

            // let temp = arr[i];
            // arr[i] = arr[j];
            // arr[j] = temp;

            arr[i] = arr[i] + arr[j];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j]

            // [arr[i], arr[j]] = [arr[j], arr[i]] 
        }
    }
}
console.log(`Second Highest Element is :: ${arr[arr.length - 3]}`);
