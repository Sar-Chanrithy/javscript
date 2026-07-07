//  1 simple function
function greet() {
    console.log("Hello, World!");
}

greet();

// 2 function with parameters

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Thy");

// 3. Function that Returns a Value
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

// 4. Arrow Function
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));

// 5. Anonymous Function
const sayHi = function() {
    console.log("Hi!");
};

sayHi();

// 6. Function to Check Even or Odd
function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkNumber(7));
console.log(checkNumber(10));

// Output:

// Odd
// Even
// 7. Function to Find the Maximum Number
function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(max(15, 9));


// example

function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log(result); // 20



