/* operators:(operator , operant)
operator : (+,-,*,/)
operant: data on which perform operation
expression : combination of operator and operant
2+4
2,4 operant
+ ->operator
= => assignment operator
== -> equlity (dont check datatype)
=== -> equlity ( check datatype)



*/
let a = 10;
let b = 5;
let add = "addition of a + b = " + (a + b);
let sub = "subtraction of a - b = " + (a - b);
let mul = "multiplication of a * b = " + a * b;
let div = "division of a / b = " + a / b;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log("modolus : " + (b % a));
for (let i = 0; i <= 20; i += 2) {
  console.log("Even number are :" + i);
}
let q = 9;
q += 10;
console.log(q);
q -= 9;
console.log(q);

let number = Number(prompt("enter a number"));
const char = prompt("Enter any operator for calculation");
let number1 = Number(prompt("enter a number"));
switch (char) {
  case "+":
    console.log(number + number1);
    break;
  case "-":
    console.log(number - number1);
    break;
  case "*":
    console.log(number * number1);
    break;
  case "/":
    console.log(number / number1);
    break;
  default:
    console.log("invalid operator");
}

// data types
// type of value -> to find datatype
let w = 2;
console.log(typeof w);
let intro = 'my name is "test"';
console.log(intro);
console.log(typeof intro);

// concitination of string "+" is used
let firstName = "ahmed ";
let lastName = "daniyal";
let FullName = firstName + lastName;
console.log(FullName);

// without + we can concitinate using `

let r = "hello";
let t = "ahmed";
let combine = ` ${r} ${t}`;
console.log(combine);
