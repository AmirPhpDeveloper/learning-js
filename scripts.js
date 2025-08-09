//Short arrow functions

let sum = (num) => num + 2;

console.log(sum(12));

//

let sum2 = (num1, num2) => num1 + num2;

console.log(sum2(12, 13));

// back ticks

const sayHello = (name) => `hello MR ${name}`;
console.log(sayHello("DevMahmoodi"));

//

const sayHi = (name, family) => {
  return `Welcome 
    ${name} ${family} `;
};

console.log(sayHi("mahdi", "mahmoodi"));
