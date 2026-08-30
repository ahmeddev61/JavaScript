let marks = Number(prompt("enter your number"));
if (marks >= 90 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks < 90) {
  console.log("B");
} else if (marks >= 60 && marks < 70) {
  console.log("C");
} else if (marks > 50 && marks < 60) {
  console.log("D");
} else if (marks >= 0 && marks <= 50) {
  console.log("Fail");
} else {
  console.log("invalid number");
}

let day = Number(prompt("enter number from 1 to 7"));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("invalid Day");
}
