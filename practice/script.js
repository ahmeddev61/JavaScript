//object 1 challange
const user = {
  name: "alex",
  age: 25,
  location: {
    city: "lahore",
    country: "pakistan",
  },
  skills: ["javascript", "HTML"],
};
console.log(user.skills.push("css"));
console.log(user.skills);
let change_city = (user.location.city = "islamabad");
console.log(change_city);
user.isstudent = true;
console.log(user.isstudent);
console.log(user);
//object 2 challange
let bankaccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log("deposit succefully");
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("withdraw successfully");
    } else {
      console.log("insufficient balance");
    }
  },
};
bankaccount.withdraw(500);
console.log(bankaccount.withdraw);
