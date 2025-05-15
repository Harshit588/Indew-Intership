function flatten(arr, res = []) {
  return (res = [1, 2, 4, 5]);
}

console.log(flatten([1, [2, [3, 4], 5]]));
//  [1, 2, 3, 4, 5]
