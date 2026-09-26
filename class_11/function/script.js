function add(a, b) {
  let result = a + b;
  console.log(`${a} + ${b} :  ${result}`);
}
add(4, 9);
add(1, 1);

function introduction(name, age, city) {
  console.log(`my name is ${name}`);
  console.log(`my age is ${age}`);
  console.log(`i am from ${city}`);
}
introduction("ahmed", 20, "pakistan");

// default parameter

function greet(name = "guest") {
  console.log(`welcome ${name}`);
}
greet("ahmed");
greet();

function login(email, password, role = "user") {
  console.log(`Email:${email} password:${password} role:${role}`);
}
login("ahmeddaniyal@gmail.com", "11223344");
login("ahmeddaniyal@gmail.com", "11223344", "admin");

function mul(a, b) {
  return a * b;
}
console.log(mul(4, 5));
let result = mul(7, 7);
console.log(result);

function grade(num) {
  if (num >= 80) {
    console.log("A+");
  } else if (num >= 70) {
    console.log("B");
  } else if (num >= 60) {
    console.log("C");
  } else if (num >= 50) {
    console.log("D");
  } else {
    console.log("fail");
  }
}
grade(49);
