const print = (num) => {
  if (num > 0) {
    print(num - 1);
    console.log(num);
  }
};

print(10);
