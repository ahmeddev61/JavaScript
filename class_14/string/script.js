// split() converts a string into an array.

// We can use any symbol as a separator: ",", "|", "#", etc.

const skills = "HTML, CSS, Javascript, React";

const result = skills.split(",");

console.log(result);
console.log(result[1]);

// for...of loop
for (const skill of result) {
  console.log(skill);
}

// Normal for loop
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// Reverse loop
for (let i = result.length - 1; i >= 0; i--) {
  console.log(result[i]);
}

// Remember: Array indexes start from `0`, so the last index is always `length - 1`.

// join convert array into string
let msg = ["welcome", "to", "smit"];
console.log(msg.join(" "));

// interview question : reverse a string
let word = "madam";
let convert_into_array = word.split("");
let reverse_array = convert_into_array.reverse("").join("");

console.log(word);
console.log(reverse_array);
if (word == reverse_array) {
  console.log("ok");
} else {
  console.log("no");
}

// count "a"
let mess = "javascript";
count = 0;
for (const ms of mess) {
  if (ms == "a") {
    count++;
  }
}
console.log(count);

// count word
let str = "i love java java java java";
let arr = str.split(" ");
counts = 0;
console.log(arr);
for (const ar of arr) {
  if (ar == "java") {
    counts++;
  }
}
console.log(counts);

// search text
let intro = " i am ahmed daniyal";
let search = "ahmed";
console.log(intro.includes(search.toLowerCase()));
