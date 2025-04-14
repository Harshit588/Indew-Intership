let price = 1000, discount = 10, tax = 5;
let discountedPrice = price - (price * discount / 100);
let finalBill = discountedPrice + (discountedPrice * tax / 100); console.log("Final Bill Amount:", finalBill);
