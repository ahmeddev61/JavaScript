// String: a sequence of characters

// Three ways to define a string:
// 1. Single quotes ''
// 2. Double quotes ""
// 3. Backticks ``

let book = "OS";
let book2 = "GIS";

// Template literals allow us to insert variables using ${}
let books = `Total books are ${book} and ${book2}`;

console.log(books);

// String indexing
let name = "ahmed daniyal";

console.log(name[5]);
// Space is also an individual character/index.

// Accessing characters using indexes
const word = "javascript";

console.log(word[0]); // j
console.log(word[9]); // t
console.log(word[8]); // p

// To find the length of a string, use .length
let word1 = "ahmed";

console.log(word1.length); // 5

// Convert to uppercase
console.log(word1.toUpperCase()); // AHMED

// Convert to lowercase
console.log(word1.toLowerCase()); // ahmed

// trim() removes whitespace from the beginning and end
const namee = "   khan    ";

console.log(namee.trim()); // khan
let fname = prompt("Enter your name").trim();
if ((fname = "abdul")) {
  console.log(true);
} else {
  console.log(false);
}
// slice method to get specific element from a string  'START INDEX  INCLUDED AND END INDEX IS NOT INCLUDED '

const intro = "My name is ahmed daniyal";
console.log(intro.slice(11, 16));
console.log(intro.slice(-2));
// SLICE AND SUBSTRING SAME BUT SUBSTRING NOT SUPPORTED NEGATIVE INDEXES AND SLICE SUPPORT NEGATIVE INDEX
console.log(intro.substring(11, 16));
console.log(intro.substring(-3)); //not working

// includes check whether the word is present in string or not
let email = prompt("enter your email");
if (email.includes("@")) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// strats with : checks whehter a string start with specific text or not
// endwith : checks whehter a string end with specific text or not

let url = prompt("enter web live link");
if (url.startsWith("https")) {
  console.log(true);
} else {
  console.log("incorrect format");
}

// indexof(): find the position of text
let msg = "java script";
console.log(msg.indexOf("script"));
// if text is not found it gives return -1
console.log(msg.indexOf("print"));
// last indexof finds the last occurance
const text = "hello hello hello";
console.log(text.indexOf("hello"));
console.log(text.lastIndexOf("hello"));

// replace is used to replace part of string
const message = "i like javascript";
const newmessage = message.replace("javascript", " react");
console.log(newmessage);
