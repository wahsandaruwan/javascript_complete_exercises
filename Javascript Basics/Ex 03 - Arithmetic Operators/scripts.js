// --------------------------------
// ------Arithmetic Operators------
// --------------------------------

var myAge, yourAge, year, result;
myAge = 26;
yourAge = 20;
year = 2021;

// Substraction
result = year - myAge;
console.log('I was born in '+result);

// Addition
result = year + 10;
console.log('After 10 years, It will be '+result);

// Multiplication
result = myAge * yourAge;
console.log('Product of our ages '+result);

// Division
console.log('Division of our ages '+(myAge/yourAge));

// Modulus
console.log('Modulus of our ages '+(myAge%yourAge));

// Exponentiation
console.log('Exponent of my age '+(myAge**2));

// Increment
console.log(myAge++);
console.log('Post Increment of my age '+(myAge));

console.log(++myAge);
console.log('Pre Increment of my age '+(myAge));

// Decrement
console.log(myAge--);
console.log('Post Decrement of my age '+(myAge));

console.log(--myAge);
console.log('Pre Decrement of my age '+(myAge));