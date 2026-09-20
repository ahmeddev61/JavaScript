for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
// second example using for of loop
// let std = ["ahmed", "daniyal", "siraj", "yusha", "bilal"];
// let input = prompt("enter name");
// for (const student of std) {
//   if (student == input) {
//     console.log(student);
//     break;
//   }
//   console.log(student);
// }
// using break
let std = ["ahmed", "daniyal", "siraj", "yusha", "bilal"];
let input = prompt("enter name");
for (const student of std) {
  if (student == input) {
    console.log(student);
    continue;
  }
}
