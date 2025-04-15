// Task Sheet - Coding Exercise
// Date: 14/04/2025
// Student Name: Harshit Arya
// Programming Language: JavaScript

function executeAll() {

    // 1. Declare a variable and assign a string value
    let name = "John";
    console.log("Answer of Q No. 1:", name);

    // 2. Declare a variable with const and assign a number
    const age1 = 25;
    console.log("Answer of Q No. 2:", age1);

    // 3. Declare a boolean variable and print its value
    let isStudent = true;
    console.log("Answer of Q No. 3:", isStudent);

    // 4. Demonstrate typeof operator with different data types
    console.log("Answer of Q No. 4:", typeof "Hello", ', ', typeof 42, ', ', typeof true);

    // 5. Calculate total monthly expenses
    let rent = 15000, groceries = 5000, otherExpenses = 3000;
    let totalExpenses = rent + groceries + otherExpenses;
    console.log("Answer of Q No. 5:", totalExpenses);

    // 6. Determine voting eligibility
    let age2 = 17;
    let isEligible = age2 >= 18;
    console.log("Answer of Q No. 6:", isEligible);

    // 7. Calculate discount price of a product
    let price1 = 1000, discount1 = 20;
    let discountAmount = (price1 * discount1) / 100;
    let finalPrice = price1 - discountAmount;
    console.log("Answer of Q No. 7:", finalPrice);

    // 8. Calculate final grade of a student
    let math = 85, science = 90, english = 78;
    let total = math + science + english;
    let average = total / 3;
    console.log("Answer of Q No. 8:", average.toFixed(2));

    // 9. Calculate tip amount
    let bill = 500, tipPercentage = 10;
    let tipAmount = (bill * tipPercentage) / 100;
    console.log("Answer of Q No. 9:", tipAmount);

    // 10. Check leap year
    let year = 2024;
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    console.log("Answer of Q No. 10:", isLeapYear);

    // 11. Calculate BMI
    let weight = 70, height = 1.75;
    let bmi = weight / (height * height);
    console.log("Answer of Q No. 11:", bmi.toFixed(2));

    // 12. Check senior citizen discount eligibility
    let age = 65;
    let isSenior = age >= 60;
    console.log("Answer of Q No. 12:", isSenior);

    // 13. Determine type of triangle
    let a = 3, b = 4, c = 5;
    let triangleType = (a === b && b === c) ? "Equilateral" : (a === b || b === c || a === c) ? "Isosceles" : "Scalene";
    console.log("Answer of Q No. 13:", triangleType);

    // 14. Calculate hourly wage
    let salary = 50000, hours = 160;
    let hourlyWage = salary / hours;
    console.log("Answer of Q No. 14:", hourlyWage);

    // 15. Calculate simple interest
    let principal = 10000, rate = 5, time = 2;
    let interest = (principal * rate * time) / 100;
    console.log("Answer of Q No. 15:", interest);

    // 16. Convert height from feet to cm
    let feet = 5.8;
    let cm = feet * 30.48;
    console.log("Answer of Q No. 16:", cm);

    // 17. Check affordability of a product
    let budget = 5000, price2 = 4500;
    let canBuy = budget >= price2;
    console.log("Answer of Q No. 17:", canBuy);

    // 18. Check if a number is positive, negative, or zero
    let number = -5;
    let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
    console.log("Answer of Q No. 18:", result);

    // 19. Calculate fuel efficiency
    let distance = 500, fuel = 25;
    let efficiency = distance / fuel;
    console.log("Answer of Q No. 19:", efficiency);

    // 20. Calculate final bill amount with discount and tax
    let price = 1000, discount = 10, tax = 5;
    let discountedPrice = price - (price * discount / 100);
    let finalBill = discountedPrice + (discountedPrice * tax / 100);
    console.log("Answer of Q No. 20:", finalBill);

} executeAll();

// OUTPUT ->
/*
PS D:\INDEW\Indew Intership> node .\Javascript\JS_Task_Sheet_1_Answer.js
Answer of Q No. 1: John
Answer of Q No. 2: 25
Answer of Q No. 3: true
Answer of Q No. 4: string ,  number ,  boolean
Answer of Q No. 5: 23000
Answer of Q No. 6: false
Answer of Q No. 7: 800
Answer of Q No. 8: 84.33
Answer of Q No. 9: 50
Answer of Q No. 10: true
Answer of Q No. 11: 22.86
Answer of Q No. 12: true
Answer of Q No. 13: Scalene
Answer of Q No. 14: 312.5
Answer of Q No. 15: 1000
Answer of Q No. 16: 176.784
Answer of Q No. 17: true
Answer of Q No. 18: Negative
Answer of Q No. 19: 20
Answer of Q No. 20: 945
*/