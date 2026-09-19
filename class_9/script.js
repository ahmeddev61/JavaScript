// // For loop
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// for (let o = 0; o < 10; o++) {
//   console.log("daniyal");
// }
// //  while loop
// let j = 0;
// while (j <= 100) {
//   console.log(j);
//   j++;
// }
// // do-while-loop
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k <= 100);
// print even numbers
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log("even numbers are :" + i);
//   }
// }
// // for odd number
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 1) {
//     console.log(" numbers are :" + i);
//   }
// }
// to find lenth of odd/even length
// let num = [];
// for (let i = 0; i <= 20; i++) {
//   num.push(i);
// }
// console.log(num);
// console.log(num.length);

// for of loop "commonly used on array"
// const fruits = ["apple", "banana", "mango"];
// input = prompt("enter fruit name");
// for (const fruit of fruits) {
//   if (fruit === input.toLowerCase()) {
//     console.log("yes available " + fruit);
//   }
// }
// // student example using for of loop
// const std = ["ahmed", "siraj", "yusha", "bilal", "shayan"];
// for (const student of std) {
//   if (student === "yusha") {
//     console.log("yes available " + student);
//   } else {
//     console.log("not available");
//   }
// }
// secpnd method using for loop which is more lenthy as compared to for of for loop
// for (let i = 0; i < std.length; i++) {
//   console.log(std[i]);
// }
// practical example on array of product using for of loop
const cartProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 2,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 39.99,
    quantity: 1,
  },
  {
    id: 4,
    name: "USB-C Charger",
    price: 24.99,
    quantity: 1,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 34.99,
    quantity: 2,
  },
];
let total_product_price = 0;
for (const prduct of cartProducts) {
  total_product_price = total_product_price + prduct.price;
  console.log(prduct.price);
}
console.log("Total price : " + total_product_price);

// for in loop "used on objects"
const student_details = {
  id: 101,
  name: "ahmed",
  age: 20,
  section: "A",
  course: "BSCS",
};
for (const key in student_details) {
  console.log(key + ":" + student_details[key]);
}
