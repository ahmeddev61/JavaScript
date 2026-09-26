// // // write program that prints numbers from 1 to 20
// // for (let i = 1; i <= 20; i++) {
// //   console.log(i);
// // }
// // // print all even number between 1 and 50
// // for (let i = 0; i <= 50; i += 2) {
// //   console.log(i);
// // }
// // // create a countdown from 10 to 1 then print "happy new year"
// // for (let i = 10; i >= 1; i--) {
// //   console.log("happy new year");
// // }
// // // as the user for a number and print its multiplication table from 1 to 10
// // let num = prompt("enter a number");
// // let i = 1;
// // while (i <= 10) {
// //   console.log(num + "x" + i + " =" + num * i);
// //   i++;
// // }
// // // calculate the sum of numbers from 1 to 100
// // let sum = 0;
// // for (let i = 1; i <= 100; i++) {
// //   sum = sum + i;
// // }
// // console.log(sum);
// // // keep asking user to enter a password until they enter the correct password
// // let pass = 11223344;
// // let a = 0;
// // let inp = prompt("enter a password");
// // while (a < 10) {
// //   if (pass == inp) {
// //     console.log("login succefull");
// //   } else {
// //     console.log("try again");
// //   }
// //   a++;
// // }
// // // positive number
// // let numb = Number(prompt("enter a number"));
// // k = 0;
// // while (k < 10) {
// //   if (numb > 0) {
// //     console.log("correct");
// //   } else {
// //     console.log("please enter postive number");
// //   }
// //   k++;
// // }

// // print every marks and calculate the total marks
// let marks = [72, 92, 65, 88, 55, 73];
// let sum = 0;
// for (const mark of marks) {
//   console.log(mark);
//   sum = sum + mark;
// }
// console.log(sum);

// // calculate the total price of all products
// let prices = [500, 1200, 350, 800, 150];
// total = 0;
// for (const price of prices) {
//   total = total + price;
// }
// console.log(total);

// // print each students name with Hello
// let students = ["ali", "ahmed", "sara", "ayesha", "hamza"];
// for (const student of students) {
//   console.log(`Hello ${student}`);
// }

// // find a product "search for keyboard and print"
// let products = ["laptop", "mouse", "keyboard", "monitor", "printer"];
// for (const product of products) {
//   if (product == "keyboard") {
//     console.log(`product found ${product}`);
//   }
// }
// // object information : print  every property and its value
// let student_details = {
//   name: "ali",
//   age: 20,
//   course: "javascript",
//   city: "peshawar",
// };
// for (const key in student_details) {
//   console.log(key + " : " + student_details[key]);
// }
// // largest number
// let numbers = [12, 45, 7, 89, 23, 56];
// largest_number = numbers[0];
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > largest_number) {
//     largest_number = numbers[i];
//   }
// }
// console.log(`largest number is : ${largest_number}`);

// // smallest number
// let number = [12, 45, 7, 89, 23, 56];
// smallest_number = number[0];
// for (let i = 0; i <= number.length; i++) {
//   if (number[i] < smallest_number) {
//     smallest_number = number[i];
//   }
// }
// console.log(`smallest number is : ${smallest_number}`);//
// // challange task
// // create a program that asks the user for a pin :
// /*
// GIVE THE USER MAX OF 3 ATTEMPTS
// IF THE PIN IS CORRECT , PRINT "ACCESS GRANTED"
// IF ALL ATTEMPTS FAIL , PRINT "ACCOUNT LOCKED"

// */

// let pass = 11223344;
// const attempt = 3;
// for (let i = 1; i <= attempt; i++) {
//   let input = prompt("Enter your password");
//   if (pass === input) {
//     console.log("reguest granted");
//     break;
//   }
//   if (i == attempt) {
//     console.log("account blocked");
//   }
// }
//  guess number
// let secret_number = 7;
// let input = Number(prompt("Guess a number"));
// if (input == secret_number) {
//   console.log("correct guess");
// } else if (input < secret_number) {
//   console.log("guess is to low");
// } else if (input > secret_number) {
//   console.log("guess is to high");
// }

// display every employe and salary
// let employee = {
//   ali: 5000,
//   ahmed: 6500,
//   sara: 7200,
//   ayesha: 5800,
// };
// for (const emp in employee) {
//   console.log(`${emp} salary is :   ${employee[emp]}`);
// }

// // display each product and calculate the total bill
// let total_bill = 0;
// let cart = [
//   {
//     name: "laptop",
//     price: 80000,
//   },
//   {
//     name: "mouse",
//     price: 1500,
//   },
//   {
//     name: "keyboard",
//     price: 3000,
//   },
//   {
//     name: "headphones",
//     price: 5000,
//   },
// ];
// for (const product of cart) {
//   console.log(`${product.name} = ${product.price} Rs`);
//   total_bill += product.price;
// }

// // login system
// const correct_username = "admin";
// const correct_pass = 12345;
// attempt = 0;
// while (attempt < 3) {
//   let username = prompt("enter user name");
//   let password = Number(prompt("enter password"));
//   attempt++;
//   if (username == correct_username && password == correct_pass) {
//     alert("login successful");
//     break;
//   } else {
//     alert("incorrect password");
//   }
//   if (attempt < 3) {
//     alert("attempt remaining" + (3 - attempt));
//   }
//   if (attempt == 3) {
//     alert("account blocked");
//   }
// }

let marks = [72, 92, 65, 88, 55, 73];
let total = 0;
for (const mark of marks) {
  total += mark;
  console.log(`student mark is : ${mark} `);
}
console.log("total marks is :" + total);

let prices = [500, 1200, 350, 800, 150];
sum = 0;
for (const price of prices) {
  sum += price;
}
console.log(sum);

let students = ["ali", "ahmed", "sara", "ayesha", "hamza"];
for (const stud of students) {
  console.log(`Hello ${stud}`);
}

let student_details = {
  name: "ali",
  age: 20,
  course: "javascript",
  city: "peshawar",
};
for (const student in student_details) {
  console.log(`${student} : ${student_details[student]}`);
}

let number = [12, 45, 7, 89, 23, 56];
large_number = [0];
for (let i = 0; i <= number.length; i++) {
  if (number[i] > large_number) {
    large_number = number[i];
  }
}
console.log(large_number);

const pass = 1122;
attempt = 3;
i = 0;
while (i < attempt) {
  enterpass = prompt("enter your password:");
  i++;
  if (pass == enterpass) {
    console.log("login successfully");
    break;
  } else {
    console.log("Wrong pass");
  }
  if (i < attempt) {
    alert("attempt remaining" + (attempt - i));
  }
  if (i == attempt) {
    console.log("account Blocked");
  }
}

let employee = {
  ali: 5000,
  ahmed: 6500,
  sara: 7200,
  ayesha: 5800,
};
for (const emp in employee) {
  console.log(`${emp} : ${employee[emp]}`);
}

let cart = [
  {
    name: "laptop",
    price: 80000,
  },
  {
    name: "mouse",
    price: 1500,
  },
  {
    name: "keyboard",
    price: 3000,
  },
  {
    name: "headphones",
    price: 5000,
  },
];
let total_bill = 0;
for (const product of cart) {
  total_bill += product.price;
  console.log(`${product.name} = ${product.price} Rs`);
}
console.log(total_bill);
