// write program that prints numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// print all even number between 1 and 50
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}
// create a countdown from 10 to 1 then print "happy new year"
for (let i = 10; i >= 1; i--) {
  console.log("happy new year");
}
// as the user for a number and print its multiplication table from 1 to 10
let num = prompt("enter a number");
let i = 1;
while (i <= 10) {
  console.log(num + "x" + i + " =" + num * i);
  i++;
}
// calculate the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
// keep asking user to enter a password until they enter the correct password
let pass = 11223344;
let a = 0;
let inp = prompt("enter a password");
while (a < 10) {
  if (pass == inp) {
    console.log("login succefull");
  } else {
    console.log("try again");
  }
  a++;
}
// positive number
let numb = Number(prompt("enter a number"));
k = 0;
while (k < 10) {
  if (numb > 0) {
    console.log("correct");
  } else {
    console.log("please enter postive number");
  }
  k++;
}
