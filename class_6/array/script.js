let stds = ["ahmed", "daniyal", "shazeb", "yusha", "bilals"];
// to add new element in array use "push"

stds.push("Bilal");
// pop is used to remove an element from array
stds.pop();
// add elemnt in start of array using "unshift"
stds.unshift("bilal");
// remove element from start of an array using"shift""
stds.shift();
console.log(stds);
for (let i = 0; i < stds.length; i++) {
  console.log(stds[i]);
}
// slice is used to get multiple elemnts from array
// arr name .slice(start_index, ending_index)
// staring_index = included
// ending_index= excluded
let top_10_std = stds.slice(1, 4);
console.log(top_10_std);
// changing array element
stds[1] = "marwat";
console.log(stds);
