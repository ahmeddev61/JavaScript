// math object : used mathematical calculation
// matg.round()
console.log(Math.round(4.8));
console.log(Math.round(4.4));
// math.floor(): round down

console.log(Math.floor(4.9));
console.log(Math.floor(2.6));

// math.ceil(): round up
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.5));

// math.trunc(): remove points
console.log(Math.trunc(3.4));

// math.abs(): covert negative number in to positive
console.log(Math.abs(-5));

// math.max(): return max value
let arr = [12, 12, 14, 15, 123];
console.log(Math.max(...arr));
console.log(Math.max(12, 13, 14));

// math.min(): return minimum value
console.log(Math.min(...arr));
console.log(Math.min(13, 14, 15, 1));

// math.sqrt(): reurn square root
console.log(Math.sqrt(25));
// math.pow(): return power of number
console.log(Math.pow(55, 4));
console.log(Math.pow(2, 0.5));
// rand(): is used to generate random number range 0 to 1
console.log(Math.random());
console.log(Math.random(1, 10));
