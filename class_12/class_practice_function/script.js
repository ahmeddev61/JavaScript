// // level 1 : welcome user
// function welcomeuser(name) {
//   return "welcome " + name + "!";
// }
// console.log(welcomeuser("ahmed"));

// // add two numbers
// function add(a, b) {
//   return a + b;
// }
// let addition = add(4, 5);
// console.log(addition);

// // calculate prduct total
// function calculate_total(price, quantity) {
//   return price * quantity;
// }
// let total = calculate_total(500, 4);
// console.log(total);
// // default user name
// function welcomeuser(name = "guest") {
//   return "welcome " + name + "!";
// }
// console.log(welcomeuser("ahmed"));
// console.log(welcomeuser());

// // check adult
// function checkage(age) {
//   if (age >= 18) {
//     return "you are adult";
//   } else {
//     return "you are kid";
//   }
// }
// let check = checkage(60);
// console.log(check);

// // pass or fail
// function result(marks) {
//   if (marks > 50 && marks <= 100) {
//     return "you are pass!";
//   } else if (marks >= 0 && marks < 50) {
//     return "fail";
//   }
// }
// let final_result = result(30);
// console.log(final_result);
// console.log(result(70));
// // even or odd
// function even_odd(num) {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(even_odd(7));
// console.log(even_odd(8));

// // check login
// function checklogin(isloggedIn) {
//   if (isloggedIn === true) {
//     return "welcome Back";
//   } else {
//     return "please login first";
//   }
// }
// console.log(checklogin(true));
// console.log(checklogin(false));

// // discount calculator
// function calculate_discount(price) {
//   if (price >= 10000) {
//     return price - (price * 20) / 100;
//   } else if (price >= 5000 && price <= 9999) {
//     return price - (price * 10) / 100;
//   } else {
//     return "No Discount";
//   }
// }

// console.log(calculate_discount(10000));
// console.log(calculate_discount(6000));

// // grade calculator
// function grade_calc(marks) {
//   if (marks >= 90 && marks <= 100) {
//     return "A";
//   } else if (marks >= 80 && marks <= 89) {
//     return "B";
//   } else if (marks >= 70 && marks < 80) {
//     return "C";
//   } else if (marks >= 60 && marks <= 69) {
//     return "D";
//   } else {
//     return "fail";
//   }
// }
// console.log(grade_calc(80));
// console.log(grade_calc(55));
// console.log(grade_calc(91));
// console.log(grade_calc(72));
// console.log(grade_calc(67));

// // check temprature
// function check_temp(temprature) {
//   if (temprature >= 35) {
//     return "it's Hot";
//   } else if (temprature >= 25 && temprature <= 34) {
//     return "wether is normal";
//   } else {
//     return "its cold";
//   }
// }

// console.log(check_temp(36));
// console.log(check_temp(27));
// console.log(check_temp(11));

// // E-commerace stock checker
// function stock_checker(prduct, quantity) {
//   if (quantity > 0) {
//     return `${prduct} Available`;
//   } else {
//     return `${prduct} Not Available`;
//   }
// }
// console.log(stock_checker("Laptop", 4));
// console.log(stock_checker("Laptop", 0));

// // shipping calculator
// function calc_shipping(amount) {
//   if (amount >= 500) {
//     return "order Free";
//   } else {
//     return "250 order fee";
//   }
// }
// console.log(calc_shipping(600));
// console.log(calc_shipping(450));

// student result system
// function calc_average(mark1, mark2, mark3) {
//   return (mark1 + mark2 + mark3) / 3;
// }

// function check_result(average) {
//   if (average >= 50 && average <= 100) {
//     return "pass";
//   } else {
//     return "fail";
//   }
// }
// function generate_result(name, average) {
//   return `student: ${name}
//   average : ${average}
//   result: ${result}`;
// }

// let average = calc_average(70, 80, 60);
// let result = check_result(average);
// console.log(generate_result("abdul", average));

// simple shopping bill
function calcsubtotal(price, quantity) {
  return price * quantity;
}

function calcdiscount(subtotal, discountPercent) {
  return (subtotal * discountPercent) / 100;
}

function calcfinalamount(subtotal, discount) {
  return subtotal - discount;
}

function total_bill(price, quantity, discountPercent) {
  let subtotal = calcsubtotal(price, quantity);
  let discount = calcdiscount(subtotal, discountPercent);
  let finalamount = calcfinalamount(subtotal, discount);

  return {
    subtotal: subtotal,
    discount: discount,
    finalamount: finalamount,
  };
}

let bill = total_bill(1000, 5, 10);
console.log(`price : ${bill.subtotal}`);
console.log(`discount : ${bill.discount}`);
console.log(`final : ${bill.finalamount}`);

// student result system
function calc_average(mark1, mark2, mark3) {
  return (mark1 + mark2 + mark3) / 3;
}
function check_result(average) {
  if (average >= 50) {
    return "pass";
  } else {
    return "fail";
  }
}
function generate_result(name, average) {
  return `student : ${name} average : ${average} final_result : ${check_result(
    average
  )}`;
}
let average = calc_average(100, 40, 70);
let result = check_result(average);
console.log(generate_result("ahmed", average));
